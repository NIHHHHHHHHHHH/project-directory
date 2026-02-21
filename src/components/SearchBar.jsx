import { Search, X } from 'lucide-react'

/**
 * Search input for filtering providers by name or specialization.
 * @param {string} value - Current search query
 * @param {function} onChange - Callback when input changes
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-lg">

      {/* Search icon */}
      <Search
        size={18}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name or specialization..."
        className="w-full py-3 pl-10 pr-10 text-sm text-content-primary bg-surface border-[1.5px] border-border rounded-lg shadow-sm outline-none focus:border-primary transition-colors duration-150"
      />

      {/* Clear button — only visible when there is input */}
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-content-muted hover:text-content-primary transition-colors duration-150 cursor-pointer bg-transparent border-none flex items-center"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar