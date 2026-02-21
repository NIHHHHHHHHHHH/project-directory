import { useState } from 'react'
import RatingStars from './components/RatingStars'
import ErrorMessage from './components/ErrorMessage'
import LoadingSkeleton from './components/LoadingSkeleton'
import SearchBar from './components/SearchBar'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="p-8 flex flex-col gap-8 max-w-xl mx-auto">
      <RatingStars rating={4.5} showValue={true} />
      <ErrorMessage message="Provider not found" />
      <LoadingSkeleton />
      <SearchBar value={search} onChange={setSearch} />
    </div>
  )
}

export default App