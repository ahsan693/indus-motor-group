import { Link } from 'react-router-dom'
import { Navbar, Footer } from './Home' 
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

import { useState } from 'react'

export default function Warranty() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">

            {/* ── Hero ── */}
            <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-screen md:min-h-screen">
                <img
                    src={warrantyHeroImg}
                    alt="Warranty hero"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[center_30%] brightness-[1.1] contrast-[1.05] saturate-[1.06] md:object-center md:object-[56%_34%] animate-kenburns"
                />
                <div className="absolute inset-x-0 top-0 h-28 md:h-36 pointer-events-none bg-gradient-to-b from-black/40 to-transparent" />
                <Navbar overlay />
                <div className="hero-content-rise hero-mobile-shell absolute inset-x-0 bottom-0 hero-shell pb-5 min-[390px]:pb-6 sm:pb-8 md:pb-10 iphone:pb-2">
                    <h1 className="max-w-[700px] text-[44px] font-normal leading-[1.05] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] md:text-[60px] lg:text-[72px]">
                        Warranty & Aftercare
                    </h1>
                </div>
            </section>

            {/* ── Main ── */}
            {/* REFACTORED FOR PERFECT 99PX / 150PX GAPS */}
            <main className="layout-shell flex flex-col pt-[99px] md:pt-[150px] gap-[99px] md:gap-[150px]">

                {/* Section 1 — Intro text + image */}
                <section className="motion-rise grid items-center gap-8 sm:gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
                    <div className="space-y-5">
                        <h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px]">
                            Vehicle Warranty for Added Peace of Mind
                        </h2>
                        <p className="max-w-[500px] text-[16px] leading-7 text-zinc-300 md:text-[18px] iphone:text-[13px]">
                            All vehicles at Indus Motor Group can be supplied with warranty options for added peace of mind. We work with trusted third party providers to offer warranty protection at the point of sale.
                        </p>
                        <p className="max-w-[500px] text-[16px] leading-7 text-zinc-300 md:text-[18px] iphone:text-[13px]">
                            Coverage is designed to help protect against unexpected repair costs and may be available for up to 24 months, depending on the vehicle and selected plan.
                        </p>
                        <button className="rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-black transition-colors hover:bg-zinc-200">
                            Ask About Warranty
                        </button>
                    </div>
                    <img
                        src={vehicleWarrantyImg}
                        alt="Vehicle warranty"
                        loading="lazy"
                        decoding="async"
                        className="motion-card h-[240px] w-full rounded-lg object-cover sm:h-[360px] md:h-[430px]"
                    />
                </section>

                {/* Section 2 — Key Features */}
                <section className="motion-rise motion-rise-delay-1 rounded-[22px] bg-zinc-950 px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
                    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px]">
                                Key Features
                            </h2>
                            <p className="max-w-[310px] text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[13px]">
                                Warranty options are available across all vehicles, providing added protection and peace of mind long after you drive away.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {keyFeatures.map((item) => (
                                <article key={item.title} className="group motion-card rounded-lg bg-black/40 p-5 md:p-5">
                                    <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-zinc-300">
                                        <KeyFeatureIcon type={item.icon} />
                                    </span>
                                    <h3 className="motion-link-slide text-[15px] font-normal text-zinc-100 md:text-[18px]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">
                                        {item.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3 — How It Works */}
                <section className="motion-rise motion-rise-delay-2 space-y-8 md:space-y-10">
                    <h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px]">
                        How It Works
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3 md:gap-6">
                        {steps.map((item) => (
                            <article key={item.title} className="group motion-card space-y-4">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="motion-media h-52 w-full object-cover sm:h-64"
                                    />
                                </div>
                                <p className="text-[12px] text-zinc-500 md:text-[14px]">({item.step})</p>
                                <h3 className="motion-link-slide text-[16px] font-normal leading-tight text-white md:text-[18px]">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">
                                    {item.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Section 4 — FAQ */}
                <section className="motion-rise grid gap-8 pb-6 lg:grid-cols-[360px_1fr] lg:gap-12">
                    <h2 className="text-[22px] font-normal text-white md:text-[30px]">
                        Warranty FAQs
                    </h2>
                    <div className="space-y-6">
                        {faq.map(([question, answer], idx) => {
                            const open = openFaq === idx
                            return (
                                <div
                                    key={question}
                                    className={`pb-6 transition-colors hover:bg-zinc-950/40 ${idx !== faq.length - 1 ? 'border-b border-zinc-800' : ''}`}
                                >
                                    <button
                                        className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                                        onClick={() => setOpenFaq(open ? null : idx)}
                                        aria-expanded={open}
                                        aria-controls={`faq-answer-${idx}`}
                                    >
                                        <h3 className="text-[15px] font-normal text-white md:text-[16px]">
                                            {question}
                                        </h3>
                                        <span className="text-lg text-zinc-300">{open ? '-' : '+'}</span>
                                    </button>
                                    {open && (
                                        <p id={`faq-answer-${idx}`} className="mt-4 text-[16px] leading-6 text-zinc-400 md:text-[18px] iphone:text-[13px]">
                                            {answer}
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Section 5 — CTA */}
<section className="motion-rise rounded-2xl bg-zinc-950 py-14 text-center md:py-20">
    <h2 className="text-[22px] font-normal text-white md:text-[30px]">
        Drive Away With Confidence
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-zinc-400 md:text-[18px] iphone:text-[13px]">
        Warranty options are available on all vehicles to help protect your purchase.
    </p>
    <Link 
        to="/contact-us" 
        onClick={() => window.scrollTo(0, 0)}
        className="ui-btn mt-8 inline-flex rounded-full bg-white px-6 py-2.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.02]"
    >
        Ask About Warranty
    </Link>
</section>

            </main>

            {/* ── Footer ── */}
            <footer className="mt-[99px] md:mt-[150px] bg-black">
                <div className="site-footer-shell text-white text-[14px]">
                      <div className="site-footer-grid">
                    <div>
                      <p className="site-footer-brand">INDUS MOTOR GROUP</p>
                      <p className="site-footer-copy text-[13px] sm:text-[14px] leading-6 font-normal md:text-[14px] md:leading-tight">
                        Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
                      </p>
                     <div className="mt-4 flex items-center gap-3 text-white">
  <a href="https://www.instagram.com/indusmotorgroup" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-white">
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
  <a href="https://www.facebook.com/indusmotorgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-white">
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8a1 1 0 0 1 1-1Z" />
    </svg>
  </a>
  <a href="https://www.tiktok.com/@indusmotorgroup" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition-colors hover:text-white">
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
                    <div>
                      <p className="site-footer-label">Opening Hours</p>
                      <div className="site-footer-links space-y-2 text-[14px]">
                        <p>Mon - Fri: 9:00am - 6:00pm</p>
                        <p>Sat: 10:00am - 4:00pm</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                    <div>
                      <p className="site-footer-label">Get in Touch</p>
                      <div className="site-footer-links space-y-2 text-[14px]">
                        <p>hello@indusmotorgroup.com</p>
                        <p>+353 89 967 5410</p>
                        <p className="text-white">Serving customers across Ireland</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-zinc-800 px-4 sm:px-5 py-6 sm:py-8 text-center md:px-8 md:py-10">
                  <p className="site-footer-legal text-[12px] sm:text-[13px] md:text-[14px] leading-6">
                    Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570. Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
                  </p>
                  <p className="mt-2 text-[12px] sm:text-[13px] text-white md:text-[14px]">
                    <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</Link>
                    {' '}|{' '}
                    <Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
                    {' '}|{' '}
                    <Link to="/terms-conditions" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</Link>
                  </p>
                  <p className="mt-2 text-[12px] sm:text-[13px] text-white md:text-[14px]">© 2026 Indus Motors Limited. All rights reserved.</p>
                  <p className="mt-2 text-[12px] sm:text-[13px] text-white md:text-[14px]">
  Website by <a href="https://www.droplinemedia.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
</p>
                </div>
            </footer>
        </div>
    )
}