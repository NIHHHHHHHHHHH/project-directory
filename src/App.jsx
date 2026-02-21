import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProviderListPage from './pages/ProviderListPage'
import ProviderDetailPage from './pages/ProviderDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProviderListPage />} />
        <Route path="/providers" element={<ProviderListPage />} />
        <Route path="/providers/:id" element={<ProviderDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App