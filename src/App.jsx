import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProviderListPage from './pages/ProviderListPage'
import ProviderDetailPage from './pages/ProviderDetailPage'

/**
 * Root application component.
 * Sets up client-side routing with React Router.
 * - "/"              → redirects to /providers
 * - "/providers"     → ProviderListPage
 * - "/providers/:id" → ProviderDetailPage
 * - "*"              → redirects unknown routes back to /providers
 */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Redirect root to /providers */}
        <Route path="/" element={<Navigate to="/providers" replace />} />

        {/* Main listing page */}
        <Route path="/providers" element={<ProviderListPage />} />

        {/* Individual provider detail page */}
        <Route path="/providers/:id" element={<ProviderDetailPage />} />

        {/* Catch all unknown routes → back to listing */}
        <Route path="*" element={<Navigate to="/providers" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App