import { Link } from 'react-router-dom'
import { useMemo, useRef, useState, useEffect } from 'react'
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
            <span className="text-[12px] font-semibold leading-[0.95] tracking-[0.14em] md:text-[16px]">
              <span className="block">INDUS</span>
              <span className="block">MOTOR</span>
              <span className="block">GROUP</span>
            </span>
          </Link>

          <nav className="ml-6 hidden flex-1 items-center justify-center gap-7 text-[14px] text-zinc-300 md:text-[16px] lg:flex">
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
            <button className="ui-btn rounded-full bg-white px-4 py-1.5 text-[14px] font-medium text-black sm:px-5 sm:py-2 md:text-[16px]">Contact Us</button>
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
          <nav className="rounded-xl border border-white/15 bg-black/80 p-3 text-[16px] text-zinc-200 backdrop-blur">
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
            <button className="ui-btn mt-2 w-full rounded-full bg-white px-4 py-2 text-[16px] font-medium text-black">
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
    <div className="min-h-screen bg-black text-zinc-300">
      <section className="relative overflow-hidden">
        <img
          src={navbarBg}
          alt="Luxury vehicle background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-zoom-settle absolute inset-0 h-full w-full object-cover object-[center_29%] brightness-[1.1] contrast-[1.05] saturate-[1.06] [will-change:transform] md:object-[center_34%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/6 to-black/22"></div>
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-b from-transparent via-black/56 to-black"></div>

        <Navbar overlay />

        <div className="relative z-10 grid min-h-[600px] grid-rows-[1fr_auto] sm:min-h-[660px] md:min-h-[680px]">
          <div className="hero-shell flex items-end pb-0">
            <span className="relative z-20 inline-flex w-fit translate-y-1/2 items-center gap-2 rounded-full border border-white/15 bg-black px-4 py-2 text-[12px] text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.92)] md:text-[14px]">
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9 8 4h8l5 5-9 11L3 9Z" />
                <path d="M8 4l4 5 4-5" />
              </svg>
              Drive Away with Confidence
            </span>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/52 to-black/90"></div>
            <div className="hero-content-rise hero-shell relative pb-16 pt-12 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14">
              <h1 className="max-w-[620px] text-[36px] font-medium leading-tight text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] md:text-[70px]">
                Quality Used Cars in Ireland
              </h1>
              <p className="mt-3 max-w-[560px] text-[16px] leading-6 text-zinc-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.58)] md:text-[18px]">
                Transparent pricing. Nationwide delivery.
              </p>
              <button className="ui-btn mt-6 w-fit rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black md:text-[16px]">
                Browse Available Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="layout-shell layout-stack pt-16 sm:pt-20 md:pt-24">
        <section className="mt-[80px] sm:mt-[100px] md:mt-[150px]">
          <div className="mb-10 sm:mb-12 md:mb-16 flex flex-row flex-wrap items-center justify-between gap-3">
            <h2 className="text-[30px] font-medium text-white md:text-[44px]">Featured Cars</h2>
            <Link to="/cars" className="ui-btn inline-flex rounded-full bg-white px-5 py-2 text-[16px] font-medium text-black shadow-[0_16px_30px_-24px_rgba(255,255,255,0.7)] md:text-[16px]">
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
                    <div className="flex h-40 w-full items-center justify-center bg-zinc-800 text-[14px] text-zinc-400 sm:h-32 lg:h-28 md:text-[16px]">
                      No image
                    </div>
                  )}
                  <div className="flex flex-1 flex-col space-y-2 p-4 sm:p-3 lg:space-y-1.5 lg:p-2.5">
                    <h3 className="truncate text-[20px] font-medium text-white md:text-[24px]">{car.make} {car.model}</h3>
                    <p className="truncate text-[14px] text-zinc-400 md:text-[16px]">
                      {car.year} · {car.mileage?.toLocaleString() || 0} km · {car.transmission} · {car.fuelType}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {car.transmission && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[12px] text-zinc-300 md:text-[13px]">
                          {car.transmission}
                        </span>
                      )}
                      {car.fuelType && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[12px] text-zinc-300 md:text-[13px]">
                          {car.fuelType}
                        </span>
                      )}
                      {car.seats && (
                        <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[12px] text-zinc-300 md:text-[13px]">
                          {car.seats} Seats
                        </span>
                      )}
                    </div>
                    <p className="pt-0.5 text-[32px] font-medium leading-none text-white md:text-[40px]">€{car.price?.toLocaleString() || 0}</p>
                    <p className="text-[14px] text-zinc-400 md:text-[16px]">Finance Available</p>
                    <Link to={`/details?id=${car._id}`} className="mt-auto inline-flex items-center text-[14px] text-zinc-300 transition-all duration-300 hover:text-white group-hover:translate-x-1 md:text-[16px]">View Details ›</Link>
                  </div>
                </article>
                )
              })}
            </div>
          )}
        </section>

        {/* Trade-In & Financing Options Section */}
        <section className="mt-[80px] overflow-hidden bg-black sm:mt-[100px] md:mt-[150px]">
          <div className="border-b border-zinc-800 px-4 py-8 md:px-5 md:py-12">
            <h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">
              <span className="block sm:inline">Trade-In &amp;</span>{' '}
              <span className="block sm:inline">Financing Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 bg-black md:grid-cols-2">
            <article className="group px-4 py-4 md:min-h-[160px] md:px-5 md:py-5">
              <div className="mb-3 grid h-6 w-6 place-items-center rounded-sm bg-zinc-900">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-zinc-100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                  <polyline points="21 3 21 9 15 9" />
                </svg>
              </div>
              <h3 className="text-[18px] font-medium text-zinc-100 md:text-[20px]">Trade-In</h3>
              <p className="mt-1.5 max-w-[300px] text-[16px] leading-6 text-zinc-500 md:text-[18px]">
                Trade in your current vehicle as part of your purchase.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[16px] font-medium text-zinc-100 transition-colors hover:text-white md:text-[16px]">
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
              <h3 className="text-[18px] font-medium text-zinc-100 md:text-[20px]">Finance Assistance</h3>
              <p className="mt-1.5 max-w-[320px] text-[16px] leading-6 text-zinc-500 md:text-[18px]">
                Finance options available through trusted third party lenders.
              </p>
              <button className="ui-btn mt-2.5 inline-flex items-center text-[16px] font-medium text-zinc-100 transition-colors hover:text-white md:text-[16px]">
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
          className="mt-[80px] rounded-2xl px-4 py-7 sm:mt-[100px] md:mt-[150px] md:px-10 md:py-11"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-1 text-[14px] text-zinc-500 md:text-[16px]">
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
              </svg>
              Peace of Mind Included
            </span>
            <h2 className="mt-4 text-[30px] font-medium leading-tight text-zinc-100 md:text-[44px]">Warranty & Aftercare Protection</h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-[980px] items-center gap-6 sm:gap-7 md:grid-cols-[1fr_auto] md:gap-16">
            <div className="max-w-[360px] text-[16px] leading-7 text-zinc-400 md:text-[18px]">
              <p>
                Warranty cover available on all vehicles
                <br />
                through trusted providers.
              </p>
              <ul className="mt-5 space-y-1.5 text-[16px] text-zinc-300 md:text-[18px]">
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

        <section className="mt-[80px] sm:mt-[100px] md:mt-[150px]">
          <h2 className="mb-16 text-center text-[30px] font-medium leading-tight text-white md:mb-20 md:text-[44px]">Why Choose Indus Motor Group</h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:gap-y-8 md:grid-cols-2">
            {whyChooseCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[14px] bg-black transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-[280px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/52 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="text-[18px] font-medium leading-tight text-white md:text-[22px]">{card.title}</h3>
                  <p className="mt-1 max-w-[300px] text-[16px] leading-6 text-zinc-200 md:text-[18px]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-[80px] text-center sm:mt-[100px] md:mt-[150px]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1 text-[14px] text-zinc-300 md:text-[16px]">
            <svg viewBox="0 0 16 16" className="h-2 w-2 text-zinc-400" fill="currentColor" aria-hidden="true">
              <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
            </svg>
            Trusted by Drivers Across Ireland
          </span>
          <h2 className="mt-4 text-[30px] font-medium leading-tight text-white md:text-[44px]">What Our Customers Say</h2>
          <p className="mt-2 text-[16px] text-zinc-500 md:text-[18px]">Real feedback from customers who purchased their vehicles from us.</p>

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
                    <p className="text-[14px] tracking-[0.16em] text-white md:text-[16px]">★★★★★</p>
                    <p className="mt-3 min-h-[92px] text-[16px] leading-7 text-zinc-300 md:text-[18px]">{item.quote}</p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                        alt="Google"
                        className="h-6 w-6 rounded-full bg-white p-0.5"
                      />
                      <div>
                        <p className="text-[16px] font-medium text-white md:text-[16px]">{item.name}</p>
                        <p className="text-[14px] text-zinc-500 md:text-[14px]">Dublin</p>
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
                <p className="text-[14px] tracking-[0.16em] text-white md:text-[16px]">★★★★★</p>
                <p className="mt-3 min-h-[92px] text-[16px] leading-6 text-zinc-300 md:text-[18px]">{item.quote}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google"
                    className="h-6 w-6 rounded-full bg-white p-0.5"
                  />
                  <div>
                    <p className="text-[16px] font-medium text-white md:text-[16px]">{item.name}</p>
                    <p className="text-[14px] text-zinc-500 md:text-[14px]">Dublin</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="relative mt-[80px] overflow-hidden sm:mt-[100px] md:mt-[150px]">
        <img
          src={findYourCarImg}
          alt="Find your next car"
          loading="lazy"
          decoding="async"
          className="h-[360px] w-full object-cover md:h-[430px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10">
          <h2 className="text-[30px] font-medium text-white md:text-[44px]">Find Your Next Car Today</h2>
          <Link to="/cars" className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black md:text-[16px]">Browse Available Cars</Link>
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
            <p className="mt-2 text-[13px] text-zinc-500 md:text-[14px]">
              <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</a>
              {' '}|{' '}
              <Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
              {' '}|{' '}
              <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</a>
            </p>
            <p className="mt-2 text-[13px] text-zinc-600 md:text-[14px]">© 2026 Indus Motors Limited. All rights reserved.</p>
            <p className="mt-2 text-[13px] text-zinc-600 md:text-[14px]">
              Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
