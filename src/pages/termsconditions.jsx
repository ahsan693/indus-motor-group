
import { Link } from 'react-router-dom'
import { Navbar, Footer } from './Home' 
import termsCtaImg from '../images/privacypolicyimages/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'

export default function TermsConditions() {


    return (
        <div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
            <Navbar />

            {/* REFACTORED FOR PERFECT 99PX / 150PX GAPS */}
            <main className="motion-rise mx-auto w-full max-w-[760px] px-5 flex flex-col pt-[99px] md:pt-[150px] gap-[99px] md:gap-[150px] iphone:px-2">
                <section className="space-y-6">
                    <h1 className="text-[26px] font-normal leading-tight text-white min-[390px]:text-[30px] sm:text-[34px] md:text-[66px] iphone:text-[56px] iphone:leading-[0.95] iphone:mt-6 iphone:mb-3 iphone:text-center">Terms &amp; Conditions</h1>
                    <p className="text-[14px] text-zinc-500 md:text-[16px] iphone:text-[15px] iphone:mt-3 iphone:text-center">
                        Last updated: <span className="font-medium text-zinc-200">March 2026</span>
                    </p>

                    <div className="space-y-4 text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[14px] iphone:leading-5">
                        <p>
                            These Terms &amp; Conditions govern the use of the website{' '}
                            <a className="text-sky-400 underline underline-offset-2 hover:text-sky-300" href="https://www.indusmotorgroup.ie" target="_blank" rel="noreferrer">
                                www.indusmotorgroup.ie
                            </a>
                            , operated by Indus Motors Limited, trading as Indus Motor Group.
                        </p>
                        <p>
                            By accessing or using this website, you agree to comply with these Terms &amp; Conditions. If you do not agree with any part of these terms, you should not use this website.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px] iphone:text-[16px]">Website Owner</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[14px] iphone:leading-5">This website is operated by:</p>
                    <div className="space-y-1 text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[14px] iphone:leading-5">
                        <p>Indus Motors Limited</p>
                        <p>Trading as Indus Motor Group</p>
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
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Website Use</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>This website is provided for general information about vehicles and services offered by Indus Motor Group.</p>
                        <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.</p>
                        <p>We reserve the right to restrict or terminate access to the website at any time without notice.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Vehicle Information</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We make every effort to ensure that vehicle descriptions, specifications, images, and pricing displayed on this website are accurate.</p>
                    <div className="space-y-2">
                        <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">However:</p>
                        <ul className="list-disc space-y-1 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                            <li>Vehicle specifications may vary</li>
                            <li>Images are for illustrative purposes only</li>
                            <li>Features and equipment may differ from those listed</li>
                            <li>Errors or omissions may occur</li>
                        </ul>
                    </div>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">We recommend confirming full vehicle details directly with our team before making a purchase decision.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Vehicle Availability</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>All vehicles displayed on this website are subject to availability.</p>
                        <p>Vehicles may be sold, reserved, or removed from sale without prior notice.</p>
                        <p>Listing a vehicle on this website does not constitute a binding offer to sell.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Pricing</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>All vehicle prices listed on this website are provided for guidance.</p>
                        <p>While we aim to ensure accuracy, pricing errors may occasionally occur.</p>
                        <p>We reserve the right to:</p>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>Correct pricing errors</li>
                            <li>Update vehicle prices without notice</li>
                        </ul>
                        <p>Vehicle prices may not include additional costs such as delivery, registration, or optional services unless otherwise stated.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Finance Disclaimer</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>Finance options may be available through third party finance providers.</p>
                        <p>Indus Motor Group does not provide finance directly. Finance applications submitted through this website may be shared with third party finance providers who will assess your eligibility.</p>
                        <p>Finance approval is subject to the lender&apos;s criteria, terms, and conditions.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Vehicle Delivery</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>Where available, vehicle delivery may be arranged across Ireland.</p>
                        <p>Delivery options, costs, and timeframes will be discussed with customers individually and may vary depending on location and vehicle availability.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Third Party Links</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>This website may include links to external websites or services.</p>
                        <p>We are not responsible for the content, policies, or practices of third party websites.</p>
                        <p>Users access third party sites at their own risk.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Intellectual Property</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">All content on this website, including:</p>
                    <ul className="list-disc space-y-1 pl-6 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <li>text</li>
                        <li>images</li>
                        <li>graphics</li>
                        <li>logos</li>
                        <li>website design</li>
                    </ul>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">is the property of Indus Motors Limited unless otherwise stated.</p>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">Content may not be copied, reproduced, or distributed without prior written permission.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Limitation of Liability</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>Indus Motor Group makes reasonable efforts to ensure that the information on this website is accurate and up to date.</p>
                        <p>However, we do not guarantee that the website will always be free from errors or interruptions.</p>
                        <p>To the fullest extent permitted by law, we shall not be liable for:</p>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>inaccuracies in vehicle listings</li>
                            <li>website downtime</li>
                            <li>technical issues</li>
                            <li>indirect or consequential losses arising from use of this website</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Changes to These Terms</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>We may update these Terms &amp; Conditions from time to time.</p>
                        <p>Any updates will be posted on this page with the revised date.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Governing Law</h2>
                    <div className="space-y-3 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>These Terms &amp; Conditions are governed by and interpreted in accordance with the laws of Ireland.</p>
                        <p>Any disputes arising from the use of this website shall be subject to the jurisdiction of the Irish courts.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-[30px] font-normal leading-tight text-white md:text-[44px]">Contact Information</h2>
                    <p className="text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        If you have any questions about these Terms &amp; Conditions, please contact us.
                    </p>
                    <div className="space-y-1 text-[16px] leading-7 text-zinc-400 md:text-[18px]">
                        <p>Indus Motors Limited</p>
                        <p>Trading as Indus Motor Group</p>
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

          <section className="relative mx-auto mt-[99px] md:mt-[150px] h-[320px] w-full max-w-[1440px] overflow-hidden sm:h-[420px] md:h-[600px] iphone:h-[200px]">
    <img
        src={termsCtaImg}
        alt="Find your next car"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center iphone:h-[200px]"
    />
    <div className="absolute inset-x-0 top-0 h-28 md:h-36 pointer-events-none bg-gradient-to-b from-black/40 to-transparent"></div>
    <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-48 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute inset-x-0 top-0 hero-shell pt-8 md:pt-10 iphone:pt-6">
        <h2 className="text-[30px] font-medium text-white md:text-[44px] iphone:text-[22px]">Find Your Next Car Today</h2>
        <Link to="/cars" className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black md:text-[16px] iphone:text-[14px] iphone:px-4 iphone:py-2">Browse Cars</Link>
    </div>
</section>

        <Footer />
        </div>
    )
}