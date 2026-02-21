import { Star } from 'lucide-react'

/**
 * Displays a star rating visually.
 * @param {number} rating - Rating value between 1 and 5
 * @param {boolean} showValue - Whether to show the numeric rating value
 */
function RatingStars({ rating, showValue = true }) {
  const totalStars = 5
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const isFull = i < fullStars
        const isHalf = !isFull && i === fullStars && hasHalfStar

        return (
          <Star
            key={i}
            size={16}
            className={`transition-colors duration-150 ${
              isFull || isHalf
                ? 'text-secondary'
                : 'text-border'
            } ${isFull ? 'fill-secondary' : 'fill-transparent'}`}
          />
        )
      })}

      {showValue && (
        <span className="text-sm text-content-secondary ml-1 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default RatingStars