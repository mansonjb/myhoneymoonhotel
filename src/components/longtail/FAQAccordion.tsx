interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden hover:border-rose-100 transition-colors">
          <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-rose-50/40 transition-colors list-none">
            <span className="pr-6">{item.question}</span>
            <svg
              className="w-4 h-4 text-zinc-400 group-hover:text-rose-500 shrink-0 group-open:rotate-180 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 pt-1">
            <p className="text-zinc-600 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
