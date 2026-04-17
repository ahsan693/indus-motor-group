import { Link } from 'react-router-dom'
import { Navbar } from './Home'

export default function CookiePolicy() {
	return (
		<div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
			<Navbar />

			<main className="motion-rise mx-auto w-full max-w-[760px] px-4 py-10 sm:px-5 md:px-8 md:py-16 iphone:px-2 iphone:py-5 iphone:pt-[120px]">
				<section className="motion-rise space-y-6">
					<h1 className="text-[26px] font-normal leading-tight text-white min-[390px]:text-[30px] sm:text-[34px] md:text-[66px] iphone:text-[56px] iphone:leading-[0.95] iphone:mt-6 iphone:mb-3 iphone:text-center">Cookie Policy</h1>
					<p className="text-sm text-zinc-400 iphone:text-[15px] iphone:mt-3 iphone:text-center">
						Last updated: <span className="font-medium text-zinc-200">March 2025</span>
					</p>

					<div className="space-y-5 text-sm leading-7 text-zinc-300 iphone:text-[14px] iphone:leading-5">
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

				<section className="motion-rise motion-rise-delay-1 mt-12 space-y-10 md:mt-14 iphone:mt-5">
					<div className="space-y-4">
						<h2 className="text-[30px] font-normal text-white md:text-[44px] iphone:text-[16px]">How We Use Cookies</h2>
						<p className="text-sm text-zinc-400 iphone:text-[13px]">We use cookies for the following purposes.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300 iphone:text-[14px] iphone:leading-5">
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Essential Cookies</h3>
						<p>
							These cookies are necessary for the website to function correctly. They enable core functionality such as page
							navigation, security, and access to certain areas of the website. The website cannot function properly without these
							cookies.
						</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Analytics Cookies</h3>
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
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Marketing and Advertising Cookies</h3>
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
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">User Behaviour and Experience Tools</h3>
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
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Third Party Services</h3>
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
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Managing Cookies</h3>
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
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Changes to This Cookie Policy</h3>
						<p>
							We may update this Cookie Policy from time to time to reflect changes in legal requirements, technologies, or website
							functionality.
						</p>
						<p>Any updates will be published on this page with the updated revision date.</p>
					</div>

					<div className="space-y-3 text-sm leading-7 text-zinc-300">
						<h3 className="text-[18px] font-normal text-white md:text-[22px]">Contact Information</h3>
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
					<Link to="/" className="ui-btn rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black transition-colors hover:bg-zinc-200">
						← Back to Home
					</Link>
				</div>
			</main>
		</div>
	)
}

