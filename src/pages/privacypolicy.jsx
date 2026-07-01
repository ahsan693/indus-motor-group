import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar, Footer } from './Home' 
import privacyHeroImg from '../images/privacypolicyimages/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-black text-zinc-300">
            <Navbar />

            {/* REFACTORED FOR PERFECT 99PX / 150PX GAPS */}
            <main className="motion-rise mx-auto w-full max-w-[760px] px-5 iphone:px-2 flex flex-col pt-[99px] md:pt-[150px] gap-[99px] md:gap-[150px]">
                
                <section className="space-y-6">
                    <h1 className="text-[26px] font-normal leading-tight text-white min-[390px]:text-[30px] sm:text-[34px] md:text-[66px] iphone:text-[56px] iphone:leading-[0.95] iphone:mt-6 iphone:mb-3 iphone:text-center">Privacy Policy</h1>
                    <p className="text-[14px] text-zinc-500 md:text-[16px] iphone:text-[15px] iphone:mt-3 iphone:text-center">
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

                <section className="space-y-6">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Who We Are</h2>
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
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">What Personal Data We Collect</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We may collect and process the following types of personal data.</p>

                    <div className="space-y-3">
                        <h3 className="text-[18px] font-normal leading-tight text-white md:text-[22px]">Information You Provide</h3>
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
                        <h3 className="text-[18px] font-normal leading-tight text-white md:text-[22px]">Automatically Collected Information</h3>
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
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">How We Use Your Information</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We use your personal data for the following purposes.</p>

                    <div className="space-y-4 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p><span className="font-medium text-zinc-100">Responding to Enquiries</span><br />To respond to messages submitted through our contact forms or vehicle enquiry forms.</p>
                        <p><span className="font-medium text-zinc-100">Vehicle Sales Enquiries</span><br />To communicate with you regarding vehicles you are interested in purchasing.</p>
                        <p><span className="font-medium text-zinc-100">Finance Applications</span><br />If you submit a finance enquiry through our website, the information provided may be shared with third party finance providers to process your application and assess finance eligibility.</p>
                        <p><span className="font-medium text-zinc-100">Website Improvement</span><br />To analyse website usage and improve our website performance and user experience.</p>
                        <p><span className="font-medium text-zinc-100">Marketing and Advertising</span><br />To measure and improve marketing campaigns and advertising effectiveness.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[18px] font-normal leading-tight text-white md:text-[22px]">Finance Application Services</h3>
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
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Legal Basis for Processing</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We process personal data under the following legal bases.</p>
                    <div className="space-y-4 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p><span className="font-medium text-zinc-100">Legitimate Interests</span><br />To operate and improve our website and respond to customer enquiries.</p>
                        <p><span className="font-medium text-zinc-100">Consent</span><br />Where required, we rely on your consent for the use of certain cookies and marketing technologies.</p>
                        <p><span className="font-medium text-zinc-100">Contractual Necessity</span><br />To process enquiries relating to vehicle purchases or finance applications.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Data Sharing</h2>
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
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Data Retention</h2>
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
                    <div className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                            We encourage users to review the privacy policies of any external sites they visit.
                        </p>
                    </div>
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
            </main>

    {/* ── Find Your Car CTA ── */}
<section className="relative mx-auto mt-[99px] md:mt-[150px] h-[320px] w-full max-w-[1440px] sm:h-[420px] md:h-[600px] iphone:h-[200px]">
    <img
        src={privacyHeroImg}
        alt="Find your next car"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center iphone:h-[200px]"
    />
    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent"></div>
    <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-48 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10 iphone:pt-6">
        <h2 className="text-[30px] font-medium text-white md:text-[44px] iphone:text-[22px]">Find Your Next Car Today</h2>
        <Link to="/cars" className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black md:text-[16px] iphone:text-[14px] iphone:px-4 iphone:py-2">Browse Cars</Link>
    </div>
</section>

            {/* ── Footer ── */}
   <Footer />
        </div>
    )
}