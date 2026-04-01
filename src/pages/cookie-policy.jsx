import { Link } from 'react-router-dom'
import { Navbar } from './Home'

export default function CookiePolicy() {
	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />

			<main className="mx-auto w-full max-w-[760px] px-4 py-10 sm:px-5 md:px-8 md:py-16">
				<section className="space-y-6">
					<h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">Cookie Policy</h1>
					<p className="text-sm text-zinc-400">
						Last updated: <span className="font-medium text-zinc-200">March 2025</span>
					</p>

					<div className="space-y-5 text-sm leading-7 text-zinc-300">
						<p>
							This Cookie Policy explains how Indus Motors Limited, trading as <span className="font-medium text-zinc-100">Indus Motor Group</span>,
							uses cookies and similar technologies when you visit{' '}
							<a className="text-sky-400 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
								www.indusmotorgroup.ie
							</a>
							.
						</p>
						<p>
							By using our website, you agree to the use of cookies as described in this policy. You can manage or withdraw your
							consent at any time through the cookie banner displayed on the website.
						</p>
					</div>
				</section>

				<section className="mt-12 space-y-10 md:mt-14">
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-white sm:text-3xl">How We Use Cookies</h2>
						<p className="text-sm text-zinc-400">We use cookies for the following purposes.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Essential Cookies</h3>
						<p>
							These cookies are necessary for the website to function correctly. They enable core functionality such as page
							navigation, security, and access to certain areas of the website. The website cannot function properly without these
							cookies.
						</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Analytics Cookies</h3>
						<p>
							These cookies help us understand how visitors use our website. They allow us to analyse website traffic, identify
							popular pages, and improve the overall user experience.
						</p>
						<p>We use tools such as:</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>Google Analytics</li>
						</ul>
						<p>These tools collect anonymised information about how visitors interact with the website.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Marketing and Advertising Cookies</h3>
						<p>
							Marketing cookies help us deliver relevant advertisements and measure the effectiveness of marketing campaigns.
						</p>
						<p>
							These cookies may track your activity across websites and are used by advertising platforms such as:
						</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>Google Tag Manager</li>
							<li>Meta (Facebook) Pixel</li>
							<li>TikTok Pixel</li>
						</ul>
						<p>
							These services may use cookies to show relevant advertisements to users who have previously visited our website.
						</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">User Behaviour and Experience Tools</h3>
						<p>
							We may use tools that help us understand how users interact with the website in order to improve usability and
							performance.
						</p>
						<p>These tools may include:</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>Hotjar</li>
							<li>Microsoft Clarity</li>
						</ul>
						<p>These tools may collect anonymous usage information such as clicks, scrolling behaviour, and page interactions.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Third Party Services</h3>
						<p>Some cookies may be placed by third party services integrated into our website.</p>
						<p>
							For example, when users submit a finance application form, the information provided may be securely transmitted to
							Vendor Finance Ireland, who process finance applications on behalf of the dealership.
						</p>
						<p>
							These third parties may use their own cookies and process data according to their own privacy policies.
						</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Managing Cookies</h3>
						<p>
							When you visit our website, you will be presented with a cookie consent banner allowing you to:
						</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>Accept all cookies</li>
							<li>Reject non essential cookies</li>
							<li>Manage your cookie preferences</li>
						</ul>
						<p>You can also manage cookies through your browser settings. Most browsers allow you to:</p>
						<ul className="list-disc space-y-1 pl-6">
							<li>View stored cookies</li>
							<li>Delete cookies</li>
							<li>Block certain cookies</li>
							<li>Block all cookies</li>
						</ul>
						<p>
							Please note that disabling some cookies may affect the functionality and performance of the website.
						</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Changes to This Cookie Policy</h3>
						<p>
							We may update this Cookie Policy from time to time to reflect changes in legal requirements, technologies, or website
							functionality.
						</p>
						<p>Any updates will be published on this page with the updated revision date.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-xl font-medium text-white">Contact Information</h3>
						<p>
							If you have any questions about this Cookie Policy or how your data is handled, you can contact us.
						</p>
						<div className="space-y-1">
							<p>Indus Motors Limited</p>
							<p>Trading as <span className="font-medium text-zinc-100">Indus Motor Group</span></p>
							<p>Company Number: 790570</p>
							<p>Dublin, Ireland</p>
							<p>Email: hello@indusmotorgroup.ie</p>
							<p>Phone: +353 89 967 5410</p>
							<p>
								Website:{' '}
								<a className="text-sky-400 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
									www.indusmotorgroup.ie
								</a>
							</p>
						</div>
					</div>
				</section>

				<div className="mt-16 border-t border-zinc-800 pt-6">
					<Link to="/" className="text-sm text-zinc-400 hover:text-white">
						← Back to Home
					</Link>
				</div>
			</main>
		</div>
	)
}
