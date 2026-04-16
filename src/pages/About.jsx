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
		body: 'Most vehicles are supplied with a valid or freshly completed NCT for added peace.',
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

	return (
		<div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
			<section className="relative overflow-hidden iphone:rounded-b-2xl iphone:mb-2">
				<img
					src={heroImage}
					alt="Our story"
					loading="eager"
					fetchPriority="high"
					decoding="async"
					className="hero-zoom-settle h-[260px] w-full object-cover iphone:h-[180px] sm:h-[460px] md:h-[620px]"
				/>
				<Navbar overlay />

				<div className="hero-content-rise hero-mobile-shell absolute inset-x-0 bottom-0 hero-shell pb-5 min-[390px]:pb-6 sm:pb-8 md:pb-10 iphone:pb-2">
					<h1 className="hero-heading-mobile text-[22px] font-normal leading-tight text-white drop-shadow-md min-[390px]:text-[26px] sm:text-[28px] md:text-[38px] iphone:text-[22px]">Our Story</h1>
					<p className="hero-subtitle-mobile mt-2 text-[16px] text-zinc-300 drop-shadow md:text-[18px] iphone:text-[13px]">About Indus Motor Group</p>
				</div>
			</section>

			<main className="layout-shell layout-stack">
				<section className="motion-rise py-12 md:py-14 iphone:py-5">
					<div className="grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10 iphone:gap-3">
						<div className="space-y-6 iphone:space-y-3">
							<h2 className="mb-4 text-[22px] font-normal leading-tight text-white md:mb-0 md:text-[30px] iphone:text-[18px]">Who We Are</h2>
							<p className="max-w-[520px] text-[16px] leading-8 text-zinc-400 md:text-[18px] iphone:text-[13px] iphone:leading-6">
								Indus Motor Group was founded by car enthusiasts who believe buying a car should be straightforward, transparent, and enjoyable. After experiencing the challenges many buyers face when searching for a reliable used car, we saw an opportunity to do things differently.
							</p>
							<p className="max-w-[520px] text-[16px] leading-8 text-zinc-400 md:text-[18px] iphone:text-[13px] iphone:leading-6">
								We focus on offering carefully selected vehicles that meet the same standards we would expect when buying a car ourselves. Every vehicle is chosen based on condition, mileage, reliability, and overall value before it reaches our customers.
							</p>
							<p className="max-w-[520px] text-[16px] leading-8 text-zinc-400 md:text-[18px] iphone:text-[13px] iphone:leading-6">
								At Indus Motor Group, our aim is simple: to provide quality used cars and a buying experience built on honesty, transparency, and confidence.
							</p>
						</div>

						<img
							src={buildingImage}
							alt="Indus Motor Group building"
							loading="lazy"
							decoding="async"
							className="motion-card h-[180px] w-full rounded-lg object-cover iphone:h-[150px] sm:h-[380px] md:h-[430px]"
						/>
					</div>
				</section>

				<section className="motion-rise motion-rise-delay-1 rounded-[22px] bg-zinc-950 px-6 py-8 sm:px-8 md:px-10 md:py-10 iphone:px-2 iphone:py-4">
					<div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10 iphone:gap-2">
						<div className="space-y-4 iphone:space-y-2">
							<h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[16px]"><span className="block">Our Approach to</span><span className="block">Selling Cars</span></h2>
							<p className="max-w-[320px] text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[14px] iphone:leading-5">
								We help you find the right car through a simple, transparent, and reliable buying experience.
							</p>
						</div>

						<div className="grid gap-2 sm:grid-cols-2 md:gap-3 iphone:grid-cols-1 iphone:gap-1">
							{APPROACH_CARDS.map((item) => (
								<article key={item.title} className="group motion-card rounded-lg bg-black/40 p-4 iphone:p-2">
									<span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-zinc-300">
										<ApproachIcon type={item.icon} />
									</span>
									<h3 className="motion-link-slide text-[16px] font-normal text-zinc-100 md:text-[18px] iphone:text-[13px]">{item.title}</h3>
									<p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">{item.body}</p>
								</article>
							))}
						</div>
					</div>
				</section>


				<section className="motion-rise motion-rise-delay-2 iphone:mt-3">
					<h2 className="mb-8 text-center text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[18px] iphone:mb-3">Latest Arrivals</h2>
					{arrivalsLoading && latestArrivals === FALLBACK_ARRIVALS ? (
						<div className="flex items-center justify-center py-10">
							<div className="space-y-3 text-center">
								<div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
								<p className="text-[14px] text-zinc-500 md:text-[16px]">Loading arrivals...</p>
							</div>
						</div>
					) : latestArrivals.length === 0 ? (
						<p className="text-[16px] text-zinc-400 md:text-[18px]">No cars available at the moment.</p>
					) : (
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 iphone:gap-2">
							{latestArrivals.map((car, index) => {
								let imageUrl = null
								if (car.images?.[0]) {
									const img = car.images[0]
									if (img._type === 'image' || img.asset) {
										imageUrl = urlFor(img).width(600).url()
									} else if (typeof img === 'string') {
										imageUrl = img
									} else if (img.url) {
										imageUrl = img.url
									}
								}
								const targetPath = car._id ? `/details?id=${car._id}` : '/cars'
								return (
									<Link key={car._id || `fallback-${index}`} to={targetPath} className="group block">
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
													<h3 className="truncate text-[18px] font-normal text-white iphone:text-[13px]">{car.make} {car.model}</h3>
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

				<section className="motion-rise iphone:mt-3">
					<h2 className="mb-6 text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[18px]">Buy With Confidence</h2>
					<div className="border-b border-zinc-800 iphone:border-none">
						{CONFIDENCE_POINTS.map((point) => (
							<article key={point.title} className="grid gap-3 border-b border-zinc-800 py-4 last:border-b-0 transition-colors hover:bg-zinc-950/40 sm:gap-4 md:grid-cols-[1fr_1fr] md:gap-8 iphone:gap-1 iphone:py-2 iphone:text-[13px]">
							<h4 className="text-[12px] font-normal text-white md:text-[13px] iphone:text-[11px]">{point.title}</h4>
								<p className="text-[15px] leading-7 text-zinc-400 md:text-[16px] iphone:text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">{point.body}</p>
							</article>
						))}
					</div>
				</section>


				<section className="motion-rise grid gap-6 md:gap-8 md:grid-cols-[1fr_1fr] iphone:gap-2">
					<h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[18px]">Frequently Asked Questions</h2>
					<div className="border-y border-zinc-800 iphone:border-none">
							{FAQ_ITEMS.map((item, index) => {
								const isExpanded = Boolean(expandedFaqItems[index])
								return (
								<article key={item.question} className="border-b border-zinc-800 last:border-b-0 iphone:text-[13px]">
									<button
										type="button"
										onClick={() => toggleFaqItem(index)}
										className="flex w-full items-start justify-between gap-3 py-4 text-left iphone:py-2"
										aria-expanded={isExpanded}
									>
										<span className="text-[16px] font-normal leading-6 text-zinc-100 md:text-[18px] iphone:text-[13px]">{item.question}</span>
										<span className="mt-0.5 text-2xl leading-none text-zinc-300">{isExpanded ? '−' : '+'}</span>
									</button>
									{isExpanded && (
										<div className="pr-8 pb-4 iphone:pr-2 iphone:pb-2">
											<p className="text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[14px]">{item.answer}</p>
											<p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">{item.details}</p>
										</div>
									)}
								</article>
								)
							})}
					</div>
				</section>
			</main>

			<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-6 h-[320px] w-screen max-w-none overflow-hidden sm:mt-6 sm:h-[420px] md:mt-6 md:h-[750px] iphone:h-[180px] iphone:mt-2">
				<img
					src={ctaImage}
					alt="Start your search"
					loading="lazy"
					decoding="async"
					className="hero-zoom-settle block h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="hero-content-rise absolute inset-x-0 top-0 hero-shell pt-6 sm:pt-8 md:pt-10 iphone:pt-2">
					<h2 className="max-w-[460px] text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[16px]">Start Your Car Search Today</h2>
					<Link to="/cars" className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-normal text-black iphone:text-[14px] iphone:px-3 iphone:py-2">
						Browse Available Cars
					</Link>
				</div>
			</section>

			<footer className="mt-10 bg-black iphone:mt-4">
			  
				<div className="site-footer-shell text-white">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy text-[13px] leading-tight md:text-[14px]">
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
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
								<Link to="/warranty" className="block transition-colors hover:text-zinc-300">Warranty</Link>
								<Link to="/finance" className="block transition-colors hover:text-zinc-300">Finance</Link>
							</div>
						</div>

						<div className="mt-6">
							<p className="site-footer-label">Opening Hours</p>
				<div className="site-footer-links space-y-2 text-[14px]">
								<p>Mon - Fri: 9:00am - 6:00pm</p>
								<p>Sat: 10:00am - 4:00pm</p>
								<p>Sun: Closed</p>
							</div>
						</div>

						<div className="mt-6">
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

