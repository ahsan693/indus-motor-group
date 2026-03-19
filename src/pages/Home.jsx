import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Our Cars', to: '/cars' },
  { label: 'Warranty', to: '/cookie-policy' },
  { label: 'Finance', to: '#' },
  { label: 'About', to: '#' },
]

const featuredCars = [
  {
    name: 'Toyota Crown Hybrid',
    details: '2020 · 68,000 km · Automatic · Hybrid',
    tags: ['Automatic', 'Hybrid', '7 Seater', 'Low Mileage'],
    price: '€24,950',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Toyota Crown Hybrid',
    details: '2020 · 89,000 km · Automatic · Hybrid',
    tags: ['Automatic', 'Hybrid', '7 Seater', 'Low Mileage'],
    price: '€24,950',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Toyota Crown Hybrid',
    details: '2020 · 58,000 km · Automatic · Hybrid',
    tags: ['Automatic', 'Hybrid', '7 Seater', 'Low Mileage'],
    price: '€24,950',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    name: 'Toyota Crown Hybrid',
    details: '2020 · 98,000 km · Automatic · Hybrid',
    tags: ['Automatic', 'Hybrid', '7 Seater', 'Low Mileage'],
    price: '€24,950',
    image: 'https://images.pexels.com/photos/13220993/pexels-photo-13220993.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
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
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Nationwide Delivery',
    body: 'We can arrange delivery of your vehicle anywhere across Ireland.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Warranty & Aftercare Options',
    body: 'Warranty options available at the point of sale, with coverage for up to two years.',
    image: 'https://images.pexels.com/photos/4489731/pexels-photo-4489731.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Finance Available',
    body: 'Finance options available through trusted third-party lenders.',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
]

export function Navbar({ overlay = false }) {
  return (
    <header className={overlay ? 'absolute inset-x-0 top-0 z-20 border-b border-white/10' : 'border-b border-zinc-800'}>
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 md:px-8">
        <Link to="/" className="text-sm font-semibold leading-tight text-white">
          INDUS MOTOR GROUP
        </Link>

        <nav className="hidden items-center gap-7 text-xs text-zinc-300 md:flex">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/details" className="rounded-full border border-zinc-500 px-4 py-2 text-xs font-medium text-white">
            Details
          </Link>
          <button className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">Contact Us</button>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <section className="relative overflow-hidden border border-zinc-800">
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Luxury SUV"
          className="h-[620px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black"></div>

        <Navbar overlay />

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1240px] flex-col px-5 pb-12 md:px-8 md:pb-16">
          <span className="mb-5 w-fit rounded-full border border-zinc-500/60 bg-black/35 px-4 py-2 text-xs text-zinc-100">
            Drive Away with Confidence
          </span>
          <h1 className="max-w-[560px] text-4xl font-semibold leading-tight text-white md:text-6xl">
            Quality Used Cars in Ireland
          </h1>
          <p className="mt-4 max-w-[540px] text-sm leading-6 text-zinc-300">
            Carefully selected vehicles, transparent pricing, and trusted warranty options for added peace of mind.
          </p>
          <button className="mt-7 w-fit rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">
            Browse Available Cars
          </button>
        </div>
      </section>

      <main className="mx-auto max-w-[1240px] space-y-24 px-5 py-14 md:px-8 md:py-20">
        <section>
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">Featured Cars</h2>
            <button className="rounded-full border border-zinc-700 px-5 py-2 text-xs text-zinc-100">View All Cars</button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredCars.map((car, index) => (
              <article key={`${car.name}-${index}`} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                <img src={car.image} alt={car.name} className="h-40 w-full object-cover" />
                <div className="space-y-3 p-4">
                  <h3 className="text-sm font-medium text-white">{car.name}</h3>
                  <p className="text-xs text-zinc-400">{car.details}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {car.tags.map((tag) => (
                      <span key={`${index}-${tag}`} className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="pt-1 text-2xl font-medium text-white">{car.price}</p>
                  <button className="text-xs text-zinc-300">View Details ›</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-[10px] text-zinc-300">Peace of Mind Included</span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Warranty & Aftercare Protection</h2>
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-7 md:grid-cols-[130px_1fr]">
              <div className="flex h-28 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-center text-white">
                <p className="text-lg font-semibold leading-tight">2 year<br />warranty</p>
              </div>
              <div className="space-y-4 text-sm leading-7 text-zinc-300">
                <p>
                  At Indus Motor Group, we believe buying a used car should come with confidence. That is why we offer trusted third
                  party warranty options on all vehicles at the point of sale.
                </p>
                <ul className="space-y-1.5 text-zinc-200">
                  <li>✓ Up to 2 Years Coverage</li>
                  <li>✓ Trusted Third Party Providers</li>
                  <li>✓ Available on All Vehicles</li>
                </ul>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/8867438/pexels-photo-8867438.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Warranty consultation"
              className="h-72 w-full rounded-xl object-cover"
            />
          </div>
        </section>

        <section className="text-center">
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-[10px] text-zinc-300">Trusted by Drivers Across Ireland</span>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">What Our Customers Say</h2>
          <p className="mt-2 text-sm text-zinc-400">Real feedback from customers who purchased their vehicles from us.</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left">
                <p className="text-sm text-white">★★★★★</p>
                <p className="mt-3 min-h-28 text-sm leading-6 text-zinc-300">{item.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-white text-sm font-bold text-black">G</div>
                  <div>
                    <p className="text-sm text-white">{item.name}</p>
                    <p className="text-xs text-zinc-500">Dublin</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-7 text-center text-3xl font-semibold text-white md:text-5xl">Why Choose Indus Motor Group</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseCards.map((card) => (
              <article key={card.title} className="relative overflow-hidden rounded-2xl border border-zinc-800">
                <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-sm font-medium text-white">{card.title}</h3>
                  <p className="mt-1 text-xs text-zinc-300">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="relative mt-6 overflow-hidden border-y border-zinc-800">
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2200&q=80"
          alt="Find your next car"
          className="h-[360px] w-full object-cover md:h-[430px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-5 pt-8 md:px-8 md:pt-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Find Your Next Car Today</h2>
          <button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Browse Available Cars</button>
        </div>
      </section>

      <footer className="mx-auto max-w-[1240px] px-5 py-12 text-sm md:px-8 md:py-16">
        <div className="grid gap-10 border-b border-zinc-800 pb-10 md:grid-cols-4">
          <div>
            <p className="font-semibold text-white">INDUS MOTOR GROUP</p>
            <p className="mt-4 max-w-xs text-xs leading-6 text-zinc-400">
              Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
            </p>
            <p className="mt-6 text-xs text-zinc-500">© 2026 Indus Motors Limited. All rights reserved.</p>
          </div>

          <div className="space-y-2">
            <p className="text-white">Navigation</p>
            <Link to="/" className="block">Home</Link>
            <Link to="/details" className="block">Details</Link>
            <p>Our Cars</p>
            <p>Warranty</p>
            <p>Finance</p>
            <p>About</p>
          </div>

          <div className="space-y-2">
            <p className="text-white">Company</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="space-y-2">
            <p className="text-white">Get in Touch</p>
            <p>hello@indusmotorgroup.com</p>
            <p>+353 89 967 5410</p>
            <p className="text-zinc-500">Serving customers across Ireland</p>
          </div>
        </div>

        <p className="pt-6 text-xs text-zinc-600">
          Indus Motor Group is a trading name of Indus Motors Limited. Company No. 790570.
        </p>
      </footer>
    </div>
  )
}
