import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Home'
import financeHeroImg from '../images/financepage-images/financenavbar.jpg'
import financeIntroImg from '../images/financepage-images/3Yuvf0VLIgEYOhSCU7AHILehDQc.webp'
import processStepOneImg from '../images/financepage-images/oZ0YADXVT2nLdzXhQvexvGQwXmQ.webp'
import processStepTwoImg from '../images/financepage-images/4abMWxRVBapqeSe6NJzMoudyNyU.webp'
import processStepThreeImg from '../images/financepage-images/uj5kNWiTG00RYipzb2q18RbBk.webp'
import applyFinanceImg from '../images/financepage-images/image 23.png'
import financeCtaImg from '../images/financepage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (4).webp'

const processSteps = [
	{
		step: 'Step 01',
		title: 'Choose Your Car',
		body: 'Browse our available vehicles and find the car that suits your needs.',
		image: processStepOneImg,
	},
	{
		step: 'Step 02',
		title: 'Apply for Finance',
		body: 'Complete a quick finance application form online.',
		image: processStepTwoImg,
	},
	{
		step: 'Step 03',
		title: 'Speak With a Finance Specialist',
		body: 'A finance provider will contact you to discuss your application and available options.',
		image: processStepThreeImg,
	},
]

const benefits = [
	{
		title: 'Flexible Payment Plans',
		body: 'Finance options are designed to suit different budgets and needs.',
		icon: 'flexible',
	},
	{
		title: 'Quick Application Process',
		body: 'Simple application process with fast response times.',
		icon: 'quick',
	},
	{
		title: 'Trusted Third Party Lenders',
		body: 'Finance is arranged through trusted third party providers.',
		icon: 'trusted',
	},
	{
		title: 'Available Across Ireland',
		body: 'Finance options available to customers across Ireland.',
		icon: 'available',
	},
]

const faq = [
	{
		question: 'Is there any obligation to apply?',
		answer: 'No, submitting an application does not commit you to any finance agreement.',
		details:
			'An application simply lets a finance provider review your situation and share options. You remain free to decide whether to proceed.',
	},
	{
		question: 'Will applying affect my credit score?',
		answer: 'This depends on the finance provider, but any checks will be explained before proceeding.',
		details:
			'Some providers may perform a soft eligibility check first, while others may request a full credit check at a later stage. This is always clarified in advance.',
	},
	{
		question: 'Do I need a deposit?',
		answer: 'Some finance providers may require a deposit, depending on the agreement.',
		details:
			'Deposit requirements can vary based on vehicle price, agreement type, and lender criteria. Our team can outline options that may suit your budget.',
	},
	{
		question: 'How long does approval take?',
		answer: 'Applications are typically reviewed within a short time after submission.',
		details:
			'Timings can vary by lender and application volume. Once submitted, a finance provider will contact you to discuss next steps as soon as possible.',
	},
	{
		question: 'Can I apply if I have not chosen a car yet?',
		answer: 'Yes, you can apply and discuss suitable options with a finance provider.',
		details:
			'If you are still deciding, you can share your preferred budget range and vehicle type first, then finalize your choice once options are clearer.',
	},
	{
		question: 'Is finance available across Ireland?',
		answer: 'Yes, finance options are available to customers across Ireland.',
		details:
			'Where eligible, finance providers can support applicants nationwide. Contact us for guidance based on your location and preferred vehicle.',
	},
]

const MONTHLY_BUDGET_OPTIONS = ['Under €200', '€200 - €300', '€300 - €400', '€400 - €500', 'Over €500']

function BenefitIcon({ type }) {
	if (type === 'flexible') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M8.5 8A3.5 3.5 0 0 1 12 4.5h6" />
				<path d="m16 2.5 2 2-2 2" />
				<path d="M15.5 16A3.5 3.5 0 0 1 12 19.5H6" />
				<path d="m8 17.5-2 2 2 2" />
			</svg>
		)
	}

	if (type === 'quick') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="3" y="8" width="18" height="10" rx="2" />
				<path d="M7 8V6h10v2" />
				<path d="M6.5 13h.01" />
				<path d="M17.5 13h.01" />
			</svg>
		)
	}

	if (type === 'trusted') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="4" y="4" width="16" height="16" rx="2" />
				<path d="M8 9h8" />
				<path d="M8 13h8" />
			</svg>
		)
	}

	return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z" />
			<circle cx="12" cy="10" r="2.2" />
		</svg>
	)
}

