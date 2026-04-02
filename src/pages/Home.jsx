import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import navbarBg from '../images/homepage-images/navbar-backgorund.jpg'
import luxuryCarImage from '../images/homepage-images/image 9.png'
import carefullySelectedImg from '../images/homepage-images/lhKhWi6mDCQjU2k2CXrFgqm9AA.jpg'
import nationwideDeliveryImg from '../images/homepage-images/NaXiqyCuHV5HfwzSgAX8DPnjY6o.jpg'
import warrantyImg from '../images/homepage-images/7wP4pWwqqXr5Bc6QUsmemBnVi98.jpg'
import warrantyBadgeImg from '../images/homepage-images/Frame 1321319011.png'
import financeImg from '../images/homepage-images/my26-jx-1084_16-9.webp'
import findYourCarImg from '../images/homepage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'

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
    image: financeImg,
  },
]

export function Navbar({ overlay = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={overlay ? 'absolute inset-x-0 top-0 z-20' : ''}>
      <div className="layout-shell py-4 md:py-5">
        <div className="flex w-full items-center gap-3">
          <Link to="/" className="inline-flex shrink-0 items-center gap-2 text-white" aria-label="Indus Motor Group home">
            <span className="flex flex-col gap-0.5" aria-hidden="true">
              <span className="h-[2px] w-3 -rotate-[22deg] rounded-full bg-white"></span>
              <span className="h-[2px] w-2.5 -rotate-[22deg] rounded-full bg-white"></span>
              <span className="h-[2px] w-2 -rotate-[22deg] rounded-full bg-white"></span>
            </span>
            <span className="text-[9px] font-semibold leading-[0.95] tracking-[0.14em] sm:text-[10px]">
              <span className="block">INDUS</span>
              <span className="block">MOTOR</span>
              <span className="block">GROUP</span>
            </span>
          </Link>

          <nav className="ml-6 hidden flex-1 items-center justify-center gap-7 text-xs text-zinc-300 lg:flex">
            <Link to="/" className="ui-nav-link transition-colors hover:text-white">
              Home
            </Link>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="ui-nav-link transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
            <button className="ui-btn rounded-full bg-white px-4 py-1.5 text-[11px] font-medium text-black sm:px-5 sm:py-2 sm:text-xs">Contact Us</button>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-nav"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-0.5 w-full rounded-full bg-white transition-transform duration-200 ${isMobileMenuOpen ? 'translate-y-1 rotate-45' : ''}`}></span>
              <span className={`h-0.5 w-full rounded-full bg-white transition-transform duration-200 ${isMobileMenuOpen ? '-translate-y-1 -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          <nav className="rounded-xl border border-white/15 bg-black/80 p-3 text-sm text-zinc-200 backdrop-blur">
            <Link to="/" className="ui-menu-link block rounded-lg px-3 py-2 transition-colors hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="ui-menu-link block rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="ui-btn mt-2 w-full rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { cars: featuredCars, loading: carsLoading } = useCars({ featured: true })
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
    <div className="min-h-screen bg-black text-zinc-300">
      <section className="relative overflow-hidden">
        <img
          src={navbarBg}
          alt="Luxury vehicle background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-zoom-settle h-[560px] w-full object-cover [will-change:transform] sm:h-[620px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black"></div>

        <Navbar overlay />

        <div className="hero-content-rise absolute inset-x-0 bottom-0 z-10 hero-shell flex w-full flex-col pb-10 sm:pb-12 md:pb-16">
          <span className="mb-5 w-fit rounded-full bg-black/35 px-4 py-2 text-xs text-zinc-100">
            Drive Away with Confidence
          </span>
          <h1 className="max-w-[560px] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-6xl">
            Quality Used Cars in Ireland
          </h1>
          <p className="mt-4 max-w-[540px] text-xs leading-6 text-zinc-300 sm:text-sm">
            Carefully selected vehicles, transparent pricing, and trusted warranty options for added peace of mind.
          </p>
          <button className="ui-btn mt-7 w-fit rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">
            Browse Available Cars
          </button>
        </div>
      </section>

      <main className="layout-shell layout-stack">
        <section>
          <div className="mb-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-[44px]">Featured Cars</h2>
            <Link to="/cars" className="ui-btn inline-flex rounded-full px-5 py-2 text-sm text-zinc-100">View All Cars</Link>
          </div>

          {carsLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-zinc-700"></div>
                <p className="text-sm text-zinc-400">Loading featured cars...</p>
              </div>
            </div>
          ) : recentCars.length === 0 ? (
            <p className="text-sm text-zinc-400">No featured cars available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <article key={car._id} className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-black transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-600">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={`${car.make} ${car.model}`} 
                      loading="lazy"
                      decoding="async"
                      className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-40 lg:h-28" 
                    />
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center bg-zinc-800 text-sm text-zinc-400 sm:h-32 lg:h-28 lg:text-xs">
                      No image
                    </div>
                  )}
                  <div className="flex flex-1 flex-col space-y-2 p-4 sm:p-3 lg:space-y-1.5 lg:p-2.5">
                    <h3 className="truncate text-xl font-medium text-white sm:text-lg lg:text-base">{car.make} {car.model}</h3>
                    <p className="truncate text-sm text-zinc-400 sm:text-xs lg:text-[11px]">
                      {car.year} · {car.mileage?.toLocaleString() || 0} km · {car.transmission} · {car.fuelType}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {car.transmission && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 lg:text-[9px]">
                          {car.transmission}
                        </span>
                      )}
                      {car.fuelType && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 lg:text-[9px]">
                          {car.fuelType}
                        </span>
                      )}
                      {car.seats && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 lg:text-[9px]">
                          {car.seats} Seats
                        </span>
                      )}
                    </div>
                    <p className="pt-0.5 text-3xl font-medium leading-none text-white lg:text-2xl">€{car.price?.toLocaleString() || 0}</p>
                    <p className="text-sm text-zinc-400 lg:text-xs">Finance Available</p>
                    <Link to={`/details?id=${car._id}`} className="mt-auto inline-flex items-center text-sm text-zinc-300 transition-all duration-300 hover:text-white group-hover:translate-x-1 lg:text-xs">View Details ›</Link>
                  </div>
                </article>
                )
              })}
            </div>
          )}
        </section>

        {/* Trade-In & Financing Options Section */}
        <section className="overflow-hidden bg-black">
          <div className="border-b border-zinc-800 px-4 py-8 md:px-5 md:py-12">
            <h2 className="text-3xl font-semibold leading-none text-white md:text-[46px]">Trade-In&FinancingOptions</h2>
          </div>

          <div className="grid grid-cols-1 bg-black md:grid-cols-2">
            <article className="group px-4 py-4 md:min-h-[160px] md:px-5 md:py-5">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-zinc-100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                  <polyline points="21 3 21 9 15 9" />
                </svg>
              </div>
              <h3 className="text-[12px] font-medium text-zinc-100">Trade-In</h3>
              <p className="mt-1.5 max-w-[300px] text-[12px] leading-5 text-zinc-500">
                Trade in your current vehicle as part of your purchase.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[12px] font-medium text-zinc-100 transition-colors hover:text-white">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Enquire Now</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </article>

            <article className="group px-4 py-4 md:min-h-[160px] md:px-5 md:py-5">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3 className="text-[12px] font-medium text-zinc-100">Finance Assistance</h3>
              <p className="mt-1.5 max-w-[320px] text-[12px] leading-5 text-zinc-500">
                Finance options available through trusted third party lenders.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[12px] font-medium text-zinc-100 transition-colors hover:text-white">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </article>
          </div>

          <img
            src={luxuryCarImage}
            alt="Luxury car interior"
            loading="lazy"
            decoding="async"
            className="h-[290px] w-full object-cover md:h-[500px]"
          />
        </section>

        <section
          className="rounded-2xl px-4 py-7 md:px-10 md:py-11"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500">
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
              </svg>
              Peace of Mind Included
            </span>
            <h2 className="mt-4 text-[34px] font-semibold leading-tight text-zinc-100 md:text-[50px]">Warranty & Aftercare Protection</h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-[980px] items-center gap-6 sm:gap-7 md:grid-cols-[1fr_auto] md:gap-16">
            <div className="max-w-[360px] text-xs leading-7 text-zinc-400 sm:text-sm">
              <p>
                Warranty cover available on all vehicles
                <br />
                through trusted providers.
              </p>
              <ul className="mt-5 space-y-1.5 text-[13px] text-zinc-300">
                <li>✓ Up to 2 Years Coverage</li>
                <li>✓ Wide range of protection plans</li>
                <li>✓ Added peace of mind</li>
              </ul>
            </div>

            <div className="mx-auto">
              <img
                src={warrantyBadgeImg}
                alt="2 year warranty badge"
                loading="lazy"
                decoding="async"
                className="h-[180px] w-[156px] object-contain md:h-[210px] md:w-[182px]"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-16 text-center text-3xl font-semibold leading-tight text-white md:mb-20 md:text-5xl">Why Choose Indus Motor Group</h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:gap-y-8 md:grid-cols-2">
            {whyChooseCards.map((card) => (
              <article key={card.title} className="group transition-transform duration-500 ease-out hover:-translate-y-1">
                <div className="overflow-hidden rounded-[14px]">
                  <img src={card.image} alt={card.title} loading="lazy" decoding="async" className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-[280px]" />
                </div>
                <h3 className="mt-2.5 text-sm font-medium leading-tight text-zinc-100 transition-transform duration-300 group-hover:translate-x-1">{card.title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-zinc-500 sm:text-[12px]">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1 text-[10px] text-zinc-300">
            <svg viewBox="0 0 16 16" className="h-2 w-2 text-zinc-400" fill="currentColor" aria-hidden="true">
              <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
            </svg>
            Trusted by Drivers Across Ireland
          </span>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">What Our Customers Say</h2>
          <p className="mt-2 text-[11px] text-zinc-500 sm:text-xs md:text-sm">Real feedback from customers who purchased their vehicles from us.</p>

          <div className="mt-12 md:hidden">
            <div
              ref={testimonialsCarouselRef}
              onScroll={handleTestimonialScroll}
              className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Customer reviews carousel"
            >
              {testimonials.map((item) => (
                <div key={item.name} className="w-full shrink-0 snap-center px-1">
                  <article className="rounded-2xl bg-[#101010] p-4 text-left transition-transform duration-500 ease-out">
                    <p className="text-xs tracking-[0.16em] text-white">★★★★★</p>
                    <p className="mt-3 min-h-[92px] text-[13px] leading-7 text-zinc-300">{item.quote}</p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                        alt="Google"
                        className="h-6 w-6 rounded-full bg-white p-0.5"
                      />
                      <div>
                        <p className="text-xs font-medium text-white">{item.name}</p>
                        <p className="text-[11px] text-zinc-500">Dublin</p>
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

          <div className="mt-16 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="group rounded-2xl bg-[#101010] p-4 text-left transition-transform duration-500 ease-out hover:-translate-y-1 md:p-5">
                <p className="text-xs tracking-[0.16em] text-white">★★★★★</p>
                <p className="mt-3 min-h-[92px] text-[13px] leading-6 text-zinc-300">{item.quote}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google"
                    className="h-6 w-6 rounded-full bg-white p-0.5"
                  />
                  <div>
                    <p className="text-xs font-medium text-white">{item.name}</p>
                    <p className="text-[11px] text-zinc-500">Dublin</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="relative mt-12 overflow-hidden md:mt-16">
        <img
          src={findYourCarImg}
          alt="Find your next car"
          loading="lazy"
          decoding="async"
          className="h-[360px] w-full object-cover md:h-[430px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Find Your Next Car Today</h2>
          <button className="ui-btn mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Browse Available Cars</button>
        </div>
      </section>

      <footer className="mt-10 bg-black">
        <div className="site-footer-shell text-zinc-300">
          <div className="site-footer-grid">
            <div>
              <p className="site-footer-brand">INDUS MOTOR GROUP</p>
              <p className="site-footer-copy">
                Quality used cars with transparent pricing, trusted warranty
                <br />
                options, and a straightforward buying experience.
              </p>

              <div className="mt-4 flex items-center gap-3 text-zinc-400">
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M8 11v5" />
                    <path d="M8 8h.01" />
                    <path d="M12 16v-3c0-1.3.7-2 1.8-2s1.7.7 1.7 2v3" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="6" width="19" height="12" rx="3" />
                    <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok" className="transition-colors hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4v8.5a3.5 3.5 0 1 1-2.6-3.4" />
                    <path d="M14 4c1.1 1.6 2.5 2.4 4.5 2.4" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="site-footer-label">Company</p>
              <div className="site-footer-links">
                <Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
                <Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
                <Link to="/warranty" className="block transition-colors hover:text-zinc-300">Warranty</Link>
                <Link to="/finance" className="block transition-colors hover:text-zinc-300">Finance</Link>
              </div>
            </div>

            <div>
              <p className="site-footer-label">Opening Hours</p>
              <div className="site-footer-links">
                <p>Mon - Fri: 9:00am - 6:00pm</p>
                <p>Sat: 10:00am - 4:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <div>
              <p className="site-footer-label">Get in Touch</p>
              <div className="site-footer-links">
                <p>hello@indusmotorgroup.com</p>
                <p>+353 89 967 5410</p>
                <p className="text-zinc-500">Serving customers across Ireland</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-5 text-center">
            <p className="site-footer-legal">
              Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570.
              Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
            </p>
            <p className="mt-2 text-[11px] text-zinc-500">
              <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</a>
              {' '}|{' '}
              <Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
              {' '}|{' '}
              <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</a>
            </p>
            <p className="mt-2 text-[11px] text-zinc-600">© 2026 Indus Motors Limited. All rights reserved.</p>
            <p className="mt-2 text-[11px] text-zinc-600">
              Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
