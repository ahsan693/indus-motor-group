import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Navbar } from './Home'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import heroImage from '../images/aboutpage-images/sq7d6hkZyKS9CyP7Aro9dKYym7M (1).webp'
import buildingImage from '../images/aboutpage-images/0Eazpe9g7yXj6vMKEsho44fz40.webp.png'
import ctaImage from '../images/aboutpage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (4).webp'

const APPROACH_CARDS = [
	{
		title: 'Quality Vehicles',
		body: 'Each vehicle is hand-picked for top quality, reliability, and condition.',
		icon: 'quality',
	},
	{
		title: 'Transparent Pricing',
		body: 'No hidden fees or surprises. The price you see is the price you pay.',
		icon: 'pricing',
	},
	{
		title: 'Nationwide Customers',
		body: 'We can arrange delivery of your vehicle anywhere across Ireland.',
		icon: 'nationwide',
	},
	{
		title: 'Customer Support',
		body: 'We are here to assist you at every stage, from enquiry to delivery.',
		icon: 'support',
	},
]

const CONFIDENCE_POINTS = [
	{
		title: 'Fresh NCT on Vehicles',
		body: 'Most vehicles are supplied with a valid or freshly completed NCT for added peace of mind.',
	},
	{
		title: 'Carefully Selected Cars',
		body: 'We only offer vehicles that meet strict criteria for condition, reliability, and value.',
	},
	{
		title: 'Prepared & Ready to Drive',
		body: 'Vehicles are checked and prepared before sale so they are ready for the road.',
	},
	{
		title: 'Simple & Transparent Purchase',
		body: 'Our process is clear and straightforward, helping you buy with confidence.',
	},
]

const FAQ_ITEMS = [
	{
		question: 'Do your vehicles come with warranty?',
		answer:
			'Warranty options are available on all vehicles at the point of sale, with coverage available for up to two years through a trusted third party provider.',
		details:
			'Coverage levels vary by plan and vehicle. Our team will explain available options and terms before you complete your purchase.',
	},
	{
		question: 'Can I trade in my current car?',
		answer:
			'Trade-ins may be considered depending on the vehicle. Contact us to discuss your current car and available options.',
		details:
			'If you share registration, mileage, condition, and service history, we can guide you through the next steps more quickly.',
	},
	{
		question: 'Do you offer finance?',
		answer:
			'Finance options may be available through trusted third party lenders. Customers can also arrange finance through their own bank or provider.',
		details:
			'Any finance agreement is subject to lender approval criteria. We can help you understand possible options and required documents.',
	},
	{
		question: 'Can I arrange a viewing?',
		answer:
			'Yes, viewings can be arranged by contacting us directly. Get in touch to schedule a time to see a vehicle.',
		details:
			'Please include the vehicle you are interested in so we can have it prepared before your appointment.',
	},
	{
		question: 'Where are you located?',
		answer:
			'Indus Motor Group serves customers across Ireland. Contact us to arrange a viewing or enquiry.',
		details:
			'We support local and nationwide customers, including remote enquiries and scheduled in-person appointments.',
	},
	{
		question: 'Do you deliver vehicles across Ireland?',
		answer: 'Yes. We can arrange vehicle delivery across Ireland if required.',
		details:
			'Delivery availability and timelines may depend on destination and scheduling. Our team will confirm this during your enquiry.',
	},
]

const FALLBACK_ARRIVALS = [
	{
		_id: null,
		make: 'VW Golf GT3',
		model: '2019',
		year: 2020,
		mileage: 58000,
		transmission: 'Automatic',
		fuelType: 'Hybrid',
		seats: 7,
		price: 24950,
		images: ['https://images.unsplash.com/photo-1603386329225-868f9b1ee6f9?auto=format&fit=crop&w=1400&q=80'],
	},
	{
		_id: null,
		make: 'BMW M3',
		model: '2014',
		year: 2020,
		mileage: 58000,
		transmission: 'Automatic',
		fuelType: 'Hybrid',
		seats: 7,
		price: 24950,
		images: ['https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80'],
	},
	{
		_id: null,
		make: 'Audi E-Tron',
		model: 'GT',
		year: 2020,
		mileage: 58000,
		transmission: 'Automatic',
		fuelType: 'Hybrid',
		seats: 7,
		price: 24950,
		images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80'],
	},
]

function getImageUrl(image, width = 1200) {
	if (!image) return null
	if (image._type === 'image' || image.asset) return urlFor(image).width(width).url()
	if (typeof image === 'string') return image
	if (image.url) return image.url
	return null
}

function ApproachIcon({ type }) {
	if (type === 'quality') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M12 3 5 6v6c0 5 3.2 7.8 7 9 3.8-1.2 7-4 7-9V6l-7-3Z" />
				<path d="m9.5 12 1.8 1.8L14.8 10" />
			</svg>
		)
	}

	if (type === 'pricing') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="3" y="6" width="18" height="12" rx="2" />
				<path d="M3 10h18" />
				<path d="M7 14h3" />
			</svg>
		)
	}

	if (type === 'nationwide') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		)
	}

	return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M18 8a6 6 0 0 0-12 0v3a3 3 0 0 0 3 3h1" />
			<path d="M6 11H4a2 2 0 0 0-2 2v1" />
			<path d="M18 11h2a2 2 0 0 1 2 2v1" />
			<rect x="12" y="13" width="10" height="8" rx="2" />
			<path d="M17 17h.01" />
		</svg>
	)
}

