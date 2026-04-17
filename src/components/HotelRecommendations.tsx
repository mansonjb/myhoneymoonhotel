import { Hotel } from '../../types/hotel'
import HotelCard from './HotelCard'

interface HotelRecommendationsProps {
  sameStyle: Hotel[]
  sameDestination: Hotel[]
  currentHotel: Hotel
}

export default function HotelRecommendations({ sameStyle, sameDestination, currentHotel }: HotelRecommendationsProps) {
  return (
    <div className="space-y-10">
      {sameStyle.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Same vibe, different destination</h2>
          <p className="text-gray-500 mb-6">
            Love the {currentHotel.experience_types[0]?.replace(/-/g, ' ')} experience? These properties deliver it elsewhere.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sameStyle.map(h => <HotelCard key={h.slug} hotel={h} />)}
          </div>
        </div>
      )}
      {sameDestination.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Also in {currentHotel.destination.replace(/-/g, ' ')}
          </h2>
          <p className="text-gray-500 mb-6">Other honeymoon hotels in the same destination, at different price points.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sameDestination.map(h => <HotelCard key={h.slug} hotel={h} />)}
          </div>
        </div>
      )}
    </div>
  )
}
