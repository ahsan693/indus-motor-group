import { Link } from 'react-router-dom'
import { Navbar } from './Home'

const processSteps = [
	{
		step: 'Step 01',
		title: 'Choose Your Car',
		body: 'Browse our available vehicles and find the car that suits your needs.',
		image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		step: 'Step 02',
		title: 'Apply for Finance',
		body: 'Complete a quick finance application form online.',
		image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		step: 'Step 03',
		title: 'Speak With a Finance Specialist',
		body: 'A finance provider will contact you to discuss your application and available options.',
		image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1800',
	},
]

const benefits = [
	{
		title: 'Flexible Payment Plans',
		body: 'Finance options are designed to suit different budgets and needs.',
	},
	{
		title: 'Quick Application Process',
		body: 'Simple application process with fast response times.',
	},
	{
		title: 'Trusted Third Party Lenders',
		body: 'Finance is arranged through trusted third party providers.',
	},
	{
		title: 'Available Across Ireland',
		body: 'Finance options available to customers across Ireland.',
	},
]

const faq = [
	['Is there any obligation to apply?', 'No, submitting an application does not commit you to any finance agreement.'],
	['Will applying affect my credit score?', 'This depends on the finance provider, but any checks will be explained before proceeding.'],
	['Do I need a deposit?', 'Some finance providers may require a deposit, depending on the agreement.'],
	['How long does approval take?', 'Applications are typically reviewed within a short time after submission.'],
	['Can I apply if I have not chosen a car yet?', 'Yes, you can apply and discuss suitable options with a finance provider.'],
	['Is finance available across Ireland?', 'Yes, finance options are available to customers across Ireland.'],
]

export default function Finance() {
	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<section className="relative overflow-hidden border border-zinc-800">
				<img
					src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=2200"
					alt="Finance hero"
					className="h-[420px] w-full object-cover sm:h-[500px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black"></div>
				<Navbar overlay />

				<div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1240px] px-5 pb-10 md:px-8 md:pb-12">
					<h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl">Car Finance Made Simple</h1>
				</div>
			</section>

			<main className="mx-auto max-w-[1240px] space-y-16 px-5 py-12 md:space-y-24 md:px-8 md:py-20">
				<section className="grid items-center gap-8 lg:grid-cols-2">
					<div className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
						<h2 className="text-2xl font-semibold text-white sm:text-4xl">Finance Your Next Car</h2>
						<p className="text-sm leading-7 text-zinc-300">
							We offer flexible finance options through trusted third party lenders. Apply online and we will connect you with a
							provider to discuss the best option for your needs.
						</p>
						<p className="text-xs text-zinc-500">
							Finance is provided by third-party lenders. Indus Motor Group does not act as lender or provide financial advice.
						</p>
						<div className="flex items-center gap-3">
							<button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">Apply for Finance</button>
							<Link to="/cars" className="text-sm text-zinc-200">Browse Cars →</Link>
						</div>
					</div>

					<img
						src="https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1800"
						alt="Finance intro car"
						className="h-[280px] w-full rounded-2xl border border-zinc-800 object-cover sm:h-[360px] lg:h-[420px]"
					/>
				</section>

				<section className="space-y-6">
					<p className="text-xs text-zinc-500">- Process</p>
					<h2 className="text-2xl font-semibold text-white sm:text-4xl md:text-5xl">How Finance Works</h2>

					<div className="grid gap-4 md:grid-cols-3">
						{processSteps.map((item) => (
							<article key={item.title} className="space-y-3">
								<img src={item.image} alt={item.title} className="h-56 w-full rounded-xl border border-zinc-800 object-cover" />
								<p className="text-xs text-zinc-500">({item.step})</p>
								<h3 className="text-lg font-medium text-white">{item.title}</h3>
								<p className="text-sm text-zinc-400">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
					<div className="space-y-6">
						<p className="text-xs text-zinc-500">- Finance Benefits</p>
						<h2 className="text-2xl font-semibold text-white sm:text-4xl md:text-5xl">Finance Options Available</h2>
						<div className="grid gap-3 sm:grid-cols-2">
							{benefits.map((item) => (
								<article key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
									<h3 className="text-sm font-medium text-white">{item.title}</h3>
									<p className="mt-2 text-xs leading-6 text-zinc-400">{item.body}</p>
								</article>
							))}
						</div>
					</div>

					<img
						src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1800"
						alt="Finance benefits"
						className="h-72 w-full rounded-2xl border border-zinc-800 object-cover sm:h-[380px]"
					/>
				</section>

				<section className="space-y-7">
					<p className="text-center text-xs text-zinc-500">- Finance Application</p>
					<h2 className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Apply for Finance</h2>
					<p className="text-center text-sm text-zinc-400">Complete the short form below and a finance provider will contact you.</p>

					<div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
						<form className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5">
							{['Vehicle Make', 'Model', 'Year', 'Sale Price', 'Your First Name', 'Last Name', 'Email', 'Phone Number'].map((field) => (
								<div key={field} className="space-y-1.5">
									<label className="text-xs text-zinc-400">{field}</label>
									<input
										type="text"
										placeholder={field === 'Year' ? 'e.g. 2019' : `e.g. ${field}`}
										className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
									/>
								</div>
							))}

							<button type="button" className="mt-2 w-full rounded-md bg-white py-2.5 text-sm font-medium text-black">Submit Application</button>
							<label className="flex items-center gap-2 pt-2 text-xs text-zinc-500"><input type="checkbox" />By submitting, you agree to our Privacy Policy.</label>
							<label className="flex items-center gap-2 text-xs text-zinc-500"><input type="checkbox" />By submitting, you agree to our Terms & Conditions.</label>
						</form>

						<img
							src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1800"
							alt="Finance application"
							className="h-[420px] w-full rounded-xl border border-zinc-800 object-cover sm:h-[520px]"
						/>
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[360px_1fr]">
					<h2 className="text-3xl font-semibold text-white sm:text-4xl">Finance FAQS</h2>
					<div className="space-y-4">
						{faq.map(([question, answer]) => (
							<div key={question} className="border-b border-zinc-800 pb-4">
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-sm font-medium text-white sm:text-base">{question}</h3>
									<span className="text-lg text-zinc-300">+</span>
								</div>
								<p className="mt-2 text-xs leading-6 text-zinc-400 sm:text-sm">{answer}</p>
							</div>
						))}
					</div>
				</section>
			</main>

			<section className="relative mt-6 overflow-hidden border-y border-zinc-800">
				<img
					src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2200&q=80"
					alt="Finance CTA"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-5 pt-8 md:px-8 md:pt-10">
					<h2 className="max-w-[420px] text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Ready to Get Started With Finance?</h2>
					<button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Start Application</button>
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
						<Link to="/warranty" className="block">Warranty</Link>
						<Link to="/finance" className="block">Finance</Link>
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
