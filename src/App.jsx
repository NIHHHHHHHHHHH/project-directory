import { useProviders } from './hooks/useProviders'

function App() {

   const { providers, loading, error } = useProviders()

  console.log('loading:', loading)
  console.log('providers:', providers)
  console.log('error:', error)

  return (
      <div className='text-center my-20 text-5xl text-blue-300'>
       {loading ? 'Loading...' : ` ${providers.length} providers loaded!`}
      </div>
  )
}

export default App
