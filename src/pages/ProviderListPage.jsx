import { useMemo, useState } from 'react'
import { useProviders } from '../hooks/useProviders'
import ProviderCard from '../components/ProviderCard'
import SearchBar from '../components/SearchBar'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ErrorMessage from '../components/ErrorMessage'
import { Users } from 'lucide-react'

/**
 * Main listing page that displays all learning support providers.
 * Includes search/filter functionality and handles loading/error states.
 */
function ProviderListPage() {
  const { providers, loading, error } = useProviders()
  const [searchQuery, setSearchQuery] = useState('')

  /**
   * Filters providers by name or specialization based on search query.
   * useMemo prevents unnecessary recomputation on every render.
   */
  const filteredProviders = useMemo(() => {
    if (!searchQuery.trim()) return providers

    const query = searchQuery.toLowerCase()
    return providers.filter(
      (provider) =>
        provider.name.toLowerCase().includes(query) ||
        provider.specialization.toLowerCase().includes(query)
    )
  }, [providers, searchQuery])

  return (
    <div className="min-h-screen bg-background">

      {/* Page header */}
      <div className="bg-surface border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-content-primary mb-2">
            Find a Learning Support Provider
          </h1>
          <p className="text-base text-content-secondary mb-6">
            Browse our directory of specialists helping children with learning difficulties across the UAE.
          </p>

          {/* Search bar */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Loading state — show 6 skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <ErrorMessage message={error} />
        )}

        {/* Empty search results */}
        {!loading && !error && filteredProviders.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <Users size={48} className="text-content-muted" />
            <h3 className="text-xl font-semibold text-content-primary">
              No providers found
            </h3>
            <p className="text-base text-content-secondary">
              Try searching with a different name or specialization.
            </p>
          </div>
        )}

        {/* Providers grid */}
        {!loading && !error && filteredProviders.length > 0 && (
          <>
            {/* Results count */}
            <p className="text-sm text-content-secondary mb-6">
              Showing{' '}
              <span className="font-semibold text-content-primary">
                {filteredProviders.length}
              </span>{' '}
              {filteredProviders.length === 1 ? 'provider' : 'providers'}
              {searchQuery && (
                <span> for "{searchQuery}"</span>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProviderListPage