import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Cars from './pages/cars'
import CookiePolicy from './pages/cookie-policy'
import Finance from './pages/finance'
import Warranty from './pages/Warranty'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/warranty" element={<Warranty />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
