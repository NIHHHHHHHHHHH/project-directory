import { AlertCircle } from 'lucide-react'

/**
 * Displays a styled error message with an icon.
 * @param {string} message - The error message to display
 * @param {function} onRetry - Optional retry callback function
 */
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
      <AlertCircle
        size={48}
        className="text-error"
      />

      <h3 className="text-text-xl font-semibold text-content-primary">
        Something went wrong
      </h3>

      <p className="text-base text-content-secondary max-w-sm">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-md text-text-sm font-semibold transition-colors duration-150 cursor-pointer border-none"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage