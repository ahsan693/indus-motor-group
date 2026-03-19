import { useEffect, useState } from 'react'

const badges = ['Finance Available', 'Trade-Ins Welcome', 'Nationwide Delivery Available']

const navItems = [
  ['Home', '#home'],
  ['Our Cars', '#cars'],
  ['Warranty', '#warranty'],
  ['Finance', '#finance'],
  ['About', '#about'],
]

const heroImages = [
  'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
]

const specsLeft = [
  ['Make', 'Volkswagen'],
  ['Model', 'Golf'],
  ['Year', '2014'],
  ['Mileage', '124,000 km'],
  ['Transmission', 'Automatic'],
  ['Fuel Type', 'Petrol'],
  ['Body Type', 'Hatchback'],
  ['Engine Size', '1.4L'],
]

const specsRight = [
  ['Seats', '5'],
  ['Doors', '5'],
  ['Colour', 'Grey'],
  ['Engine Power', '140 BHP'],
  ['CO₂ Emissions', '123 g/km'],
  ['Road Tax', '€200/year'],
  ['NCT Due', '02/2026'],
  ['Previous Owners', '2'],
]

const featureGroups = [
  {
    title: 'Interior & Comfort',
    items: ['Air Conditioning', 'Centre Armrest', 'Climate Control', 'Electric Seats', 'Electric Windows', 'Folding Rear Seats', 'Heated Front Seats', 'Sunroof'],
  },
  {
    title: 'Safety & Security',
    items: ['Anti-Theft System', 'Automatic Wipers', 'Brake Assist System', 'Central Locking', 'Daytime Running Lights', 'EBD', 'Hill-Start Assist', 'Traction Control'],
  },
  {
    title: 'Technology & Driver Assistance',
    items: ['Bluetooth', 'Automatic Wipers', 'Cruise Control', 'Electronic Handbrake', 'Multi-Function Steering Wheel', 'Parking Sensors', 'Sat Nav', 'Selectable Drive Mode', 'Stop / Start Button'],
  },
  {
    title: 'Exterior & Styling',
    items: ['Alloy Wheels', 'Metallic Paint', 'Rear Spoiler'],
  },
]

const supportCards = [
  ['Warranty Options Available', 'Optional third party warranty cover available.'],
  ['Trade Ins Welcome', 'We may be able to accept your current vehicle as part exchange.'],
  ['Finance Assistance', 'Finance options available through trusted third party lenders.'],
  ['Nationwide Delivery', 'Delivery available anywhere across Ireland.'],
]

const relatedCars = [
  {
    name: 'BMW i8',
    details: '2020 · 58,000 km · Automatic · Hybrid',
    price: '€24,950',
    image: 'https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Audi E-Tron GT',
    details: '2020 · 58,000 km · Automatic · Hybrid',
    price: '€24,950',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Bentley Flying Spur',
    details: '2020 · 58,000 km · Automatic · Hybrid',
    price: '€24,950',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const faq = [
  ['Do your vehicles include warranty options?', 'Warranty options are available on all vehicles at the point of sale, with coverage available for up to two years through a trusted third party provider.'],
  ['Can I trade in my current car?', 'Trade-ins may be considered depending on the vehicle. Contact us to discuss your current car and available options.'],
  ['Do you offer finance?', 'Finance options may be available through trusted third party lenders.'],
  ['Can I arrange a viewing?', 'Yes, viewings can be arranged by contacting us directly. Get in touch to schedule a time to see a vehicle.'],
  ['Where are you located?', 'Indus Motor Group serves customers across Ireland. Contact us to arrange a viewing or enquiry.'],
  ['Do you offer nationwide delivery?', 'Yes, we can arrange delivery of your vehicle anywhere in Ireland. Contact our team to discuss delivery options.'],
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroImages.length)
  }

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div id="home" className="bg-black text-zinc-300 min-h-screen">
      <header className="border-b border-zinc-800">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-5 flex items-center justify-between gap-6">
          <p className="text-sm md:text-base font-semibold tracking-wide text-white">INDUS MOTOR GROUP</p>
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            {navItems.map(([item, href]) => (
              <a key={item} className="hover:text-white transition-colors" href={href}>{item}</a>
            ))}
          </nav>
          <a href="#about" className="rounded-full bg-white text-black text-sm px-5 py-2.5 font-medium">Contact Us</a>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto px-5 md:px-8 py-7 md:py-10 space-y-20">
        <section id="cars" className="space-y-8 scroll-mt-20">
          <p className="text-sm text-zinc-500">Home  ›  Cars  ›  Volkswagen Golf</p>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <button className="text-sm text-zinc-400">← Back to Cars</button>
              <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">Volkswagen Golf</h1>
              <p className="text-4xl font-semibold text-white">€11,950</p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5">{badge}</span>
                ))}
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                A well maintained and reliable hatchback known for comfort, efficiency, and everyday practicality. The Volkswagen Golf offers smooth driving, excellent fuel economy, and a well designed interior, making it a great choice for daily driving or commuting.
              </p>
              <p className="text-sm text-zinc-500">2014 · 124,000 km · Automatic · Petrol</p>
              <button className="text-white font-medium">Enquire Now →</button>
            </div>

            <div className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 relative">
              <img
                src={heroImages[activeSlide]}
                alt="Volkswagen Golf"
                className="w-full h-[460px] object-cover"
              />
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white rounded-full size-9"
              >
                ‹
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white rounded-full size-9"
              >
                ›
              </button>
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                {heroImages.map((_, dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveSlide(dot)}
                    className={`size-2 rounded-full ${dot === activeSlide ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`Go to image ${dot + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="warranty" className="space-y-8 border-y border-zinc-800 py-16 scroll-mt-20">
          <h2 className="text-4xl font-semibold text-white">Vehicle Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[specsLeft, specsRight].map((column, index) => (
              <div key={index} className="space-y-2">
                {column.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between py-4 border-b border-zinc-800">
                    <span className="text-zinc-500">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="finance" className="space-y-10 scroll-mt-20">
          <h2 className="text-4xl font-semibold text-white">Features</h2>
          <div className="space-y-9">
            {featureGroups.map((group) => (
              <div key={group.title} className="border-b border-zinc-800 pb-8">
                <h3 className="text-white font-medium mb-4">{group.title}</h3>
                <div className="grid md:grid-cols-3 gap-3 text-zinc-300">
                  {group.items.map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 md:p-10 grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold text-white leading-tight">Enquire About This Vehicle</h2>
            <p className="text-zinc-400 max-w-md">Contact our team to arrange a viewing, ask questions, or check availability.</p>
            <button className="rounded-full bg-white text-black text-sm px-6 py-3 font-medium">Enquire Now</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {supportCards.map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 space-y-2">
                <h3 className="text-white text-sm font-medium">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="space-y-8 border-y border-zinc-800 py-14 scroll-mt-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-semibold text-white">You May Also Like</h2>
              <p className="text-zinc-500 mt-2">Discover more quality used cars available at Indus Motor Group.</p>
            </div>
            <button className="hidden md:block rounded-full bg-white text-black text-sm px-6 py-3 font-medium">View All Cars</button>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {relatedCars.map((car) => (
              <article key={car.name} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
                <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl text-white">{car.name}</h3>
                    <button className="text-sm">View Details ›</button>
                  </div>
                  <p className="text-zinc-500 text-sm">{car.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Automatic', 'Hybrid', '7 Seats', 'Low Mileage'].map((tag) => (
                      <span key={`${car.name}-${tag}`} className="text-xs rounded-full border border-zinc-700 px-3 py-1">{tag}</span>
                    ))}
                  </div>
                  <p className="text-3xl text-white">{car.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[360px_1fr] gap-10">
          <h2 className="text-5xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map(([question, answer]) => (
              <div key={question} className="border-b border-zinc-800 pb-4 space-y-2">
                <div className="flex items-center justify-between text-white">
                  <h3>{question}</h3>
                  <span>+</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-zinc-950 border border-zinc-800 py-20 px-6 text-center space-y-5">
          <h2 className="text-5xl md:text-6xl text-white font-semibold max-w-3xl mx-auto leading-tight">Choose Your Next Car and Have It Delivered Anywhere in Ireland</h2>
          <p className="text-zinc-400">Indus Motor Group · Nationwide vehicle delivery available.</p>
          <button className="rounded-full bg-white text-black text-sm px-6 py-3 font-medium">Enquire Now</button>
        </section>
      </main>

      <footer className="border-t border-zinc-800 mt-10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 grid md:grid-cols-4 gap-10 text-sm">
          <div className="space-y-3">
            <p className="text-white font-semibold">INDUS MOTOR GROUP</p>
            <p className="text-zinc-500">Quality used cars with transparent pricing and trusted warranty options.</p>
            <p className="text-zinc-600 text-xs">© 2026 Indus Motors Limited. All rights reserved.</p>
          </div>
          <div className="space-y-2">
            <p className="text-white">Navigation</p>
            {['Home', 'Our Cars', 'Warranty', 'Finance', 'About'].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-white">Company</p>
            {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions'].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-white">Get In Touch</p>
            <p>hello@indusmotorgroup.com</p>
            <p>+353 89 967 5410</p>
            <p className="text-zinc-500">Serving customers across Ireland</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
