import { Link } from 'react-router-dom'
import { Navbar } from './Home'

export default function Details() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <Navbar />

      <main className="mx-auto max-w-[1240px] space-y-10 px-5 py-10 md:px-8 md:py-14">
        <div className="space-y-4">
          <Link to="/" className="text-sm text-zinc-400 hover:text-white">← Back to Home</Link>
          <p className="text-sm text-zinc-500">Home › Cars › Volkswagen Golf</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-6xl">Volkswagen Golf</h1>
          <p className="text-2xl font-semibold text-white md:text-3xl">€11,950</p>
          <p className="max-w-3xl text-zinc-400">
            Well-maintained and reliable hatchback with excellent comfort, efficiency, and everyday practicality.
          </p>
        </div>

        <section className="grid gap-7 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1800&q=80"
            alt="Volkswagen Golf"
            className="h-64 w-full rounded-2xl border border-zinc-800 object-cover sm:h-80 md:h-[420px]"
          />

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">Vehicle Specifications</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2"><span className="text-zinc-500">Year</span><span className="text-white">2014</span></div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2"><span className="text-zinc-500">Mileage</span><span className="text-white">124,000 km</span></div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2"><span className="text-zinc-500">Transmission</span><span className="text-white">Automatic</span></div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2"><span className="text-zinc-500">Fuel Type</span><span className="text-white">Petrol</span></div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2"><span className="text-zinc-500">Body Type</span><span className="text-white">Hatchback</span></div>
              <div className="flex items-center justify-between"><span className="text-zinc-500">Engine Size</span><span className="text-white">1.4L</span></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
