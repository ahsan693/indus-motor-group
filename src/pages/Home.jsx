import { Link } from 'react-router-dom'
import { useMemo, useRef, useState, useEffect } from 'react'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import navbarBg from '../images/homepage-images/navbar-backgorund.jpg'
import LogoImg from '../images/Logo.png'
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

  useEffect(() => {
    if (!mobileNavRef) return

    let prevOverflow = ''
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

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

  return (
    <section className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 safe-top ${scrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'}`}>
      <div className="layout-shell py-3 sm:py-4 md:py-5">
        <div className="flex w-full items-center gap-3">
          <Link to="/" className="-ml-1 inline-flex shrink-0 items-center gap-2 text-white sm:-ml-2 md:-ml-[17px]" aria-label="Indus Motor Group home">
            <img 
              src={LogoImg} 
              alt="Indus Motor Group Logo" 
              className="h-7 w-auto sm:h-10 md:h-12"
            />
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
            <Link to="/contact-us" className="ui-btn rounded-full bg-white px-4 py-1.5 text-[14px] font-medium text-black sm:px-5 sm:py-2 md:text-[16px]" onClick={() => window.scrollTo(0,0)}>
              Contact Us
            </Link>
          </div>

          {!isMobileMenuOpen && (
            <button
              type="button"
              className="fixed top-4 right-4 z-[100] inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/80 text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none lg:hidden safe-top-button"
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
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={`absolute right-0 top-0 h-auto mt-6 w-[92vw] max-w-[320px] rounded-xl shadow-2xl transform bg-black p-4 transition-transform safe-menu-right ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            ref={mobileNavRef}
            aria-hidden={!isMobileMenuOpen}
          >
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
              <Link to="/contact-us" className="ui-btn mt-3 w-full rounded-full bg-white px-4 py-2 text-[16px] font-medium text-black" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
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
    <div className="min-h-screen bg-black text-zinc-300 overflow-x-hidden">
      {/* HERO SECTION - FIXED FOR iPHONE SAFE AREAS */}
      <section className="relative w-full pt-16 sm:pt-20 md:pt-0 md:min-h-screen md:flex md:flex-col md:justify-center safe-hero-mobile">
        <img
          src={navbarBg}
          alt="Luxury vehicle background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.1] contrast-[1.05] saturate-[1.06] md:object-[56%_34%] animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85"></div>

        <Navbar />

        {/* Hero content - properly spaced for mobile */}
        <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-64px)] md:min-h-screen">
          <div className="px-4 sm:px-5 md:px-0 pb-8 sm:pb-12 md:pb-20 pt-12 sm:pt-16 md:pt-0">
            <div className="max-w-7xl mx-auto md:px-8">
              <span className="mb-4 sm:mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-[13px] text-white backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9 8 4h8l5 5-9 11L3 9Z" />
                  <path d="M8 4l4 5 4-5" />
                </svg>
                Drive Away with Confidence
              </span>

              <h1 className="mt-4 sm:mt-6 text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] font-normal leading-[1.1] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)]">
                <span className="block">Quality Used</span>
                <span className="block">Cars in Ireland</span>
              </h1>

              <p className="mt-4 sm:mt-5 max-w-[600px] text-[14px] sm:text-[15px] md:text-[18px] leading-relaxed text-zinc-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.58)]">
                Transparent pricing. Nationwide delivery.
              </p>

              <Link to="/cars" className="ui-btn mt-6 sm:mt-7 inline-flex w-fit rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Browse Available Cars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="layout-shell layout-stack">
        {/* Featured Cars Section */}
        <section className="pt-6 sm:pt-8 md:pt-14 pb-8 sm:pb-10 md:pb-16">
          <div className="mb-6 sm:mb-8 md:mb-16 flex flex-row flex-wrap items-center justify-between gap-3 md:gap-4">
            <h2 className="text-[20px] sm:text-[24px] md:text-[30px] font-normal text-white">Featured Cars</h2>
            <Link to="/cars" className="ui-btn inline-flex rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 text-[13px] sm:text-[14px] font-medium text-black shadow-[0_16px_30px_-24px_rgba(255,255,255,0.7)] md:text-[16px] md:px-5 md:py-2">
              View All Cars
            </Link>
          </div>

          {carsLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-zinc-700"></div>
                <p className="text-[14px] sm:text-[16px] text-zinc-400">Loading featured cars...</p>
              </div>
            </div>
          ) : recentCars.length === 0 ? (
            <p className="text-[14px] sm:text-[16px] text-zinc-400">No featured cars available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentCars.map((car) => {
                let imageUrl = null
                if (car.images?.[0]) {
                  const img = car.images[0]
                  if (img._type === 'image' || img.asset) {
                    imageUrl = urlFor(img).width(600).url()
                  } 
                  else if (typeof img === 'string') {
                    imageUrl = img
                  }
                  else if (img.url) {
                    imageUrl = img.url
                  }
                }

                return (
                  <Link key={car._id} to={`/details?id=${car._id}`} className="group block">
                    <article className="motion-card h-full cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border border-zinc-800 bg-black transition-colors hover:border-zinc-700">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${car.make} ${car.model}`}
                          loading="lazy"
                          decoding="async"
                          className="motion-media h-[160px] w-full object-cover sm:h-[180px] md:h-[210px]"
                        />
                      ) : (
                        <div className="flex h-[160px] w-full items-center justify-center bg-zinc-800 text-[13px] sm:text-[14px] text-zinc-400">
                          No image
                        </div>
                      )}
                      <div className="space-y-2 sm:space-y-3 p-2.5 sm:p-3">
                        <div className="flex items-start justify-between gap-1 sm:gap-3">
                          <h3 className="truncate text-[12px] sm:text-[13px] md:text-[16px] font-normal text-white">{car.make} {car.model}</h3>
                          <span className="motion-link-slide pt-0.5 text-[12px] sm:text-[13px] md:text-[14px] font-normal text-[#BABABA] flex-shrink-0">View {'>'}</span>
                        </div>
                        <p className="text-[12px] sm:text-[13px] md:text-[16px] font-normal text-[#BABABA]">
                          {car.year} • {car.mileage?.toLocaleString() || 0} km • {car.transmission}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {car.transmission && (
                            <span className="rounded-full bg-black border border-zinc-700 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-normal text-white">
                              {car.transmission}
                            </span>
                          )}
                          {car.fuelType && (
                            <span className="rounded-full bg-black border border-zinc-700 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-normal text-white">
                              {car.fuelType}
                            </span>
                          )}
                        </div>
                        <p className="text-[14px] sm:text-[15px] md:text-[20px] font-normal leading-none text-white pt-1 sm:pt-2">€{car.price?.toLocaleString() || 0}</p>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Trade-In & Financing Section */}
        <section className="pt-6 sm:pt-10 md:pt-16 pb-0 bg-black">
          <div className="border-b border-zinc-800 px-0 py-4 sm:py-6 md:py-12 mb-0">
            <h2 className="text-[20px] sm:text-[24px] md:text-[30px] font-normal leading-tight text-white">
              <span className="block sm:inline">Trade-In &</span>{' '}
              <span className="block sm:inline">Financing Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-0 bg-black md:grid-cols-2">
            <article className="group px-3 sm:px-5 py-4 sm:py-6 md:min-h-[160px] md:px-6 md:py-8 border-b md:border-b md:border-r md:border-zinc-800">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <img src={tradeInIcon} alt="Trade-in icon" className="h-3 w-3" />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[18px] font-normal text-zinc-100">Trade-In</h3>
              <p className="mt-2 max-w-[300px] text-[13px] sm:text-[14px] md:text-[16px] leading-6 text-zinc-500">
                Trade in your current vehicle as part of your purchase.
              </p>
              <button className="ui-btn mt-3 sm:mt-4 inline-flex items-center text-[13px] sm:text-[14px] font-medium text-zinc-100 transition-colors hover:text-white">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Enquire Now</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </article>

            <article className="group px-3 sm:px-5 py-4 sm:py-6 md:min-h-[160px] md:px-6 md:py-8 border-b md:border-b-0">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <img src={financeIcon} alt="Finance icon" className="h-3 w-3" />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[18px] font-normal text-zinc-100">Finance Assistance</h3>
              <p className="mt-2 max-w-[320px] text-[13px] sm:text-[14px] md:text-[16px] leading-6 text-zinc-500">
                Finance options available through trusted third party lenders.
              </p>
              <button className="ui-btn mt-3 sm:mt-4 inline-flex items-center text-[13px] sm:text-[14px] font-medium text-zinc-100 transition-colors hover:text-white">
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
            className="h-[140px] w-full object-cover sm:h-[250px] md:h-[500px]"
          />
        </section>

        {/* Warranty Section */}
        <section
          className="mx-2 sm:mx-4 mt-6 sm:mt-8 md:mt-0 mb-6 sm:mb-8 md:mb-0 pt-6 sm:pt-10 md:pt-16 pb-6 sm:pb-10 md:pb-14 rounded-xl sm:rounded-2xl px-3 sm:px-6 md:px-10 md:py-12"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">

              {/* TEXT CONTENT */}
              <div className="md:order-1 md:flex-1 md:flex md:justify-center mb-4 sm:mb-6 md:mb-0">
                <div className="md:max-w-[480px] w-full">

                  {/* Eyebrow */}
                  <span className="inline-flex items-center justify-center md:justify-start gap-1 text-[12px] sm:text-[13px] md:text-[16px] text-zinc-500 w-full">
                    <svg viewBox="0 0 16 16" className="h-2 w-2 sm:h-2.5 sm:w-2.5" fill="currentColor" aria-hidden="true">
                      <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
                    </svg>
                    Peace of Mind Included
                  </span>

                  {/* Heading */}
                  <h2 className="mt-3 sm:mt-4 text-[24px] sm:text-[28px] md:text-[30px] font-normal leading-tight text-zinc-100 text-center md:text-left">
                    Warranty &<br className="md:hidden" /> Aftercare<br className="md:hidden" /> Protection
                  </h2>

                  {/* Badge — mobile only */}
                  <div className="flex justify-center my-6 sm:my-8 md:hidden">
                    <img
                      src={warrantyBadgeImg}
                      alt="2 year warranty badge"
                      loading="lazy"
                      decoding="async"
                      className="h-[130px] w-[110px] sm:h-[150px] sm:w-[130px] object-contain"
                    />
                  </div>

                  {/* Body text + checklist */}
                  <div className="text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-zinc-300 md:mt-8 md:text-[16px] text-center md:text-left">
                    <p className="mb-3 sm:mb-4 md:mb-6">
                      Warranty cover available on all vehicles<br />
                      through trusted providers.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4 inline-block text-left">
                      <li className="flex items-center gap-2 sm:gap-3">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-[13px] sm:text-[14px] md:text-[16px]">Up to 2 Years Coverage</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-[13px] sm:text-[14px] md:text-[16px]">Wide range of protection plans</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-[13px] sm:text-[14px] md:text-[16px]">Added peace of mind</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* BADGE — desktop only, right side */}
              <div className="hidden md:flex flex-shrink-0 md:order-2">
                <img
                  src={warrantyBadgeImg}
                  alt="2 year warranty badge"
                  loading="lazy"
                  decoding="async"
                  className="h-[210px] w-[182px] object-contain"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="pt-6 sm:pt-10 md:pt-16 pb-6 sm:pb-10 md:pb-14">
          <h2 className="mb-6 sm:mb-8 md:mb-16 text-center text-[20px] sm:text-[24px] md:text-[30px] font-normal leading-tight text-white">Why Choose Indus Motor Group</h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {whyChooseCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-lg sm:rounded-[14px] bg-black transition-transform duration-500 ease-out hover:-translate-y-1 aspect-[16/9]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] md:h-[45%] bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
                  <div className="relative z-20 px-3 pb-3 sm:px-4 sm:pb-4 md:px-5 md:pb-5">
                    <h3 className="text-[13px] sm:text-[14px] md:text-[18px] font-normal leading-tight text-white">{card.title}</h3>
                    <p className="mt-1 text-[12px] sm:text-[13px] md:text-[16px] leading-5 md:leading-6 text-zinc-200 md:max-w-[300px]">{card.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-6 sm:pt-10 md:pt-16 pb-6 sm:pb-10 md:pb-14 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1 sm:py-1.5 text-[12px] sm:text-[13px] md:text-[16px] text-zinc-300">
            <svg viewBox="0 0 16 16" className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-zinc-400" fill="currentColor" aria-hidden="true">
              <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
            </svg>
            Trusted by Drivers Across Ireland
          </span>
          <h2 className="mt-3 sm:mt-4 text-[20px] sm:text-[24px] md:text-[30px] font-normal leading-tight text-white">What Our Customers Say</h2>
          <p className="mt-2 text-[12px] sm:text-[13px] md:text-[16px] text-zinc-500">Real feedback from customers who purchased their vehicles.</p>

          <div className="mt-6 sm:mt-8 md:hidden">
            <div
              ref={testimonialsCarouselRef}
              onScroll={handleTestimonialScroll}
              className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Customer reviews carousel"
            >
              {testimonials.map((item) => (
                <div key={item.name} className="w-full shrink-0 snap-center px-2">
                  <article className="rounded-lg sm:rounded-2xl bg-[#101010] p-3 sm:p-4 text-left transition-transform duration-500 ease-out">
                    <p className="text-[12px] sm:text-[13px] tracking-[0.16em] text-white">★★★★★</p>
                    <p className="mt-2 sm:mt-3 min-h-[80px] sm:min-h-[92px] text-[12px] sm:text-[13px] leading-6 text-zinc-300">{item.quote}</p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-2">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                        alt="Google"
                        className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white p-0.5"
                      />
                      <div>
                        <p className="text-[13px] sm:text-[14px] font-medium text-white">{item.name}</p>
                        <p className="text-[12px] sm:text-[14px] text-zinc-500">Dublin</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5">
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

          <div className="mt-8 sm:mt-10 md:mt-14 hidden gap-3 sm:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="group rounded-xl sm:rounded-2xl bg-[#101010] p-4 sm:p-5 md:p-6 text-left transition-transform duration-500 ease-out hover:-translate-y-1">
                <p className="text-[13px] sm:text-[14px] md:text-[16px] tracking-[0.16em] text-white">★★★★★</p>
                <p className="mt-3 min-h-[92px] text-[14px] sm:text-[15px] md:text-[16px] leading-6 text-zinc-300">{item.quote}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google"
                    className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white p-0.5"
                  />
                  <div>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white">{item.name}</p>
                    <p className="text-[13px] sm:text-[14px] text-zinc-500">Dublin</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* CTA Section with Image */}
      <section className="relative mx-auto mt-6 sm:mt-8 md:mt-16 h-[150px] sm:h-[200px] w-full max-w-[1440px] overflow-hidden rounded-lg sm:rounded-2xl mx-2 sm:mx-4 md:mx-0">
        <img
          src={findYourCarImg}
          alt="Find your next car"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 bottom-0 hero-shell pt-0 pb-3 sm:pb-4 md:pb-8 px-3 sm:px-5">
          <h2 className="max-w-[420px] text-[18px] sm:text-[20px] md:text-[30px] font-normal text-white">Find Your Next Car Today</h2>
          <Link
            to="/cars"
            className="ui-btn mt-3 sm:mt-4 inline-flex rounded-full bg-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-[13px] sm:text-[14px] md:text-[16px] font-medium text-black"
            style={{ justifyContent: 'flex-start' }}
          >
            Browse Available Cars
          </Link>
        </div>
      </section>

      <footer className="mt-8 sm:mt-10 md:mt-16 bg-black">
        <div className="site-footer-shell text-white text-[13px] sm:text-[14px]">
          <div className="site-footer-grid">
            <div>
              <p className="site-footer-brand text-[13px] sm:text-[14px]">INDUS MOTOR GROUP</p>
              <p className="site-footer-copy text-[12px] sm:text-[13px] leading-6 font-normal">
                Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-3 text-white">
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="6" width="19" height="12" rx="3" />
                    <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8a1 1 0 0 1 1-1Z" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4v8.5a3.5 3.5 0 1 1-2.6-3.4" />
                    <path d="M14 4c1.1 1.6 2.5 2.4 4.5 2.4" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <p className="site-footer-label text-[13px] sm:text-[14px]">Company</p>
              <div className="site-footer-links space-y-2 text-[12px] sm:text-[14px]">
                <Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
                <Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
                <Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
                <Link to="/finance" className="block transition-colors hover:text-zinc-300">Finance</Link>
              </div>
            </div>
            <div>
              <p className="site-footer-label text-[13px] sm:text-[14px]">Opening Hours</p>
              <div className="site-footer-links space-y-2 text-[12px] sm:text-[14px]">
                <p>Mon - Fri: 9:00am - 6:00pm</p>
                <p>Sat: 10:00am - 4:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
            <div>
              <p className="site-footer-label text-[13px] sm:text-[14px]">Get in Touch</p>
              <div className="site-footer-links space-y-2 text-[12px] sm:text-[14px]">
                <p>hello@indusmotorgroup.com</p>
                <p>+353 89 967 5410</p>
                <p className="text-white">Serving customers across Ireland</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 px-3 sm:px-5 py-4 sm:py-6 md:py-10 text-center">
          <p className="site-footer-legal text-[11px] sm:text-[12px] md:text-[14px] leading-6">
            Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570. Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
          </p>
          <p className="mt-2 text-[11px] sm:text-[12px] md:text-[14px] text-white">
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</Link>
            {' '}|{' '}
            <Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
            {' '}|{' '}
            <Link to="/terms-conditions" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</Link>
          </p>
          <p className="mt-2 text-[11px] sm:text-[12px] md:text-[14px] text-white">© 2026 Indus Motors Limited. All rights reserved.</p>
          <p className="mt-2 text-[11px] sm:text-[12px] md:text-[14px] text-white">
            Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
          </p>
        </div>
      </footer>

      {/* CSS for safe areas and iPhone-specific fixes */}
      <style>{`
        @supports (padding: max(0px)) {
          .safe-top {
            padding-top: max(0.75rem, env(safe-area-inset-top));
          }
          
          .safe-hero-mobile {
            @media (max-width: 768px) {
              padding-top: max(4rem, calc(3rem + env(safe-area-inset-top)));
            }
          }

          .safe-menu-right {
            right: max(0, env(safe-area-inset-right));
          }

          .safe-top-button {
            top: max(1rem, calc(0.5rem + env(safe-area-inset-top)));
            right: max(1rem, calc(0.5rem + env(safe-area-inset-right)));
          }
        }

        /* iPhone-specific viewport fix */
        @media (max-width: 430px) {
          html, body {
            width: 100vw;
            overflow-x: hidden;
          }

          body {
            width: 100%;
          }

          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }

        /* Prevent text scaling on iPhone */
        input, textarea, select {
          font-size: 16px;
        }

        /* Better mobile touch targets */
        button, a {
          min-height: 44px;
          min-width: 44px;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Remove tap highlight */
        -webkit-tap-highlight-color: transparent;
      `}</style>
    </div>
  )
}