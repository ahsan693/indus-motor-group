import { Link } from 'react-router-dom'
import { useMemo, useRef, useState, useEffect } from 'react'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import navbarBg from '../images/homepage-images/navbar-backgorund.jpg'
import luxuryCarImage from '../images/homepage-images/image 9.png'
import findYourCarImg from '../images/homepage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'
import carefullySelectedImg from '../images/homepage-images/lhKhWi6mDCQjU2k2CXrFgqm9AA.jpg'
import nationwideDeliveryImg from '../images/homepage-images/NaXiqyCuHV5HfwzSgAX8DPnjY6o.jpg'
import warrantyImg from '../images/homepage-images/7wP4pWwqqXr5Bc6QUsmemBnVi98.jpg'
import warrantyBadgeImg from '../images/homepage-images/Frame 1321319011.png'
import financeAltImg from '../images/homepage-images/x28QfPunZTyDfNTpW3xLpenckbU.jpg'
import tradeInIcon from '../images/homepage-images/trade-in.png'
import financeIcon from '../images/homepage-images/finance.png'

const navItems = [
  { label: 'Our Cars', to: '/cars' },
  { label: 'Warranty', to: '/warranty' },
  { label: 'Finance', to: '/finance' },
  { label: 'About', to: '/about' },
]

const testimonials = [
  {
    quote:
      'Great experience buying my car from Indus Motor Group. The vehicle was exactly as described and the whole process was smooth and straightforward.',
    name: 'James Murphy',
  },
  {
    quote:
      'Very impressed with the quality of the cars and the honest approach. Everything was explained clearly and the purchase was quick and hassle free.',
    name: "Sarah O'Connor",
  },
  {
    quote:
      'Excellent service and a great car. The team was professional and helpful throughout, and I would happily recommend them.',
    name: 'David Byrne',
  },
]

