import { Link } from 'react-router-dom'
import { Navbar } from './Home'

const keyFeatures = [
	{
		title: 'Nationwide Cover',
		body: 'Access a nationwide repair network.',
	},
	{
		title: 'Parts & Labour Cover',
		body: 'Includes key mechanical and electrical components.',
	},
	{
		title: 'Up to 24 Months Cover',
		body: 'Warranty available for up to two years.',
	},
	{
		title: 'Warranty available for up to two years.',
		body: '24/7 assistance available with selected plans.',
	},
]

const steps = [
	{
		step: 'Step 01',
		title: 'Choose Your Car',
		body: 'Browse our available cars and select the one that suits you.',
		image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		step: 'Step 02',
		title: 'Select Your Warranty Option',
		body: 'Our team will explain the available warranty plans.',
		image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
	{
		step: 'Step 03',
		title: 'Drive Away With Confidence',
		body: 'Your warranty begins from the point of purchase.',
		image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1400',
	},
]

const faq = [
	['Do all cars come with warranty?', 'Warranty options are available on all vehicles and can be added at the point of purchase.'],
	['How long can the warranty last?', 'Warranty coverage may be available for up to two years depending on the selected plan.'],
	['What does the warranty cover?', 'Warranty options are available on all vehicles and can be added at the point of purchase.'],
	['Is warranty included in the vehicle price?', 'Warranty is optional and can be added at the point of sale.'],
]

export default function Warranty() {
	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<section className="relative overflow-hidden border border-zinc-800">
				<img
					src="https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=2200"
					alt="Warranty hero"
					className="h-[360px] w-full object-cover sm:h-[430px] md:h-[500px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black"></div>
				<Navbar overlay />

				<div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1240px] px-5 pb-7 md:px-8 md:pb-10">
					<h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl">Warranty & Aftercare</h1>
				</div>
			</section>

			<main className="mx-auto max-w-[1240px] space-y-16 px-5 py-12 md:space-y-24 md:px-8 md:py-20">
				<section className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
					<img
						src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="Warranty intro"
						className="h-72 w-full rounded-xl border border-zinc-800 object-cover"
					/>

					<div className="space-y-5">
						<h2 className="text-2xl font-semibold text-white sm:text-4xl md:text-5xl">Vehicle Warranty for Added Peace of Mind</h2>
						<p className="text-sm leading-7 text-zinc-300">
							All vehicles at Indus Motor Group can be supplied with warranty options for added peace of mind. We work with trusted
							third party providers to offer warranty protection at the point of sale.
						</p>
						<p className="text-sm leading-7 text-zinc-300">
							Coverage is designed to help protect against unexpected repair costs and may be available for up to 24 months,
							depending on the vehicle and selected plan.
						</p>
						<button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">Ask About Warranty</button>
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
					<div className="space-y-6">
						<h2 className="text-2xl font-semibold text-white sm:text-4xl">Key Features</h2>
						<div className="grid gap-4 sm:grid-cols-2">
							{keyFeatures.map((item) => (
								<article key={item.title} className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
									<p className="text-sm font-medium text-white">{item.title}</p>
									<p className="text-xs leading-6 text-zinc-400">{item.body}</p>
								</article>
							))}
						</div>
					</div>

					<img
						src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="Key features"
						className="h-72 w-full rounded-xl border border-zinc-800 object-cover sm:h-[360px]"
					/>
				</section>

				<section className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
					<img
						src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="Warranty options"
						className="h-72 w-full rounded-xl border border-zinc-800 object-cover"
					/>

					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-white sm:text-4xl md:text-5xl">Warranty Options Available</h2>
						<p className="text-sm leading-7 text-zinc-300">
							Warranty options are available through trusted third party providers, with different levels of cover to suit your needs.
						</p>
						<p className="text-sm leading-7 text-zinc-300">
							Plans may include parts and labour cover, nationwide repair access, and additional benefits depending on the selected option.
						</p>
						<p className="text-sm leading-7 text-zinc-300">
							Warranty can be arranged at the point of purchase, with options available for up to 24 months.
						</p>
						<p className="text-xs text-zinc-500">Warranty details and providers vary by vehicle and selected plan. Subject to terms and conditions.</p>
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
					<div className="space-y-5">
						<h2 className="text-2xl font-semibold text-white sm:text-4xl">Important Information</h2>
						<p className="text-sm leading-7 text-zinc-300">
							When purchasing a vehicle from Indus Motor Group, customers can choose to add warranty protection provided by trusted third-party warranty providers.
						</p>
						<p className="text-sm leading-7 text-zinc-300">
							Warranty coverage may be available for up to two years, depending on the vehicle and selected plan.
						</p>
						<p className="text-sm leading-7 text-zinc-300">
							These warranty options are designed to help cover certain mechanical and electrical components, providing additional reassurance after purchase.
						</p>
					</div>

					<img
						src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="Important information"
						className="h-72 w-full rounded-xl border border-zinc-800 object-cover sm:h-[360px]"
					/>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white sm:text-4xl">How It Works</h2>
					<div className="grid gap-4 md:grid-cols-3">
						{steps.map((item) => (
							<article key={item.title} className="space-y-3">
								<img src={item.image} alt={item.title} className="h-56 w-full rounded-xl border border-zinc-800 object-cover" />
								<p className="text-xs text-zinc-500">({item.step})</p>
								<h3 className="text-lg font-medium text-white">{item.title}</h3>
								<p className="text-sm text-zinc-400">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[360px_1fr]">
					<h2 className="text-3xl font-semibold text-white sm:text-4xl">Warranty FAQS</h2>
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

				<section className="rounded-2xl border border-zinc-800 bg-zinc-950 py-14 text-center">
					<h2 className="text-3xl font-semibold text-white sm:text-5xl">Drive Away With Confidence</h2>
					<p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400">
						Warranty options are available on all vehicles to help protect your purchase.
					</p>
					<button className="mt-7 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Ask About Warranty</button>
				</section>
			</main>

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
						<Link to="/cookie-policy" className="block">Cookie Policy</Link>
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
