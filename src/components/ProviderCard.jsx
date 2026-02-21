import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import RatingStars from './RatingStars'

/**
 * Displays a single provider summary card.
 * Clicking navigates to the provider's detail page.
 * @param {object} provider - Provider data object
 */
function ProviderCard({ provider }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const { id, name, specialization, location, rating, shortDescription } = provider

  function handleViewDetails() {
    navigate(`/providers/${id}`)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleViewDetails}
      className={`bg-surface rounded-lg p-6 flex flex-col gap-3 cursor-pointer transition-all duration-200 ${
        hovered
          ? 'shadow-md border-[1.5px] border-primary'
          : 'shadow-sm border-[1.5px] border-border'
      }`}
    >
      {/* Specialization badge */}
      <span className="self-start px-3 py-1 bg-[#6366f110] text-primary rounded-xl text-xs font-semibold tracking-wide">
        {specialization}
      </span>

      {/* Provider name */}
      <h3 className="text-lg font-bold text-content-primary leading-snug">
        {name}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-1.5">
        <MapPin size={14} className="text-content-muted shrink-0" />
        <span className="text-sm text-content-secondary">
          {location}
        </span>
      </div>

      {/* Rating */}
      <RatingStars rating={rating} showValue={true} />

      {/* Short description */}
      <p className="text-sm text-content-secondary leading-relaxed grow">
        {shortDescription}
      </p>

      {/* View details button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleViewDetails()
        }}
        className={`self-start mt-1 flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold border-[1.5px] border-primary transition-all duration-150 cursor-pointer ${
          hovered
            ? 'bg-primary text-white'
            : 'bg-transparent text-primary'
        }`}
      >
        View Details
        <ArrowRight size={14} />
      </button>
    </div>
  )
}

export default ProviderCard