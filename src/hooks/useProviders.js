import { useState, useEffect } from 'react'
import providersData from '../data/providers.json'

/**
 * Simulates an async API call to fetch all providers.
 * Returns loading, error, and data states.
 */
export function useProviders() {
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate network delay like a real API call
    const fetchProviders = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (providersData && providersData.length > 0) {
            resolve(providersData)
          } else {
            reject(new Error('No providers found'))
          }
        }, 800) // 800ms simulated delay
      })
    }

    fetchProviders()
      .then((data) => {
        setProviders(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, []) // runs once on mount — mimics componentDidMount

  return { providers, loading, error }
}

/**
 * Simulates an async API call to fetch a single provider by ID.
 * Returns loading, error, and data states.
 */
export function useProviderById(id) {
  const [provider, setProvider] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProvider = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const found = providersData.find((p) => p.id === id)
          if (found) {
            resolve(found)
          } else {
            reject(new Error(`Provider with ID "${id}" not found`))
          }
        }, 600)
      })
    }

    fetchProvider()
      .then((data) => {
        setProvider(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id]) // re-runs if id changes

  return { provider, loading, error }
}