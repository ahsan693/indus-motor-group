import { Link } from 'react-router-dom'
import { Navbar } from './Home'
import warrantyHeroImg from '../images/warrantypage-images/QO39bC2hbcBpcVKCuwubY36DU.webp'
import vehicleWarrantyImg from '../images/warrantypage-images/image 25.png'
import stepOneImg from '../images/warrantypage-images/IL8Bx4obJa2x3WwpottYhJS6K8.webp'
import stepTwoImg from '../images/warrantypage-images/w2mNaZnIbEJtakXLPOnkYEfJmts.webp'
import stepThreeImg from '../images/warrantypage-images/MoRXSXu7z7dxC2bPV8u4yu8VF3Y.webp'

const keyFeatures = [
	{
		title: 'Nationwide Cover',
		body: 'Access a nationwide repair network.',
		icon: 'nationwide',
	},
	{
		title: 'Parts & Labour Cover',
		body: 'Includes key mechanical and electrical components.',
		icon: 'parts',
	},
	{
		title: 'Up to 24 Months Cover',
		body: 'Warranty available for up to two years.',
		icon: 'duration',
	},
	{
		title: 'Roadside Assistance',
		body: '24/7 assistance available with selected plans.',
		icon: 'assistance',
	},
]

const steps = [
	{
		step: 'Step 01',
		title: 'Choose Your Car',
		body: 'Browse our available cars and select the one that suits you.',
		image: stepOneImg,
	},
	{
		step: 'Step 02',
		title: 'Select Your Warranty Option',
		body: 'Our team will explain the available warranty plans.',
		image: stepTwoImg,
	},
	{
		step: 'Step 03',
		title: 'Drive Away With Confidence',
		body: 'Your warranty begins from the point of purchase.',
		image: stepThreeImg,
	},
]

const faq = [
	['Do all cars come with warranty?', 'Warranty options are available on all vehicles and can be added at the point of purchase.'],
	['How long can the warranty last?', 'Warranty coverage may be available for up to two years depending on the selected plan.'],
	['What does the warranty cover?', 'Warranty options are available on all vehicles and can be added at the point of purchase.'],
	['Is warranty included in the vehicle price?', 'Warranty is optional and can be added at the point of sale.'],
]

function KeyFeatureIcon({ type }) {
	if (type === 'nationwide') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="8" />
				<path d="M4 12h16" />
				<path d="M12 4a14 14 0 0 1 0 16" />
				<path d="M12 4a14 14 0 0 0 0 16" />
			</svg>
		)
	}

	if (type === 'parts') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M9 11a3 3 0 1 0 4 4l6-6a2.5 2.5 0 0 0-4-3l-1 1" />
				<path d="m14 7 3 3" />
				<path d="M3 21l6-6" />
			</svg>
		)
	}

	if (type === 'duration') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M7 3h10" />
				<path d="M12 8v5l3 2" />
				<circle cx="12" cy="13" r="8" />
			</svg>
		)
	}

	return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z" />
			<path d="m9.5 12 1.8 1.8 3.2-3.2" />
		</svg>
	)
}

