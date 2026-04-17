import Anthropic from '@anthropic-ai/sdk'
import { HotelContent } from '../../types/hotel'
import { RawHotel } from './collect'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function generateHotelContent(hotel: RawHotel): Promise<HotelContent> {
  const prompt = `You are a senior honeymoon travel editor who has personally visited hundreds of luxury properties. Write content for the following hotel page on myhoneymoonhotel.com.

Hotel: ${hotel.name}
Location: ${hotel.destination}, ${hotel.country}
Stars: ${hotel.stars}
Price: $${hotel.price_per_night_usd.min}–$${hotel.price_per_night_usd.max}/night
Adults-only: ${hotel.adults_only}
Key amenities: ${hotel.amenities.join(', ')}
Experience types: ${hotel.experience_types.join(', ')}

Write in a warm, expert, honest tone — like a trusted friend who has stayed there. Be specific and direct. Mention real trade-offs. Never use generic travel writing clichés.

Return a JSON object with exactly this structure:
{
  "verdict": "string (150-200 words) — start with a direct yes/no recommendation, explain why, who it's perfect for, who should skip it",
  "best_room": "string (80-120 words) — specific room/villa type recommendation for honeymooners and exactly why",
  "itinerary_7_nights": [
    { "day": 1, "title": "string", "description": "string (60-80 words)" },
    ... (7 days total)
  ],
  "honest_caveats": ["string", "string", "string", "string"] (4 specific honest downsides or practical warnings),
  "hotel_email_template": "string — a copy-paste email to send the hotel 2 weeks before arrival requesting honeymoon setup, mentioning 2 specific room preferences and 1 special request",
  "faqs": [
    { "question": "string", "answer": "string (40-60 words)" },
    ... (6 FAQs covering: is it worth it, honeymoon package, best room, best time to visit, transfer info, one surprise/insider tip)
  ],
  "true_cost_breakdown": [
    { "item": "string", "cost_usd": "string" },
    ... (6-8 items: room, transfers, spa day, private dinner, activities, tips, total estimate)
  ]
}

Return only valid JSON, no markdown, no explanation.`

  let retries = 0
  while (retries < 2) {
    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }],
      })

      const text = response.content[0].type === 'text' ? response.content[0].text : ''
      const content = JSON.parse(text) as HotelContent

      // Validate minimum content length
      if (content.verdict.split(' ').length < 80) {
        throw new Error('Verdict too short')
      }

      return content
    } catch {
      retries++
      if (retries >= 2) {
        console.warn(`[WARN] Content generation failed for ${hotel.name}, using placeholder`)
        return getPlaceholderContent(hotel)
      }
      await new Promise(r => setTimeout(r, 1000))
    }
  }
  return getPlaceholderContent(hotel)
}