export default function About() {
	const { cars, loading: arrivalsLoading } = useCars({ status: 'available' })
	const [expandedFaqItems, setExpandedFaqItems] = useState({})

	const latestArrivals = useMemo(() => {
		if (Array.isArray(cars) && cars.length > 0) {
			return cars.slice(0, 3)
		}
		return FALLBACK_ARRIVALS
	}, [cars])

	const toggleFaqItem = (index) => {
		setExpandedFaqItems((previous) => ({
			...previous,
			[index]: !previous[index],
		}))
	}

	const formatPrice = (value) => new Intl.NumberFormat('en-IE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(Number(value || 0))

	const getCarTags = (car) => {
		const tags = [
			car.transmission || null,
			car.fuelType || null,
			car.seats ? `${car.seats} Seats` : null,
			typeof car.mileage === 'number' && car.mileage <= 70000 ? 'Low Mileage' : null,
		].filter(Boolean)

		if (tags.length > 0) return tags.slice(0, 4)
		return ['Quality Used']
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<section className="relative overflow-hidden">
				<img
					src={heroImage}
					alt="Our story"
					className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black"></div>
				<Navbar overlay />

				<div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1240px] px-5 pb-8 md:px-8 md:pb-10">
					<h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Our Story</h1>
					<p className="mt-2 text-sm text-zinc-300">About Indus Motor Group</p>
				</div>
			</section>

			<main className="mx-auto max-w-[1240px] space-y-12 px-4 py-10 sm:space-y-16 sm:px-5 sm:py-12 md:space-y-20 md:px-8 md:py-20">
				<section className="py-12 md:py-14">
					<div className="grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
						<div className="space-y-6">
							<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Who We Are</h2>
							<p className="max-w-[520px] text-sm leading-8 text-zinc-400">
								Indus Motor Group was founded by car enthusiasts who believe buying a car should be straightforward, transparent, and enjoyable. After experiencing the challenges many buyers face when searching for a reliable used car, we saw an opportunity to do things differently.
							</p>
							<p className="max-w-[520px] text-sm leading-8 text-zinc-400">
								We focus on offering carefully selected vehicles that meet the same standards we would expect when buying a car ourselves. Every vehicle is chosen based on condition, mileage, reliability, and overall value before it reaches our customers.
							</p>
							<p className="max-w-[520px] text-sm leading-8 text-zinc-400">
								At Indus Motor Group, our aim is simple: to provide quality used cars and a buying experience built on honesty, transparency, and confidence.
							</p>
						</div>

						<img
							src={buildingImage}
							alt="Indus Motor Group building"
							className="h-[320px] w-full rounded-lg object-cover sm:h-[380px] md:h-[430px]"
						/>
					</div>
				</section>

				<section className="rounded-[22px] bg-zinc-950 px-6 py-8 sm:px-8 md:px-10 md:py-10">
					<div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Our Approach to Selling Cars</h2>
							<p className="max-w-[320px] text-sm leading-7 text-zinc-400">
								We help you find the right car through a simple, transparent, and reliable buying experience.
							</p>
						</div>

						<div className="grid gap-2 sm:grid-cols-2 md:gap-3">
							{APPROACH_CARDS.map((item) => (
								<article key={item.title} className="rounded-lg bg-black/40 p-4">
									<span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-zinc-300">
										<ApproachIcon type={item.icon} />
									</span>
									<h3 className="text-sm font-medium text-zinc-100">{item.title}</h3>
									<p className="mt-2 text-xs leading-6 text-zinc-400">{item.body}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section>
					<h2 className="mb-8 text-center text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Latest Arrivals</h2>

					{arrivalsLoading && latestArrivals === FALLBACK_ARRIVALS ? (
						<div className="flex items-center justify-center py-10">
							<div className="space-y-3 text-center">
								<div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
								<p className="text-xs text-zinc-500">Loading arrivals...</p>
							</div>
						</div>
					) : (
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{latestArrivals.map((car, index) => {
								const imageUrl = getImageUrl(car.images?.[0], 900)
								const targetPath = car._id ? `/details?id=${car._id}` : '/cars'

								return (
									<Link key={car._id || `fallback-${index}`} to={targetPath} className="block">
										<article className="h-full overflow-hidden rounded-xl border border-zinc-800 bg-black transition-colors hover:border-zinc-700">
											{imageUrl ? (
												<img
													src={imageUrl}
													alt={`${car.make} ${car.model}`}
													className="h-44 w-full object-cover"
												/>
											) : (
												<div className="flex h-40 items-center justify-center bg-zinc-900 text-xs text-zinc-500 sm:h-48 md:h-64">No image available</div>
											)}

											<div className="space-y-3 p-4">
												<div className="flex items-start justify-between gap-3">
													<h3 className="text-xl font-medium leading-tight text-white sm:text-2xl">{car.make} {car.model}</h3>
													<span className="pt-1 text-[10px] text-zinc-300">View Details ›</span>
												</div>

												<p className="text-[11px] text-zinc-500">
													{car.year ? String(car.year) : '—'} · {typeof car.mileage === 'number' ? `${car.mileage.toLocaleString('en-IE')} km` : '—'} · {car.transmission || '—'} · {car.fuelType || '—'}
												</p>

												<div className="flex flex-wrap gap-1.5">
													{getCarTags(car).map((tag) => (
														<span key={`${car.make}-${car.model}-${tag}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2 py-1 text-[10px] text-zinc-300">
															{tag}
														</span>
													))}
												</div>

												<p className="pt-1 text-3xl font-medium text-white">{formatPrice(car.price)}</p>
											</div>
										</article>
									</Link>
								)
							})}
						</div>
					)}
				</section>

				<section>
					<h2 className="mb-6 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Buy With Confidence</h2>
					<div className="border-y border-zinc-800">
						{CONFIDENCE_POINTS.map((point) => (
							<article key={point.title} className="grid gap-3 border-b border-zinc-800 py-4 last:border-b-0 sm:gap-4 md:grid-cols-[1fr_1fr] md:gap-8">
								<h3 className="text-lg font-medium text-white">{point.title}</h3>
								<p className="text-sm leading-7 text-zinc-400">{point.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="grid gap-6 md:gap-8 lg:grid-cols-[320px_1fr] lg:gap-10">
					<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Frequently Asked Questions</h2>
					<div className="border-y border-zinc-800">
						{FAQ_ITEMS.map((item, index) => {
							const isExpanded = Boolean(expandedFaqItems[index])

							return (
								<article key={item.question} className="border-b border-zinc-800 last:border-b-0">
									<button
										type="button"
										onClick={() => toggleFaqItem(index)}
										className="flex w-full items-start justify-between gap-3 py-4 text-left"
										aria-expanded={isExpanded}
									>
										<span className="text-[15px] font-medium leading-6 text-zinc-100">{item.question}</span>
										<span className="mt-0.5 text-2xl leading-none text-zinc-300">{isExpanded ? '−' : '+'}</span>
									</button>

									<p className="pb-4 pr-8 text-sm leading-6 text-zinc-400">{item.answer}</p>

									<div className={`grid transition-all duration-300 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
										<div className="overflow-hidden">
											<p className="pb-4 pr-8 text-sm leading-6 text-zinc-500">{item.details}</p>
										</div>
									</div>
								</article>
							)
						})}
					</div>
				</section>
			</main>

			<section className="relative mt-6 overflow-hidden">
				<img
					src={ctaImage}
					alt="Start your search"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40"></div>
				<div className="absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-5 pt-8 md:px-8 md:pt-10">
					<h2 className="max-w-[460px] text-4xl font-semibold leading-tight text-white sm:text-5xl">Start Your Car Search Today</h2>
					<Link to="/cars" className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-medium text-black">
						Browse Available Cars
					</Link>
				</div>
			</section>

			<footer className="mt-10 bg-black">
				<div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
					<div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr_1fr] md:gap-8">
						<div>
							<p className="text-[24px] font-semibold tracking-tight text-white">INDUS MOTOR GROUP</p>
							<p className="mt-3 max-w-[360px] text-[13px] leading-7 text-zinc-500">
								Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
							</p>

							<div className="mt-4 flex items-center gap-3 text-zinc-400">
								<a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2.5" y="2.5" width="19" height="19" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
									</svg>
								</a>
								<a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2.5" y="6" width="19" height="12" rx="3" />
										<path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
									</svg>
								</a>
								<a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8a1 1 0 0 1 1-1Z" />
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
							<p className="text-[12px] text-zinc-500">Company</p>
							<div className="mt-3 space-y-2.5 text-[15px] text-white">
								<Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
								<Link to="/warranty" className="block transition-colors hover:text-zinc-300">Warranty</Link>
								<Link to="/finance" className="block transition-colors hover:text-zinc-300">Finance</Link>
							</div>
						</div>

						<div>
							<p className="text-[12px] text-zinc-500">Opening Hours</p>
							<div className="mt-3 space-y-2.5 text-[15px] text-white">
								<p>Mon - Fri: 9:00am - 6:00pm</p>
								<p>Sat: 10:00am - 4:00pm</p>
								<p>Sun: Closed</p>
							</div>
						</div>

						<div>
							<p className="text-[12px] text-zinc-500">Get in Touch</p>
							<div className="mt-3 space-y-2.5 text-[15px] text-white">
								<p>hello@indusmotorgroup.com</p>
								<p>+353 89 967 5410</p>
								<p className="text-zinc-500">Serving customers across Ireland</p>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-zinc-800 px-5 py-6 text-center md:px-8 md:py-8">
					<p className="mx-auto max-w-[1180px] text-[10px] leading-5 text-zinc-600">
						Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570. Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
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
			</footer>
		</div>
	)
}