export default function Warranty() {
	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<section className="relative overflow-hidden">
				<img
					src={warrantyHeroImg}
					alt="Warranty hero"
					loading="eager"
					fetchPriority="high"
					decoding="async"
					className="hero-zoom-settle -mb-px block h-[460px] w-full object-cover sm:h-[560px] md:mb-0 md:h-[640px]"
				/>
				<div className="absolute -inset-px bg-gradient-to-b from-black/20 via-black/30 to-black md:inset-0"></div>
				<Navbar overlay />

				<div className="hero-content-rise absolute inset-x-0 bottom-0 hero-shell pb-15 md:pb-20">
					<h1 className="mb-15 text-[36px] font-semibold text-white md:text-[56px]">Warranty & Aftercare</h1>
				</div>
			</section>

			<main className="layout-shell layout-stack">
				<section className="motion-rise mt-20 grid items-center gap-6 md:mt-16 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
					<div className="space-y-5">
						<h2 className="text-[30px] font-semibold leading-tight text-white md:text-[44px]">Vehicle Warranty for Added Peace of Mind</h2>
						<p className="max-w-[500px] text-[16px] leading-7 text-zinc-300 md:text-[18px]">
							All vehicles at Indus Motor Group can be supplied with warranty options for added peace of mind. We work with trusted third party providers to offer warranty protection at the point of sale.
						</p>
						<p className="max-w-[500px] text-[16px] leading-7 text-zinc-300 md:text-[18px]">
							Coverage is designed to help protect against unexpected repair costs and may be available for up to 24 months, depending on the vehicle and selected plan.
						</p>
						<button className="rounded-full bg-white px-5 py-2.5 text-[16px] font-medium text-black transition-colors hover:bg-zinc-200">Ask About Warranty</button>
					</div>

					<img
						src={vehicleWarrantyImg}
						alt="Vehicle warranty"
						loading="lazy"
						decoding="async"
						className="motion-card h-[300px] w-full rounded-lg object-cover sm:h-[360px] md:h-[430px]"
					/>
				</section>

				<section className="motion-rise motion-rise-delay-1 rounded-[22px] bg-zinc-950 px-6 py-8 sm:px-8 md:px-10 md:py-10">
					<div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
						<div className="space-y-4">
							<h2 className="text-[30px] font-semibold leading-tight text-white md:text-[44px]">Key Features</h2>
							<p className="max-w-[310px] text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								Warranty options are available across all vehicles, providing added protection and peace of mind long after you drive away.
							</p>
						</div>

						<div className="grid gap-2 sm:grid-cols-2 md:gap-3">
							{keyFeatures.map((item) => (
								<article key={item.title} className="group motion-card rounded-lg bg-black/40 p-4">
									<span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-zinc-300">
										<KeyFeatureIcon type={item.icon} />
									</span>
									<h3 className="motion-link-slide text-[18px] font-medium text-zinc-100 md:text-[22px]">{item.title}</h3>
									<p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px]">{item.body}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="motion-rise motion-rise-delay-2 space-y-6">
					<h2 className="text-[30px] font-semibold leading-tight text-white md:text-[44px]">How It Works</h2>
					<div className="grid gap-4 md:grid-cols-3">
						{steps.map((item) => (
							<article key={item.title} className="group motion-card space-y-3">
								<div className="overflow-hidden rounded-xl">
									<img src={item.image} alt={item.title} loading="lazy" decoding="async" className="motion-media h-56 w-full object-cover sm:h-64" />
								</div>
								<p className="text-[12px] text-zinc-500 md:text-[14px]">({item.step})</p>
								<h3 className="motion-link-slide text-[20px] font-medium leading-tight text-white md:text-[24px]">{item.title}</h3>
								<p className="text-[16px] leading-6 text-zinc-400 md:text-[18px]">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="motion-rise grid gap-6 border-b border-zinc-800 pb-5 lg:grid-cols-[360px_1fr] lg:gap-8">
					<h2 className="text-[30px] font-semibold text-white md:text-[44px]">Warranty FAQS</h2>
					<div className="space-y-4">
						{faq.map(([question, answer]) => (
							<div key={question} className="border-b border-zinc-800 pb-4 transition-colors hover:bg-zinc-950/40">
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-[16px] font-medium text-white md:text-[18px]">{question}</h3>
									<span className="text-lg text-zinc-300">+</span>
								</div>
								<p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px]">{answer}</p>
							</div>
						))}
					</div>
				</section>

				<section className="motion-rise rounded-2xl bg-zinc-950 py-14 text-center">
					<h2 className="text-[30px] font-semibold text-white md:text-[44px]">Drive Away With Confidence</h2>
					<p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-zinc-400 md:text-[18px]">
						Warranty options are available on all vehicles to help protect your purchase.
					</p>
					<button className="mt-7 rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black">Ask About Warranty</button>
				</section>
			</main>

			<footer className="mt-10 bg-black">
				<div className="site-footer-shell text-white">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy">
								Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
							</p>

							<div className="mt-4 flex items-center gap-3 text-white">
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
							<p className="site-footer-label">Company</p>
							<div className="site-footer-links">
								<Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
								<Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
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
						<a href="#" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</a>
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