function getPlaceholderContent(hotel: RawHotel): HotelContent {
  return {
    verdict: `${hotel.name} is a ${hotel.stars}-star property in ${hotel.destination} that offers a compelling honeymoon experience. With its ${hotel.amenities.slice(0, 3).join(', ')}, it caters well to couples seeking a romantic escape. The property's attention to detail and service make it a strong choice for honeymooners with a budget of $${hotel.price_per_night_usd.min}–$${hotel.price_per_night_usd.max} per night. Best for: couples who want a blend of luxury and local character. Skip it if: you need ultra-private villa seclusion or all-inclusive convenience.`,
    best_room: `Book the premium suite or villa category for your honeymoon — these rooms offer the most privacy, best views, and are typically eligible for honeymoon upgrade packages. Ask for a high floor or ocean-facing unit when booking.`,
    itinerary_7_nights: [
      { day: 1, title: 'Arrival & First Impressions', description: 'Check in early if possible, settle into your room, order in-villa dining for a relaxed first evening.' },
      { day: 2, title: 'Spa Morning & Beach Afternoon', description: 'Book a couples massage first thing — the spa is quietest in the morning. Spend the afternoon at the beach or pool.' },
      { day: 3, title: 'Private Dinner Experience', description: 'Arrange a private dining setup through the concierge — most properties offer beach or villa dining with advance notice.' },
      { day: 4, title: 'Water Activities & Exploration', description: 'Snorkeling, kayaking, or a sunset boat tour. Ask the activities desk the day before to secure your spot.' },
      { day: 5, title: 'Cultural Excursion', description: 'Half-day off-property excursion to connect with local culture. Return for a leisurely poolside afternoon.' },
      { day: 6, title: 'Indulgence Day', description: 'Full spa day — couples treatment in the morning, afternoon by the pool, champagne at sunset.' },
      { day: 7, title: 'Final Morning & Departure', description: 'Slow morning with room service breakfast, late checkout if available, capture final photos before transfer.' },
    ],
    honest_caveats: [
      'Transfer costs can add $200–$500 to your total depending on distance from the airport',
      'Peak season rates (Dec–Jan) can be 40% higher than shoulder season',
      'Wi-Fi quality in remote villas can be inconsistent — plan to disconnect',
      'In-room dining has significant surcharges compared to restaurant dining',
    ],
    hotel_email_template: `Subject: Honeymoon Booking — [Your Name] — [Check-in Date]

Dear [Hotel Name] Reservations Team,

My partner and I are honeymooning at your property from [check-in] to [check-out] (Booking ref: [reference]).

We would love to request:
1. A room with the best sunset/ocean view available in our category
2. A high floor or most private villa position if possible
3. Any complimentary honeymoon touches you can arrange would mean the world to us

We're celebrating our first week of marriage and looking forward to experiencing your property.

Warm regards,
[Your Name]`,
    faqs: [
      { question: `Is ${hotel.name} good for a honeymoon?`, answer: `Yes — the property has strong couples credentials with dedicated romance packages, excellent spa facilities, and service well-suited to special occasions. Book the premium room category and notify the hotel in advance for the best experience.` },
      { question: 'What does the honeymoon package include?', answer: 'Most packages include room upgrades (subject to availability), welcome amenities, and one complimentary experience such as a couples massage or private dinner. Confirm exact inclusions when booking.' },
      { question: 'Which room should we book?', answer: `The premium villa or suite category gives you the best combination of space, view, and privacy. Ask for the most secluded unit in that category when confirming your booking.` },
      { question: `What is the best time to visit ${hotel.destination}?`, answer: `The dry season typically offers the best weather and clearest water. Check destination-specific timing, as shoulder season offers similar conditions at 20–30% lower rates.` },
      { question: 'How do we get from the airport to the hotel?', answer: 'The hotel arranges transfers — confirm this when booking. Factor in transfer time and cost when planning your arrival flight, especially if a seaplane or boat transfer is required.' },
      { question: 'Any insider tips for honeymooners?', answer: 'Email the hotel concierge two weeks before arrival with your room preferences and any special requests. Properties go the extra mile when they know it\'s your honeymoon — but only if you tell them.' },
    ],
    true_cost_breakdown: [
      { item: 'Accommodation (7 nights)', cost_usd: `$${hotel.price_per_night_usd.min * 7}–$${hotel.price_per_night_usd.max * 7}` },
      { item: 'Airport transfers (round trip)', cost_usd: '$200–$600' },
      { item: 'Couples spa day', cost_usd: '$300–$500' },
      { item: 'Private beach/villa dinner (×2)', cost_usd: '$300–$600' },
      { item: 'Activities & excursions', cost_usd: '$200–$400' },
      { item: 'Daily drinks & extras', cost_usd: '$50–$100/day' },
      { item: 'Gratuities', cost_usd: '$100–$200' },
      { item: 'Total estimated trip cost', cost_usd: `$${Math.round(hotel.price_per_night_usd.min * 7 * 1.4)}–$${Math.round(hotel.price_per_night_usd.max * 7 * 1.4)}` },
    ],
  }
}
