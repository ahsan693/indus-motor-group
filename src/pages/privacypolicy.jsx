import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Home'
import privacyHeroImg from '../images/privacypolicyimages/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'

export default function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />

			<main className="motion-rise mx-auto w-full max-w-[760px] px-5 pb-16 pt-14 md:pb-24 md:pt-20">
				<section className="space-y-6">
					<h1 className="text-[36px] font-medium leading-tight text-white md:text-[56px]">Privacy Policy</h1>
					<p className="text-[14px] text-zinc-500 md:text-[16px]">
						Last updated: <span className="font-medium text-zinc-200">March 2026</span>
					</p>
					<div className="space-y-4">
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							This Privacy Policy explains how <span className="font-medium text-zinc-100">Indus Motors Limited</span>, trading as{' '}
							<span className="font-medium text-zinc-100">Indus Motor Group</span>, collects, uses, and protects your personal data
							when you visit or interact with{' '}
							<a className="text-sky-400 underline underline-offset-2 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
								www.indusmotorgroup.ie
							</a>
							.
						</p>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							We are committed to protecting your privacy and handling your personal data in accordance with applicable data
							protection laws, including the <span className="font-medium text-zinc-100">General Data Protection Regulation (GDPR)</span>.
						</p>
					</div>
				</section>

				<div className="mt-[80px] space-y-[80px] sm:mt-[100px] sm:space-y-[100px] md:mt-[120px] md:space-y-[120px]">
					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Who We Are</h2>
						<div className="space-y-2 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<p className="font-medium text-zinc-100">Indus Motors Limited</p>
							<p>Trading as <span className="font-medium text-zinc-100">Indus Motor Group</span></p>
							<p>Company Number: 790570</p>
							<p className="pt-1">Dublin, Ireland</p>
							<p className="pt-1">Email: hello@indusmotorgroup.ie</p>
							<p>Phone: +353 89 967 5410</p>
							<p>
								Website:{' '}
								<a className="text-sky-400 underline underline-offset-2 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
									www.indusmotorgroup.ie
								</a>
							</p>
						</div>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							Indus Motors Limited is the <span className="font-medium text-zinc-100">data controller</span> responsible for the processing
							of personal data collected through this website.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">What Personal Data We Collect</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We may collect and process the following types of personal data.</p>

						<div className="space-y-3">
							<h3 className="text-[20px] font-medium leading-tight text-white md:text-[24px]">Information You Provide</h3>
							<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">When you contact us or submit forms on our website, we may collect:</p>
							<ul className="list-disc space-y-1.5 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								<li>Name</li>
								<li>Email address</li>
								<li>Phone number</li>
								<li>Vehicle information submitted in enquiry forms</li>
								<li>Finance application information submitted through our website</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-[20px] font-medium leading-tight text-white md:text-[24px]">Automatically Collected Information</h3>
							<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								When you visit our website, certain technical data may be collected automatically through cookies and analytics
								tools, including:
							</p>
							<ul className="list-disc space-y-1.5 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								<li>IP address</li>
								<li>Browser type and device information</li>
								<li>Pages visited and website activity</li>
								<li>Referral source</li>
								<li>Date and time of visits</li>
							</ul>
						</div>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">How We Use Your Information</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We use your personal data for the following purposes.</p>

						<div className="space-y-4 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<p><span className="font-medium text-zinc-100">Responding to Enquiries</span><br />To respond to messages submitted through our contact forms or vehicle enquiry forms.</p>
							<p><span className="font-medium text-zinc-100">Vehicle Sales Enquiries</span><br />To communicate with you regarding vehicles you are interested in purchasing.</p>
							<p><span className="font-medium text-zinc-100">Finance Applications</span><br />If you submit a finance enquiry through our website, the information provided may be shared with third party finance providers to process your application and assess finance eligibility.</p>
							<p><span className="font-medium text-zinc-100">Website Improvement</span><br />To analyse website usage and improve our website performance and user experience.</p>
							<p><span className="font-medium text-zinc-100">Marketing and Advertising</span><br />To measure and improve marketing campaigns and advertising effectiveness.</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-[20px] font-medium leading-tight text-white md:text-[24px]">Finance Application Services</h3>
							<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								If you submit a finance enquiry through our website, your information may be securely transmitted to third party{' '}
								<span className="font-medium text-zinc-100">finance providers</span>, such as Vendor Finance Ireland, who will process
								the finance application.
							</p>
							<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								These providers may process your personal data according to their own privacy policies.
							</p>
						</div>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Legal Basis for Processing</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We process personal data under the following legal bases.</p>
						<div className="space-y-4 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<p><span className="font-medium text-zinc-100">Legitimate Interests</span><br />To operate and improve our website and respond to customer enquiries.</p>
							<p><span className="font-medium text-zinc-100">Consent</span><br />Where required, we rely on your consent for the use of certain cookies and marketing technologies.</p>
							<p><span className="font-medium text-zinc-100">Contractual Necessity</span><br />To process enquiries relating to vehicle purchases or finance applications.</p>
						</div>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Data Sharing</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We do not sell or rent your personal data.</p>
						<div className="space-y-3">
							<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">Your information may be shared with:</p>
							<ul className="list-disc space-y-1.5 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
								<li>Finance providers when you submit a finance application</li>
								<li>Website service providers and analytics platforms</li>
								<li>Legal authorities if required by law</li>
							</ul>
						</div>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							All third party partners are expected to process data in accordance with applicable data protection laws.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Data Retention</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							We only retain personal data for as long as necessary to fulfil the purposes for which it was collected, including:
						</p>
						<ul className="list-disc space-y-1.5 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<li>responding to enquiries</li>
							<li>managing customer relationships</li>
							<li>complying with legal obligations</li>
						</ul>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							Data submitted through finance enquiries may also be retained by the finance provider according to their own policies.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Your Rights Under GDPR</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">Under data protection law, you have the right to:</p>
						<ul className="list-disc space-y-1.5 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<li>Access your personal data</li>
							<li>Request correction of inaccurate data</li>
							<li>Request deletion of your data</li>
							<li>Restrict processing of your data</li>
							<li>Object to processing of your data</li>
							<li>Request transfer of your data (data portability)</li>
						</ul>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							To exercise any of these rights, please contact us using the details below.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Cookies</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							Our website uses cookies and similar technologies to improve functionality and analyse website traffic.
						</p>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							For more information, please see our{' '}
							<Link to="/cookie-policy" className="font-medium text-zinc-100 underline underline-offset-2 hover:text-white">
								Cookie Policy
							</Link>
							.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Data Security</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							We take appropriate technical and organisational measures to protect your personal data from unauthorised access,
							misuse, or disclosure.
						</p>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							However, no method of transmission over the internet can be guaranteed to be completely secure.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Third Party Links</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							Our website may contain links to third party websites. We are not responsible for the privacy practices of those
							external websites.
						</p>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							We encourage users to review the privacy policies of any external sites they visit.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Changes to This Privacy Policy</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices.
						</p>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							Any updates will be posted on this page with the updated revision date.
						</p>
					</section>

					<section className="space-y-6">
						<h2 className="text-[30px] font-medium leading-tight text-white md:text-[44px]">Contact Us</h2>
						<p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							If you have any questions about this Privacy Policy or how your data is handled, please contact us.
						</p>
						<div className="space-y-2 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
							<p className="font-medium text-zinc-100">Indus Motors Limited</p>
							<p>Trading as <span className="font-medium text-zinc-100">Indus Motor Group</span></p>
							<p className="pt-1">Dublin, Ireland</p>
							<p className="pt-1">Email: hello@indusmotorgroup.ie</p>
							<p>Phone: +353 89 967 5410</p>
							<p>
								Website:{' '}
								<a className="text-sky-400 underline underline-offset-2 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
									www.indusmotorgroup.ie
								</a>
							</p>
						</div>
					</section>
				</div>
			</main>

			<section className="relative mt-[80px] overflow-hidden sm:mt-[100px] md:mt-[150px]">
				<img
					src={privacyHeroImg}
					alt="Find your next car"
					loading="lazy"
					decoding="async"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10">
					<h2 className="text-[30px] font-medium text-white md:text-[44px]">Find Your Next Car Today</h2>
					<Link to="/cars" className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black md:text-[16px]">Browse Cars</Link>
				</div>
			</section>

			<footer className="bg-black">
				<div className="site-footer-shell text-zinc-300">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy">
								Quality used cars with transparent pricing, trusted warranty
								<br />
								options, and a straightforward buying experience.
							</p>

							<div className="mt-4 flex items-center gap-3 text-zinc-400">
								<a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2.5" y="2.5" width="19" height="19" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
									</svg>
								</a>
								<a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<rect x="3" y="3" width="18" height="18" rx="3" />
										<path d="M8 11v5" />
										<path d="M8 8h.01" />
										<path d="M12 16v-3c0-1.3.7-2 1.8-2s1.7.7 1.7 2v3" />
									</svg>
								</a>
								<a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
									<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2.5" y="6" width="19" height="12" rx="3" />
										<path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
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
								<Link to="/about" className="block transition-colors hover:text-zinc-300">About</Link>
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
								<Link to="/warranty" className="block transition-colors hover:text-zinc-300">Warranty</Link>
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

					<div className="mt-10 border-t border-zinc-800 pt-5 text-center">
						<p className="site-footer-legal">
							Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570.
							Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
						</p>
						<p className="mt-2 text-[13px] text-zinc-500 md:text-[14px]">
							<Link to="/privacy-policy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</Link>
							{' '}|{' '}
							<Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
							{' '}|{' '}
							<Link to="/terms-conditions" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</Link>
						</p>
						<p className="mt-2 text-[13px] text-zinc-600 md:text-[14px]">© 2026 Indus Motors Limited. All rights reserved.</p>
						<p className="mt-2 text-[13px] text-zinc-600 md:text-[14px]">
							Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
