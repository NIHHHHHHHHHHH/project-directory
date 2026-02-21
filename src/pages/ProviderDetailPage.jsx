import { useParams, useNavigate } from 'react-router-dom'
import { useProviderById } from '../hooks/useProviders'
import RatingStars from '../components/RatingStars'
import ErrorMessage from '../components/ErrorMessage'
import LoadingSkeleton from '../components/LoadingSkeleton'
import {
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  Monitor,
} from 'lucide-react'

/**
 * Detail page for a single learning support provider.
 * Fetches provider by ID from URL params and displays full information.
 */
function ProviderDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { provider, loading, error } = useProviderById(id)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Back button */}
        <button
          onClick={() => navigate('/providers')}
          className="flex items-center gap-2 text-sm font-medium text-content-secondary hover:text-primary transition-colors duration-150 mb-6 cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={16} />
          Back to Directory
        </button>

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col gap-4">
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <ErrorMessage
            message={error}
            onRetry={() => navigate('/providers')}
          />
        )}

        {/* Provider detail content */}
        {!loading && !error && provider && (
          <div className="flex flex-col gap-6">

            {/* Header card */}
            <div className="bg-surface rounded-lg p-8 shadow-sm border border-border">

              {/* Specialization badge */}
              <span className="inline-block px-3 py-1 bg-[#6366f110] text-primary rounded-xl text-xs font-semibold tracking-wide mb-4">
                {provider.specialization}
              </span>

              {/* Name */}
              <h1 className="text-3xl font-bold text-content-primary leading-tight mb-3">
                {provider.name}
              </h1>

              {/* Location + Rating row */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-content-muted" />
                  <span className="text-sm text-content-secondary">
                    {provider.location}
                  </span>
                </div>
                <RatingStars rating={provider.rating} showValue={true} />
              </div>

              {/* Quick info badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-md border border-border">
                  <Briefcase size={14} className="text-content-muted" />
                  <span className="text-xs text-content-secondary font-medium">
                    {provider.experience} experience
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-md border border-border">
                  <Monitor size={14} className="text-content-muted" />
                  <span className="text-xs text-content-secondary font-medium">
                    {provider.sessionType}
                  </span>
                </div>
              </div>
            </div>

            {/* About section */}
            <div className="bg-surface rounded-lg p-8 shadow-sm border border-border">
              <h2 className="text-xl font-bold text-content-primary mb-3">
                About
              </h2>
              <p className="text-base text-content-secondary leading-relaxed">
                {provider.longDescription}
              </p>
            </div>

            {/* Availability + Contact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Availability */}
              <div className="bg-surface rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-bold text-content-primary mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  Availability
                </h2>
                <div className="flex flex-wrap gap-2">
                  {provider.availableDays.map((day) => (
                    <span
                      key={day}
                      className="px-3 py-1 bg-[#6366f110] text-primary rounded-md text-sm font-medium"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-surface rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-bold text-content-primary mb-4">
                  Contact
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-primary shrink-0" />
                    <a
                      href={`mailto:${provider.contactEmail}`}
                      className="text-sm text-content-secondary hover:text-primary transition-colors duration-150"
                    >
                      {provider.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-primary shrink-0" />
                    <a
                      href={`tel:${provider.phoneNumber}`}
                      className="text-sm text-content-secondary hover:text-primary transition-colors duration-150"
                    >
                      {provider.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProviderDetailPage