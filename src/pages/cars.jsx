import { Link } from 'react-router-dom'
import { Navbar } from './Home'

const filterItems = ['Brand', 'Models', 'Price Range', 'Year', 'Fuel Type', 'Body Type', 'Transmission']

const cars = [
	{
		name: 'BMW i8',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Audi E-Tron GT',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Bentley Flying Spur',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'BMW ALPINA B8 Coupe',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Bugatti Chiron Sport',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Toyota Crown Hybrid',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'BYD Seal',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Chevy Camaro ZL1',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		name: 'Ferrari GT20 Spider',
		details: '2020 · 58,000 km · Automatic · Hybrid',
		tags: ['Automatic', 'Hybrid', '7 Seats'],
		price: '€24,950',
		image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
]

export default function Cars() {
	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />

			<main className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
				<section className="space-y-8">
					<h1 className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-6xl">Quality Used Cars for Sale</h1>

					<div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
						{filterItems.map((item) => (
							<button
								key={item}
								className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs text-zinc-200"
							>
								{item} ⌄
							</button>
						))}
						<button className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs text-zinc-200">⚙</button>
						<button className="rounded-full border border-zinc-800 bg-zinc-900 px-6 py-2.5 text-xs text-zinc-500">Search</button>
					</div>
				</section>

				<section className="mt-14">
					<div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Explore Our Collection</h2>
							<p className="mt-2 text-sm text-zinc-400">
								Carefully selected used cars chosen for quality, reliability, and value.
							</p>
						</div>
						<button className="rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs text-zinc-100">Sort By ⌄</button>
					</div>

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{cars.map((car, index) => (
							<article key={`${car.name}-${index}`} className="overflow-hidden rounded-xl border border-zinc-800 bg-black">
								<img src={car.image} alt={car.name} className="h-52 w-full object-cover" />
								<div className="space-y-3 p-4">
									<div className="flex items-start justify-between gap-3">
										<h3 className="text-xl font-medium text-white sm:text-2xl">{car.name}</h3>
										<button className="pt-1 text-xs text-zinc-300">View Details ›</button>
									</div>
									<p className="text-xs text-zinc-400">{car.details}</p>
									<div className="flex flex-wrap gap-1.5">
										{car.tags.map((tag) => (
											<span key={`${index}-${tag}`} className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
												{tag}
											</span>
										))}
									</div>
									<p className="pt-1 text-2xl font-medium text-white md:text-3xl">{car.price}</p>
								</div>
							</article>
						))}
					</div>

					<div className="mx-auto mt-14 max-w-[520px] border-t border-zinc-800 pt-10">
						<div className="flex justify-center gap-2">
							<button className="size-8 rounded-lg bg-white text-xs font-semibold text-black">1</button>
							<button className="size-8 rounded-lg bg-zinc-900 text-xs font-semibold text-zinc-300">2</button>
						</div>
					</div>
				</section>
			</main>

			<section className="relative mt-8 overflow-hidden border-y border-zinc-800">
				<img
					src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80"
					alt="Find your next car"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-5 pt-8 md:px-8 md:pt-10">
					<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Find Your Next Car Today</h2>
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
						<Link to="/cars" className="block">Our Cars</Link>
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
