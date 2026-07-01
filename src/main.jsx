import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// iOS 100vh fix: set a CSS var `--vh` representing 1% of the viewport height.
// Use this in components for hero heights: height: calc(var(--vh, 1vh) * 100)
function setVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}
setVh()
window.addEventListener('resize', setVh)

// Jump to the top of the page (no animation) on every route change.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
