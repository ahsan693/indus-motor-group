import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Cars from './pages/cars'
import CookiePolicy from './pages/cookie-policy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
