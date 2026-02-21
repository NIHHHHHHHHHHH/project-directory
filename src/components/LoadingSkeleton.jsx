/**
 * Skeleton loader shown while provider data is being fetched.
 * Mimics the shape of a ProviderCard for smooth loading UX.
 */
function LoadingSkeleton() {
  return (
    <div className="skeleton-pulse bg-surface rounded-lg p-6 shadow-sm border border-border flex flex-col gap-3">

      {/* Provider name placeholder */}
      <div className="h-5 w-2/3 border-border rounded-sm" />

      {/* Specialization badge placeholder */}
      <div className="h-3.5 w-2/5 border-border rounded-sm" />

      {/* Location + rating row */}
      <div className="flex gap-3">
        <div className="h-3.5 w-1/3 border-border rounded-sm" />
        <div className="h-3.5 w-1/4 border-border rounded-sm" />
      </div>

      {/* Description lines */}
      <div className="h-3.5 w-full border-border rounded-sm" />
      <div className="h-3.5 w-4/5 border-border rounded-sm" />

      {/* Button placeholder */}
      <div className="h-9 w-1/3 border-border rounded-md mt-2" />
    </div>
  )
}

export default LoadingSkeleton