export default function Finance() {
	const [expandedFaqItems, setExpandedFaqItems] = useState({})

	const toggleFaqItem = (index) => {
		setExpandedFaqItems((previous) => ({
			...previous,
			[index]: !previous[index],
		}))
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<section className="relative overflow-hidden">
				<img
					src={financeHeroImg}
					alt="Finance hero"
					className="h-[560px] w-full object-cover object-[center_90%] sm:h-[620px] md:h-[680px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black"></div>
				<Navbar overlay />

				<div className="absolute inset-x-0 bottom-0 hero-shell pb-7 md:pb-10">
					<h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl">Car Finance Made Simple</h1>
				</div>
			</section>

			<main className="layout-shell layout-stack">
				<section className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
					<div className="space-y-6">
						<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Finance Your Next Car</h2>
						<p className="max-w-[430px] text-xs leading-7 text-zinc-400 sm:text-sm">
							We offer flexible finance options through trusted third party lenders. Apply online and we will connect you with a provider to discuss the best option for your needs.
						</p>
						<p className="max-w-[430px] text-[11px] leading-5 text-zinc-500 sm:text-[12px]">
							Finance is provided by third party lenders. Indus Motor Group does not act as a lender or provide financial advice.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<button className="rounded-full bg-white px-6 py-2.5 text-xs font-medium text-black transition-colors hover:bg-zinc-200">Apply for Finance</button>
							<Link to="/cars" className="text-sm text-zinc-200 transition-colors hover:text-white">Browse Cars →</Link>
						</div>
					</div>

					<img
						src={financeIntroImg}
						alt="Luxury car in a tunnel"
						className="h-[300px] w-full rounded-lg border border-zinc-800 object-cover sm:h-[360px] md:h-[430px]"
					/>
				</section>

			<section className="py-10 md:py-12">
					<div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
						<div className="space-y-5">
							<p className="text-xs text-zinc-500">• Finance Benefits</p>
							<h2 className="max-w-[280px] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Finance Options Available</h2>
						</div>

						<div className="grid gap-2 sm:grid-cols-2 md:gap-3">
							{benefits.map((item) => (
								<article key={item.title} className="rounded-lg bg-zinc-950 p-5">
									<span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-300">
										<BenefitIcon type={item.icon} />
									</span>
									<h3 className="text-sm font-medium text-white">{item.title}</h3>
									<p className="mt-2 text-xs leading-6 text-zinc-400">{item.body}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section>
					<p className="text-xs text-zinc-500">• Process</p>
					<h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl md:text-5xl">How Finance Works</h2>

					<div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-3">
						{processSteps.map((item) => (
							<article key={item.title} className="space-y-3">
								<img src={item.image} alt={item.title} className="h-56 w-full rounded-xl border border-zinc-700 object-cover" />
								<p className="text-xs text-zinc-500">({item.step})</p>
								<h3 className="text-lg font-medium text-white">{item.title}</h3>
								<p className="text-sm text-zinc-400">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="space-y-7 pt-10 md:pt-12">
					<p className="text-center text-xs text-zinc-500">• Finance Application</p>
					<h2 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Apply for Finance</h2>
					<p className="text-center text-sm text-zinc-400">Complete the short form below and a finance provider will contact you to discuss your application.</p>

					<div className="grid items-stretch gap-3 lg:grid-cols-[1fr_1.05fr] lg:gap-4">
						<form className="space-y-3 rounded-lg border border-zinc-700 bg-black p-3 sm:p-4 md:p-5">
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Vehicle Make</label>
								<input type="text" placeholder="e.g. Volkswagen" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Model</label>
								<input type="text" placeholder="e.g. Golf" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Year</label>
								<input type="text" placeholder="e.g. 2019" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Monthly Budget</label>
								<select defaultValue="" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none">
									<option value="" disabled>Select your budget</option>
									{MONTHLY_BUDGET_OPTIONS.map((option) => (
										<option key={option} value={option}>{option}</option>
									))}
								</select>
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Sale Price<span className="text-red-500">*</span></label>
								<input type="text" placeholder="e.g. €18950" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Your First Name<span className="text-red-500">*</span></label>
								<input type="text" placeholder="e.g. John" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Last Name<span className="text-red-500">*</span></label>
								<input type="text" placeholder="Murphy" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Email<span className="text-red-500">*</span></label>
								<input type="email" placeholder="e.g. yourname@email.com" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-xs text-zinc-300">Phone Number</label>
								<input type="tel" placeholder="e.g. +353 87 123 4567" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>

							<button type="button" className="mt-2 w-full rounded-md bg-zinc-200 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white">Apply Now</button>

							<label className="flex items-start gap-2 pt-1 text-xs leading-5 text-zinc-400">
								<input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-black" />
								<span>I agree to my details being shared with a third party finance provider.</span>
							</label>
							<label className="flex items-start gap-2 text-xs leading-5 text-zinc-400">
								<input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-black" />
								<span>I would like to receive updates and marketing communications from Indus Motor Group.</span>
							</label>

							<p className="pt-1 text-[11px] italic text-zinc-500">By submitting this form you agree to our Privacy Policy.</p>
						</form>

						<img
							src={applyFinanceImg}
							alt="Apply for finance"
							className="h-full min-h-[520px] w-full rounded-lg object-cover"
						/>
					</div>
				</section>

			<section className="grid gap-8 pt-12 lg:grid-cols-[320px_1fr] lg:gap-10">
				<h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">Finance FAQS</h2>
				<div className="border-y border-zinc-700">
						{faq.map((item, index) => {
							const isExpanded = Boolean(expandedFaqItems[index])

							return (
						<article key={item.question} className="border-b border-zinc-700 last:border-b-0">
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
					src={financeCtaImg}
					alt="Finance CTA"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10">
					<h2 className="max-w-[420px] text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Ready to Get Started With Finance?</h2>
					<button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Start Application</button>
				</div>
			</section>

			<footer className="mt-10 border-b border-zinc-700 bg-black">
				<div className="site-footer-shell">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy">
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
								<p className="text-zinc-500">Serving customers across Ireland</p>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-zinc-700 px-5 py-6 text-center md:px-8 md:py-8">
					<p className="site-footer-legal">
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