const whyChooseCards = [
  {
    title: 'Carefully Selected Vehicles',
    body: 'Every vehicle is carefully selected for quality, reliability, and condition.',
    image: carefullySelectedImg,
  },
  {
    title: 'Nationwide Delivery',
    body: 'We can arrange delivery of your vehicle anywhere across Ireland.',
    image: nationwideDeliveryImg,
  },
  {
    title: 'Warranty & Aftercare Options',
    body: 'Warranty options available at the point of sale, with coverage for up to two years.',
    image: warrantyImg,
  },
  {
    title: 'Finance Available',
    body: 'Finance options available through trusted third-party lenders.',
    image: financeAltImg,
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileNavRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and manage focus when mobile menu is open
  useEffect(() => {
    if (!mobileNavRef) return

    let prevOverflow = ''
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // Focus the first focusable element in the mobile menu
      requestAnimationFrame(() => {
        const first = mobileNavRef.current?.querySelector('a,button')
        first?.focus()
      })

      document.addEventListener('keydown', handleKey)
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow || ''
    }
  }, [isMobileMenuOpen])

  // Always fixed, full width, high z-index, solid bg
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'}`}>
      <div className="layout-shell py-4 md:py-5">
        <div className="flex w-full items-center gap-3">
          <Link to="/" className="-ml-1 inline-flex shrink-0 items-center gap-2 text-white sm:-ml-2 md:-ml-[17px]" aria-label="Indus Motor Group home">
            <span className="flex flex-col gap-0.5" aria-hidden="true">
              <span className="h-[2px] w-3 -rotate-[22deg] rounded-full bg-white"></span>
              <span className="h-[2px] w-2.5 -rotate-[22deg] rounded-full bg-white"></span>
              <span className="h-[2px] w-2 -rotate-[22deg] rounded-full bg-white"></span>
            </span>
            <span className="text-[12px] font-semibold leading-[0.95] tracking-[0.14em] md:text-[16px]">
              <span className="block">INDUS</span>
              <span className="block">MOTOR</span>
              <span className="block">GROUP</span>
            </span>
          </Link>

          <nav className="ml-6 hidden flex-1 items-center justify-center gap-7 text-[14px] text-zinc-300 md:text-[16px] lg:flex">
            <Link to="/" className="ui-nav-link transition-colors hover:text-white" onClick={() => window.scrollTo(0,0)}>
              Home
            </Link>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="ui-nav-link transition-colors hover:text-white" onClick={() => window.scrollTo(0,0)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
            <button className="ui-btn rounded-full bg-white px-4 py-1.5 text-[14px] font-medium text-black sm:px-5 sm:py-2 md:text-[16px]">Contact Us</button>
          </div>

          {/* Hamburger menu button: only visible when sidebar is closed */}
          {!isMobileMenuOpen && (
            <button
              type="button"
              className="fixed top-4 right-4 z-[100] inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/80 text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none lg:hidden"
              aria-label="Open menu"
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ boxShadow: '0 4px 24px -8px rgba(0,0,0,0.45)' }}
            >
              <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
                <span className="h-0.5 w-full rounded-full bg-white transition-transform duration-200"></span>
                <span className="h-0.5 w-full rounded-full bg-white transition-transform duration-200"></span>
              </span>
            </button>
          )}
        </div>

        <div
          id="mobile-nav"
          className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          role="dialog"
          aria-modal={isMobileMenuOpen}
        >
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* slide-in panel */}
          <div
            className={`absolute right-0 top-0 h-auto mt-6 w-[92vw] max-w-[320px] rounded-xl shadow-2xl transform bg-black p-4 transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            ref={mobileNavRef}
            aria-hidden={!isMobileMenuOpen}
          >
            {/* Close button inside sidebar */}
            {isMobileMenuOpen && (
              <button
                type="button"
                className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/80 text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ boxShadow: '0 4px 24px -8px rgba(0,0,0,0.45)' }}
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded bg-white"></span>
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded bg-white"></span>
                </span>
              </button>
            )}
            <nav className="rounded-xl border border-white/10 bg-black p-2 text-[16px] text-zinc-200 mt-2">
              <Link to="/" className="ui-menu-link block rounded-lg px-3 py-2 transition-colors hover:bg-white/10" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="ui-menu-link block rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
                  onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}
                >
                  {item.label}
                </Link>
              ))}
              <button className="ui-btn mt-3 w-full rounded-full bg-white px-4 py-2 text-[16px] font-medium text-black">
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { cars: featuredCars, loading: carsLoading } = useCars({ featured: true })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const recentCars = useMemo(
    () =>
      [...featuredCars]
        .sort((a, b) => {
          const aCreated = new Date(a._createdAt || a.createdAt || 0).getTime()
          const bCreated = new Date(b._createdAt || b.createdAt || 0).getTime()
          return bCreated - aCreated
        })
        .slice(0, 4),
    [featuredCars],
  )
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonialsCarouselRef = useRef(null)

  const handleTestimonialScroll = (event) => {
    const { scrollLeft, clientWidth } = event.currentTarget
    if (!clientWidth) return

    const index = Math.round(scrollLeft / clientWidth)
    const boundedIndex = Math.max(0, Math.min(testimonials.length - 1, index))
    setActiveTestimonial((prev) => (prev === boundedIndex ? prev : boundedIndex))
  }

  const scrollToTestimonial = (index) => {
    const node = testimonialsCarouselRef.current
    if (!node) return

    node.scrollTo({
      left: node.clientWidth * index,
      behavior: 'smooth',
    })
    setActiveTestimonial(index)
  }

  return (
    <div className="min-h-screen bg-black text-zinc-300 overflow-x-hidden iphone:text-[15px]">
      <section style={{ height: 'var(--hero-height, calc(var(--vh, 1vh) * 100))' }} className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-screen w-screen overflow-hidden">
        <img
          src={navbarBg}
          alt="Luxury vehicle background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-[1.20] object-cover object-[58%_29%] brightness-[1.1] contrast-[1.05] saturate-[1.06] md:object-[56%_34%] iphone:inset-x-0 iphone:top-0 iphone:bottom-auto iphone:h-[var(--hero-image-height)]"
        />
        <div className="absolute inset-x-0 top-0 h-28 md:h-36 pointer-events-none bg-gradient-to-b from-black/40 to-transparent"></div>

        <Navbar />

        <div className="relative z-10 grid h-full grid-rows-[1fr_auto] iphone:block">
          <div className="hero-shell flex items-end pb-0 iphone:hidden">
            <span className="relative z-20 hidden w-fit items-center gap-2 rounded-full border border-white/15 bg-black px-4 py-2 text-[12px] text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.92)] md:inline-flex md:translate-y-1/2 md:text-[14px]">
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9 8 4h8l5 5-9 11L3 9Z" />
                <path d="M8 4l4 5 4-5" />
              </svg>
              Drive Away with Confidence
            </span>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/52 to-black/90"></div>
              <div className="hero-content-rise hero-shell hero-mobile-shell relative z-10 pb-2 pt-4 iphone:pt-[36vw] iphone:pb-2 iphone:-translate-y-[12vw] lg:translate-y-[20px] min-[390px]:pb-4 min-[390px]:pt-10 sm:pb-4 sm:pt-14 md:pb-6 md:pt-16 lg:pb-4 xl:pb-4">
              <span className="relative z-20 mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black px-4 py-2 text-[12px] text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.92)] md:hidden">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9 8 4h8l5 5-9 11L3 9Z" />
                  <path d="M8 4l4 5 4-5" />
                </svg>
                Drive Away with Confidence
              </span>
              <h1 className="hero-heading-mobile max-w-[620px] text-[22px] font-normal leading-tight text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] min-[390px]:text-[26px] sm:text-[28px] md:text-[38px] iphone:text-[36px] iphone:leading-tight">
                <span className="block">Quality Used Cars</span>
                <span className="block">in Ireland</span>
              </h1>
              <div className="mt-4 flex flex-col items-start gap-4 sm:gap-5">
                <p className="max-w-[560px] text-[16px] leading-7 text-zinc-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.58)] md:text-[18px] iphone:text-[14px] iphone:leading-5">
                  Transparent pricing. Nationwide delivery.
                </p>
                <Link to="/cars" className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black iphone:text-[14px] iphone:px-3 iphone:py-2">Browse Available Cars</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add top padding to prevent content hiding behind fixed navbar (height: ~64px on desktop, ~48px on mobile) */}
      <main className="layout-shell layout-stack pt-[48px] sm:pt-[48px] md:pt-[56px] iphone:pt-[32px]">
        <section className="mt-[8px] sm:mt-[12px] md:mt-[16px] iphone:mt-[4px]">
          <div className="mb-10 sm:mb-12 md:mb-16 flex flex-row flex-wrap items-center justify-between gap-3 iphone:mb-3 iphone:gap-1">
            <h2 className="text-[22px] font-normal text-white md:text-[30px] iphone:text-[22px]">Featured Cars</h2>
            <Link to="/cars" className="ui-btn inline-flex rounded-full bg-white px-5 py-2 text-[16px] font-medium text-black shadow-[0_16px_30px_-24px_rgba(255,255,255,0.7)] md:text-[16px] iphone:text-[14px] iphone:px-3 iphone:py-2">
              View All Cars
            </Link>
          </div>

          {carsLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-zinc-700"></div>
                <p className="text-[16px] text-zinc-400 md:text-[18px]">Loading featured cars...</p>
              </div>
            </div>
          ) : recentCars.length === 0 ? (
            <p className="text-[16px] text-zinc-400 md:text-[18px]">No featured cars available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 iphone:gap-2">
              {recentCars.map((car) => {
                // Handle both Sanity image objects and direct URLs
                let imageUrl = null
                if (car.images?.[0]) {
                  const img = car.images[0]
                  // Check if it's a proper Sanity image object with _type
                  if (img._type === 'image' || img.asset) {
                    imageUrl = urlFor(img).width(600).url()
                  } 
                  // Check if it's a URL string directly
                  else if (typeof img === 'string') {
                    imageUrl = img
                  }
                  // Check if it has a url property
                  else if (img.url) {
                    imageUrl = img.url
                  }
                }

                return (
                <Link key={car._id} to={`/details?id=${car._id}`} className="group block">
                  <article className="motion-card h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-black transition-colors hover:border-zinc-700 iphone:rounded-xl">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${car.make} ${car.model}`}
                        loading="lazy"
                        decoding="async"
                        className="motion-media h-[210px] w-full object-cover iphone:h-[180px]"
                      />
                    ) : (
                      <div className="flex h-[210px] w-full items-center justify-center bg-zinc-800 text-[14px] text-zinc-400 md:text-[16px] iphone:h-[180px]">
                        No image
                      </div>
                    )}
                    <div className="space-y-[15px] p-[10px] iphone:space-y-2 iphone:p-2">
                      <div className="flex items-start justify-between gap-3 iphone:gap-1">
                        <h3 className="truncate text-[16px] font-normal text-white iphone:text-[13px]">{car.make} {car.model}</h3>
                        <span className="motion-link-slide pt-1 text-[13px] font-normal text-[#BABABA] iphone:text-[13px]">View Details {'>'}</span>
                      </div>
                      <p className="text-[16px] font-normal text-[#BABABA] iphone:text-[13px]">
                        {car.year}  -  {car.mileage?.toLocaleString() || 0} km  -  {car.transmission}  -  {car.fuelType}
                      </p>
                      <div className="flex flex-wrap gap-[10px] iphone:gap-1">
                        {car.transmission && (
                          <span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
                            {car.transmission}
                          </span>
                        )}
                        {car.fuelType && (
                          <span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
                            {car.fuelType}
                          </span>
                        )}
                        {car.seats && (
                          <span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
                            {car.seats} Seats
                          </span>
                        )}
                      </div>
                      <p className="text-[24px] font-normal leading-none text-white iphone:text-[15px]">€{car.price?.toLocaleString() || 0}</p>
                      <p className="text-[16px] font-normal text-[#BABABA] iphone:text-[13px]">Finance Available</p>
                    </div>
                  </article>
                </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Trade-In & Financing Options Section */}
        <section className="mt-[80px] overflow-hidden bg-black sm:mt-[100px] md:mt-[150px] iphone:mt-4">
          <div className="border-b border-zinc-800 px-4 py-8 md:px-5 md:py-12 iphone:px-2 iphone:py-3">
            <h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[22px]">
              <span className="block sm:inline">Trade-In &amp;</span>{' '}
              <span className="block sm:inline">Financing Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 bg-black md:grid-cols-2 iphone:gap-2">
            <article className="group px-4 py-4 md:min-h-[160px] md:px-5 md:py-5 iphone:px-2 iphone:py-2">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <img src={tradeInIcon} alt="Trade-in icon" className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-[16px] font-normal text-zinc-100 md:text-[18px] iphone:text-[13px]">Trade-In</h3>
              <p className="mt-1.5 max-w-[300px] text-[16px] leading-6 text-zinc-500 md:text-[18px] iphone:text-[13px]">
                Trade in your current vehicle as part of your purchase.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[16px] font-medium text-zinc-100 transition-colors hover:text-white md:text-[16px] iphone:text-[14px] iphone:px-2 iphone:py-1">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Enquire Now</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </article>

            <article className="group px-4 py-4 md:min-h-[160px] md:px-5 md:py-5 iphone:px-2 iphone:py-2">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <img src={financeIcon} alt="Finance icon" className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-[16px] font-normal text-zinc-100 md:text-[18px] iphone:text-[13px]">Finance Assistance</h3>
              <p className="mt-1.5 max-w-[320px] text-[16px] leading-6 text-zinc-500 md:text-[18px] iphone:text-[13px]">
                Finance options available through trusted third party lenders.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[16px] font-medium text-zinc-100 transition-colors hover:text-white md:text-[16px] iphone:text-[14px] iphone:px-2 iphone:py-1">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </article>
          </div>

          <img
            src={luxuryCarImage}
            alt="Luxury car interior"
            loading="lazy"
            decoding="async"
            className="h-[290px] object-cover md:h-[500px] iphone:h-[140px]"
            style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', margin: 0, paddingLeft: 0, paddingRight: 0 }}
          />
        </section>

        <section
          className="mt-[80px] rounded-2xl px-4 py-7 sm:mt-[100px] md:mt-[150px] md:px-10 md:py-11 iphone:mt-4 iphone:px-2 iphone:py-3"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-1 text-[14px] text-zinc-500 md:text-[16px] iphone:text-[13px]">
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
              </svg>
              Peace of Mind Included
            </span>
            <h2 className="mt-4 text-[22px] font-normal leading-tight text-zinc-100 md:text-[30px] iphone:text-[22px]">Warranty & Aftercare Protection</h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-[980px] items-center gap-6 sm:gap-7 md:grid-cols-[1fr_auto] md:gap-16 iphone:gap-2">
            <div className="max-w-[360px] text-[16px] leading-7 text-zinc-300 md:text-[18px] iphone:text-[13px] mx-auto text-left md:text-left">
              <p className="mb-6">
                Warranty cover available on all vehicles<br />
                through trusted providers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Up to 2 Years Coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Wide range of protection plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Added peace of mind</span>
                </li>
              </ul>
            </div>

            <div className="mx-auto">
              <img
                src={warrantyBadgeImg}
                alt="2 year warranty badge"
                loading="lazy"
                decoding="async"
                className="h-[80px] w-[70px] object-contain md:h-[210px] md:w-[182px] iphone:h-[40px] iphone:w-[35px]"
              />
            </div>
          </div>
        </section>

        <section className="mt-[80px] sm:mt-[100px] md:mt-[150px] iphone:mt-4">
          <h2 className="mb-16 text-center text-[22px] font-normal leading-tight text-white md:mb-20 md:text-[30px] iphone:text-[22px] iphone:mb-4">Why Choose Indus Motor Group</h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:gap-y-8 md:grid-cols-2 iphone:gap-y-2">
            {whyChooseCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[14px] bg-black transition-transform duration-500 ease-out hover:-translate-y-1 aspect-[16/9] md:aspect-[16/9]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 md:h-[45%] iphone:h-[60%] bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
                  <div className="relative z-20 px-4 pb-3 md:px-5 md:pb-4 iphone:px-2 iphone:pb-2">
                    <h3 className="text-[16px] font-normal leading-tight text-white md:text-[18px] iphone:text-[13px]">{card.title}</h3>
                    <p className="mt-1 max-w-none md:max-w-[300px] text-[16px] leading-6 text-zinc-200 md:text-[18px] iphone:text-[13px]">{card.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-[80px] text-center sm:mt-[100px] md:mt-[150px] iphone:mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1 text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">
            <svg viewBox="0 0 16 16" className="h-2 w-2 text-zinc-400" fill="currentColor" aria-hidden="true">
              <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
            </svg>
            Trusted by Drivers Across Ireland
          </span>
          <h2 className="mt-4 text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[22px]">What Our Customers Say</h2>
          <p className="mt-2 text-[16px] text-zinc-500 md:text-[18px] iphone:text-[13px]">Real feedback from customers who purchased their vehicles from us.</p>

          <div className="mt-12 md:hidden iphone:mt-4">
            <div
              ref={testimonialsCarouselRef}
              onScroll={handleTestimonialScroll}
              className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Customer reviews carousel"
            >
              {testimonials.map((item) => (
                <div key={item.name} className="w-full shrink-0 snap-center px-1">
                  <article className="rounded-2xl bg-[#101010] p-4 text-left transition-transform duration-500 ease-out">
                    <p className="text-[14px] tracking-[0.16em] text-white md:text-[16px] iphone:text-[13px]">★★★★★</p>
                    <p className="mt-3 min-h-[92px] text-[16px] leading-7 text-zinc-300 md:text-[18px] iphone:text-[13px]">{item.quote}</p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                        alt="Google"
                        className="h-6 w-6 rounded-full bg-white p-0.5"
                      />
                      <div>
                        <p className="text-[16px] font-medium text-white md:text-[16px] iphone:text-[14px]">{item.name}</p>
                        <p className="text-[14px] text-zinc-500 md:text-[14px] iphone:text-[14px]">Dublin</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  className="p-1"
                  aria-label={`Show review ${idx + 1}`}
                  aria-current={activeTestimonial === idx}
                  onClick={() => scrollToTestimonial(idx)}
                >
                  <span
                    className={`block h-1.5 w-1.5 rounded-full transition-colors ${activeTestimonial === idx ? 'bg-white' : 'bg-zinc-500'}`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 iphone:mt-4">
            {testimonials.map((item) => (
              <article key={item.name} className="group rounded-2xl bg-[#101010] p-4 text-left transition-transform duration-500 ease-out hover:-translate-y-1 md:p-5">
                <p className="text-[14px] tracking-[0.16em] text-white md:text-[16px] iphone:text-[13px]">★★★★★</p>
                <p className="mt-3 min-h-[92px] text-[16px] leading-6 text-zinc-300 md:text-[18px] iphone:text-[13px]">{item.quote}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google"
                    className="h-6 w-6 rounded-full bg-white p-0.5"
                  />
                  <div>
                    <p className="text-[16px] font-medium text-white md:text-[16px] iphone:text-[14px]">{item.name}</p>
                    <p className="text-[14px] text-zinc-500 md:text-[14px] iphone:text-[14px]">Dublin</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="relative mx-auto h-[320px] w-full max-w-[1440px] overflow-hidden sm:h-[420px] md:h-[600px] iphone:h-[180px] iphone:mt-4">
        <img
          src={findYourCarImg}
          alt="Find your next car"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center iphone:h-[180px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="hero-content-rise absolute inset-x-0 top-0 hero-shell pt-6 sm:pt-8 md:pt-10 iphone:pt-2">
          <h2 className="max-w-[420px] text-[22px] font-normal text-white md:text-[30px] iphone:text-[22px]">Find Your Next Car Today</h2>
          <Link
            to="/cars"
            className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black iphone:text-[14px] iphone:px-3 iphone:py-2 iphone:w-auto iphone:min-w-0 iphone:ml-0"
            style={{ justifyContent: 'flex-start' }}
          >
            Browse Available Cars
          </Link>
        </div>
      </section>

      <footer className="mt-10 bg-black iphone:mt-4">
        <div className="site-footer-shell text-white iphone:text-[14px]">
              <div className="site-footer-grid">
            <div>
              <p className="site-footer-brand">INDUS MOTOR GROUP</p>
              <p className="site-footer-copy text-[13px] leading-tight md:text-[14px] font-normal iphone:text-[14px] iphone:leading-4">
                Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
              </p>
              <div className="mt-4 flex items-center gap-3 text-white">
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="6" width="19" height="12" rx="3" />
                    <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8a1 1 0 0 1 1-1Z" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4v8.5a3.5 3.5 0 1 1-2.6-3.4" />
                    <path d="M14 4c1.1 1.6 2.5 2.4 4.5 2.4" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <p className="site-footer-label">Company</p>
              <div className="site-footer-links space-y-2 text-[14px]">
                <Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
                <Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
                <Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
                <Link to="/finance" className="block transition-colors hover:text-zinc-300">Finance</Link>
              </div>
            </div>
            <div>
              <p className="site-footer-label">Opening Hours</p>
              <div className="site-footer-links space-y-2 text-[14px]">
                <p>Mon - Fri: 9:00am - 6:00pm</p>
                <p>Sat: 10:00am - 4:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
            <div>
              <p className="site-footer-label">Get in Touch</p>
              <div className="site-footer-links space-y-2 text-[14px]">
                <p>hello@indusmotorgroup.com</p>
                <p>+353 89 967 5410</p>
                <p className="text-white">Serving customers across Ireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 px-5 py-6 text-center md:px-8 md:py-8">
          <p className="site-footer-legal">
            Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570. Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
          </p>
          <p className="mt-2 text-[13px] text-white md:text-[14px]">
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</Link>
            {' '}|{' '}
            <Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
            {' '}|{' '}
            <Link to="/terms-conditions" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</Link>
          </p>
          <p className="mt-2 text-[13px] text-white md:text-[14px]">© 2026 Indus Motors Limited. All rights reserved.</p>
          <p className="mt-2 text-[13px] text-white md:text-[14px]">
            Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

