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
		details: 'An application simply lets a finance provider review your situation and share options.',
	},
	{
		question: 'Will applying affect my credit score?',
		answer: 'This depends on the finance provider, but any checks will be explained before proceeding.',
		details: 'Some providers may perform a soft eligibility check first.',
	},
	{
		question: 'Do I need a deposit?',
		answer: 'Some finance providers may require a deposit, depending on the agreement.',
		details: 'Deposit requirements can vary based on vehicle price and lender criteria.',
	},
	{
		question: 'How long does approval take?',
		answer: 'Applications are typically reviewed within a short time after submission.',
		details: 'Timings can vary by lender and application volume.',
	},
	{
		question: 'Can I apply if I have not chosen a car yet?',
		answer: 'Yes, you can apply and discuss suitable options with a finance provider.',
		details: 'You can share your budget and vehicle type first, then finalize your choice later.',
	},
	{
		question: 'Is finance available across Ireland?',
		answer: 'Yes, finance options are available to customers across Ireland.',
		details: 'Finance providers can support applicants nationwide.',
	},
]

const MONTHLY_BUDGET_OPTIONS = ['Under €200', '€200 - €300', '€300 - €400', '€400 - €500', 'Over €500']

const INITIAL_FORM_STATE = {
	vehicleMake: '',
	model: '',
	year: '',
	monthlyBudget: '',
	salePrice: '',
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	consentShareWithProvider: false,
	consentMarketing: false,
}

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
const [openFaq, setOpenFaq] = useState(null)
	const [formValues, setFormValues] = useState(INITIAL_FORM_STATE)
	const [submitState, setSubmitState] = useState({ submitting: false, error: '', success: '' })



	const handleFormChange = (event) => {
		const { name, value, type, checked } = event.target
		setFormValues((previous) => ({
			...previous,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleFinanceSubmit = async (event) => {
		event.preventDefault()
		setSubmitState({ submitting: true, error: '', success: '' })

		try {
			if (!formValues.salePrice || !formValues.firstName || !formValues.lastName || !formValues.email) {
				throw new Error('Please fill in all required fields marked with *.')
			}

			if (!formValues.consentShareWithProvider) {
				throw new Error('Please agree to share your details with a finance provider before applying.')
			}

			const response = await fetch('/api/finance-application', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formValues),
			})

			const payload = await response.json()
			if (!response.ok) {
				throw new Error(payload?.error || payload?.message || 'Failed to submit application')
			}

			setFormValues(INITIAL_FORM_STATE)
			setSubmitState({
				submitting: false,
				error: '',
				success: 'Application submitted. A finance provider will contact you soon.',
			})
		} catch (error) {
			setSubmitState({
				submitting: false,
				error: error.message || 'Could not submit your application. Please try again.',
				success: '',
			})
		}
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
				<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden h-[460px] sm:h-[560px] md:h-screen iphone:h-[220px]">
				<img
					src={financeHeroImg}
					alt="Finance hero"
					loading="eager"
					fetchPriority="high"
					decoding="async"
					className="hero-zoom-settle -mb-px block h-[460px] w-full object-cover object-center sm:h-[560px] md:mb-0 md:h-screen iphone:h-[220px]"
				/>
				<div className="absolute inset-0 bg-black/8"></div>
				<div className="absolute inset-x-0 bottom-0 h-[155px] bg-gradient-to-t from-black/75 via-black/45 to-transparent"></div>
				<Navbar overlay />

				<div className="hero-content-rise hero-mobile-shell absolute inset-x-0 bottom-6 md:bottom-12 hero-shell pb-7 min-[390px]:pb-8 sm:pb-12 md:pb-25 iphone:pb-2">
					<h1 className="hero-heading-mobile text-[22px] font-normal text-white min-[390px]:text-[26px] sm:text-[28px] md:text-[38px] iphone:text-[14px]">Car Finance Made Simple</h1>
				</div>
			</section>

			<main className="layout-shell finance-stack iphone:pt-4">
				<section className="motion-rise grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10 iphone:gap-2">
					<div className="space-y-6 iphone:space-y-2">
						<h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[16px]">Finance Your Next Car</h2>
						<p className="max-w-[430px] text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[13px]">
							We offer flexible finance options through trusted third party lenders. Apply online and we will connect you with a provider to discuss the best option for your needs.
						</p>
						<p className="max-w-[430px] text-[14px] leading-6 text-zinc-500 md:text-[16px] iphone:text-[14px]">
							Finance is provided by third party lenders. Indus Motor Group does not act as a lender or provide financial advice.
						</p>
						<div className="flex flex-wrap items-center gap-4 iphone:gap-1">
							<a href="#finance-application-form" className="ui-btn rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black transition-colors hover:bg-zinc-200 iphone:text-[14px] iphone:px-3 iphone:py-2">Apply for Finance</a>
							<Link to="/cars" className="ui-btn rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black transition-colors hover:bg-zinc-200 iphone:text-[14px] iphone:px-3 iphone:py-2">Browse Cars &rarr;</Link>
						</div>
					</div>

					<img
						src={financeIntroImg}
						alt="Luxury car in a tunnel"
						loading="lazy"
						decoding="async"
						className="motion-card h-[300px] w-full rounded-lg border border-zinc-800 object-cover sm:h-[360px] md:h-[430px] iphone:h-[140px]"
					/>
				</section>

			<section className="motion-rise motion-rise-delay-1 iphone:mt-4">
					<div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
						<div className="space-y-5 iphone:space-y-2">
							<p className="text-[12px] text-zinc-500 md:text-[14px] iphone:text-[14px]">- Finance Benefits</p>
							<h2 className="max-w-[280px] text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[16px]">Finance Options Available</h2>
						</div>

						<div className="grid gap-2 sm:grid-cols-2 md:gap-3 iphone:gap-1">
							{benefits.map((item) => (
								<article key={item.title} className="group motion-card rounded-lg bg-zinc-950 p-5 iphone:p-2">
									<span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-300">
										<BenefitIcon type={item.icon} />
									</span>
									<h3 className="motion-link-slide text-[16px] font-normal text-white md:text-[18px] iphone:text-[13px]">{item.title}</h3>
									<p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">{item.body}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="motion-rise motion-rise-delay-2 iphone:mt-4">
					<p className="text-[12px] text-zinc-500 md:text-[14px] iphone:text-[14px]">- Process</p>
					<h2 className="mt-2 text-[22px] font-normal text-white md:text-[30px] iphone:text-[16px]">How Finance Works</h2>

					<div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-3 iphone:gap-1 iphone:mt-4">
						{processSteps.map((item) => (
							<article key={item.title} className="group motion-card space-y-3 iphone:space-y-1">
								<div className="overflow-hidden rounded-xl border border-zinc-700">
									<img src={item.image} alt={item.title} loading="lazy" decoding="async" className="motion-media h-56 w-full object-cover iphone:h-[140px]" />
								</div>
								<p className="text-[12px] text-zinc-500 md:text-[14px] iphone:text-[14px]">({item.step})</p>
								<h3 className="motion-link-slide text-[16px] font-normal text-white md:text-[18px] iphone:text-[13px]">{item.title}</h3>
								<p className="text-[16px] text-zinc-400 md:text-[18px] iphone:text-[13px]">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				<section id="finance-application-form" className="motion-rise scroll-mt-24 space-y-7 md:scroll-mt-28 iphone:mt-4 iphone:space-y-2">
					<p className="text-center text-[12px] text-zinc-500 md:text-[14px] iphone:text-[14px]">- Finance Application</p>
					<h2 className="text-center text-[22px] font-normal text-white md:text-[30px] iphone:text-[16px]">Apply for Finance</h2>
					<p className="text-center text-[16px] text-zinc-400 md:text-[18px] iphone:text-[13px]">Complete the short form below and a finance provider will contact you to discuss your application.</p>

					<div className="grid items-stretch gap-3 lg:grid-cols-[1fr_1.05fr] lg:gap-4 iphone:gap-1">
						<form onSubmit={handleFinanceSubmit} className="space-y-3 rounded-lg border border-zinc-700 bg-black p-3 sm:p-4 md:p-5 iphone:space-y-2 iphone:p-2">
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Vehicle Make</label>
								<input name="vehicleMake" value={formValues.vehicleMake} onChange={handleFormChange} type="text" placeholder="e.g. Volkswagen" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Model</label>
								<input name="model" value={formValues.model} onChange={handleFormChange} type="text" placeholder="e.g. Golf" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Year</label>
								<input name="year" value={formValues.year} onChange={handleFormChange} type="text" placeholder="e.g. 2019" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Monthly Budget</label>
								<select name="monthlyBudget" value={formValues.monthlyBudget} onChange={handleFormChange} className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none">
									<option value="" disabled>Select your budget</option>
									{MONTHLY_BUDGET_OPTIONS.map((option) => (
										<option key={option} value={option}>{option}</option>
									))}
								</select>
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Sale Price<span className="text-red-500">*</span></label>
								<input name="salePrice" value={formValues.salePrice} onChange={handleFormChange} type="text" required placeholder="e.g. EUR 18950" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Your First Name<span className="text-red-500">*</span></label>
								<input name="firstName" value={formValues.firstName} onChange={handleFormChange} type="text" required placeholder="e.g. John" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Last Name<span className="text-red-500">*</span></label>
								<input name="lastName" value={formValues.lastName} onChange={handleFormChange} type="text" required placeholder="Murphy" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Email<span className="text-red-500">*</span></label>
								<input name="email" value={formValues.email} onChange={handleFormChange} type="email" required placeholder="e.g. yourname@email.com" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>
							<div className="space-y-1.5">
								<label className="text-[14px] text-zinc-300 md:text-[16px] iphone:text-[13px]">Phone Number</label>
								<input name="phoneNumber" value={formValues.phoneNumber} onChange={handleFormChange} type="tel" placeholder="e.g. +353 87 123 4567" className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-[16px] text-zinc-100 outline-none placeholder:text-zinc-500" />
							</div>

							<button disabled={submitState.submitting} type="submit" className="mt-2 w-full rounded-md bg-zinc-200 py-2.5 text-[16px] font-medium text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 iphone:text-[14px]">{submitState.submitting ? 'Submitting...' : 'Apply Now'}</button>

							{submitState.error && (
								<p className="text-[14px] text-red-400 md:text-[15px]">{submitState.error}</p>
							)}
							{submitState.success && (
								<p className="text-[14px] text-emerald-400 md:text-[15px]">{submitState.success}</p>
							)}

							<label className="flex items-start gap-2 pt-1 text-[14px] leading-5 text-zinc-400 md:text-[16px] iphone:text-[14px]">
								<input name="consentShareWithProvider" checked={formValues.consentShareWithProvider} onChange={handleFormChange} required type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-black" />
								<span>I agree to my details being shared with a third party finance provider.</span>
							</label>
							<label className="flex items-start gap-2 text-[14px] leading-5 text-zinc-400 md:text-[16px] iphone:text-[14px]">
								<input name="consentMarketing" checked={formValues.consentMarketing} onChange={handleFormChange} type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-black" />
								<span>I would like to receive updates and marketing communications from Indus Motor Group.</span>
							</label>

							<p className="pt-1 text-[13px] italic text-zinc-500 md:text-[14px] iphone:text-[14px]">By submitting this form you agree to our Privacy Policy.</p>
						</form>

						<img
							src={applyFinanceImg}
							alt="Apply for finance"
							loading="lazy"
							decoding="async"
							className="motion-card h-full min-h-[280px] w-full rounded-lg object-cover min-[390px]:min-h-[340px] sm:min-h-[420px] md:min-h-[520px] iphone:min-h-[90px]"
						/>
					</div>
				</section>

			<section className="motion-rise grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-10 iphone:gap-2 iphone:mt-4">
				<h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[16px]">Finance FAQS</h2>
				<div>
					{faq.map((item, idx) => {
						const open = openFaq === idx
						return (
							<div key={item.question} className={
								[
									idx !== 0 ? 'border-t border-zinc-700' : '',
									'transition-colors hover:bg-zinc-950/40'
								].join(' ')
							}>
								<button
									className="flex w-full items-start justify-between gap-3 py-4 text-left focus:outline-none iphone:py-2"
									onClick={() => setOpenFaq(open ? null : idx)}
									aria-expanded={open}
									aria-controls={`faq-answer-${idx}`}
									type="button"
								>
									<span className="text-[16px] font-normal leading-6 text-zinc-100 md:text-[18px] iphone:text-[13px]">{item.question}</span>
									<span className="mt-0.5 text-2xl leading-none text-zinc-300">{open ? '-' : '+'}</span>
								</button>
								{open && (
									<div id={`faq-answer-${idx}`} className="pr-8 pb-4 iphone:pb-2">
										<p className="text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">{item.details}</p>
									</div>
								)}
							</div>
						)
					})}
				</div>
			</section>
			</main>

			<section className="relative mx-auto h-[320px] w-full max-w-[1440px] overflow-hidden sm:h-[420px] md:h-[600px] iphone:h-[180px] iphone:mt-4">
				<img
					src={financeCtaImg}
					alt="Finance CTA"
					loading="lazy"
					decoding="async"
					className="h-full w-full object-cover object-center iphone:h-[180px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="hero-content-rise absolute inset-x-0 top-0 hero-shell pt-6 sm:pt-8 md:pt-10 iphone:pt-2">
					<h2 className="max-w-[420px] text-[22px] font-normal text-white md:text-[30px] iphone:text-[16px]">Ready to Get Started With Finance?</h2>
										<a
											href="#finance-application-form"
											className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black iphone:text-[14px] iphone:px-3 iphone:py-2 iphone:w-auto iphone:min-w-0 iphone:ml-0"
											style={{ justifyContent: 'flex-start' }}
										>
											Start Application
										</a>
				</div>
			</section>

			<footer className="mt-10 border-b border-zinc-700 bg-black iphone:mt-4">
				<div className="site-footer-shell text-white iphone:text-[14px]">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy text-[13px] leading-tight md:text-[14px] font-normal iphone:text-[14px] iphone:leading-4">
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
								<Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
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

				<div className="border-t border-zinc-700 px-5 py-6 text-center md:px-8 md:py-8">
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

