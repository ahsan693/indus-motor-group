import { Link } from 'react-router-dom'
import { Navbar } from './Home'
import { useState } from 'react'
import findYourCarImg from '../images/homepage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (2).webp'
import stepOneImg from '../images/warrantypage-images/IL8Bx4obJa2x3WwpottYhJS6K8.webp'
import stepTwoImg from '../images/warrantypage-images/w2mNaZnIbEJtakXLPOnkYEfJmts.webp'
import stepThreeImg from '../images/warrantypage-images/MoRXSXu7z7dxC2bPV8u4yu8VF3Y.webp'
import contactHero from '../images/contactus/contactus-navbar.png'
import formImage from '../images/contactus/form-image.png'

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

function KeyFeatureIcon({ type }: { type: string }) {
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

export default function ContactUs() {
   const [openFaq, setOpenFaq] = useState<number | null>(null)
     return (
         <div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
         <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-screen md:min-h-screen">
 
           <img
             src={contactHero}
             alt="Contact hero"
             loading="eager"
             fetchPriority="high"
             decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%] brightness-[1.1] contrast-[1.05] saturate-[1.06] md:object-center md:object-[56%_34%] animate-kenburns"
           />
        {/* top-only overlay for navbar readability — no bottom blending */}
        <div className="absolute inset-x-0 top-0 h-28 md:h-36 pointer-events-none bg-gradient-to-b from-black/40 to-transparent"></div>
        <Navbar />

       	<div className="hero-content-rise hero-mobile-shell absolute inset-x-0 bottom-0 hero-shell pb-5 min-[390px]:pb-6 sm:pb-8 md:pb-10 iphone:pb-2">
					 <h1 className="max-w-[700px] text-[44px] font-normal leading-[1.05] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] md:text-[60px] lg:text-[72px]">     Contact Us
          </h1>
        </div>
      </section>

      {/* ── MAIN ── */}
      <main className="layout-shell layout-stack iphone:pt-6">

        {/* ── Reach Out to Us ── */}
        <section className="motion-rise">
          <h2 className="text-[22px] font-normal leading-tight text-white md:text-[30px] iphone:text-[18px] text-center mb-10 iphone:mb-8">
            Reach Out to Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch mt-12 mb-12 iphone:mt-4 iphone:mb-10 iphone:gap-0">

            {/* ── Form card — first in DOM = top on mobile ── */}
            <div className="bg-zinc-900/50 rounded-lg px-4 py-6 iphone:px-5 iphone:py-7 border border-zinc-800 md:col-start-2">
              <form className="space-y-5 iphone:space-y-6">

                {/* Full Name & Phone — 2 col on desktop, 1 col on mobile */}
                <div className="grid grid-cols-2 gap-4 iphone:grid-cols-1 iphone:gap-6">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-2 iphone:mb-2.5 font-medium iphone:text-sm">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border border-zinc-700 px-3 py-2 iphone:py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition rounded"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-2 iphone:mb-2.5 font-medium iphone:text-sm">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border border-zinc-700 px-3 py-2 iphone:py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition rounded"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs text-zinc-400 mb-2 iphone:mb-2.5 font-medium iphone:text-sm">Service Type</label>
                  <select className="w-full bg-transparent border border-zinc-700 px-3 py-2 iphone:py-3 text-sm text-white focus:outline-none focus:border-white transition rounded appearance-none">
                    <option value="" className="bg-zinc-900 text-zinc-600">Select a service type</option>
                    <option value="sales" className="bg-zinc-900">Car Sales</option>
                    <option value="service" className="bg-zinc-900">Service & Maintenance</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col h-full">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-2 iphone:mb-2.5 font-medium iphone:text-sm">Message (Optional)</label>
                    <textarea
                      rows={10}
                      className="w-full bg-transparent border border-zinc-700 px-3 py-2 iphone:py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition resize-none rounded"
                      placeholder="Tell us how we can help"
                    />
                  </div>

                  <div className="mt-auto pt-6 iphone:pt-7">
                    <button
                      type="submit"
                      className="w-full bg-white text-black py-2.5 iphone:py-3 rounded text-sm font-medium hover:bg-zinc-200 transition"
                    >
                      Submit
                    </button>

                    <div className="flex items-start gap-2 mt-3 iphone:mt-4">
                      <input type="checkbox" defaultChecked className="mt-1" />
                      <label className="text-xs iphone:text-sm text-zinc-500">
                        By submitting, you agree to our{' '}
                        <Link to="/privacy-policy" className="text-zinc-400 underline hover:text-white">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>

              </form>
            </div>

            {/* Image — second in DOM = below form on mobile, left on desktop */}
            <div className="overflow-hidden rounded-lg md:col-start-1 md:row-start-1 iphone:hidden">
              <img
                src={formImage}
                alt="Contact form"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* ── Contact Information ── */}
        <section className="motion-rise motion-rise-delay-1 mt-12 iphone:mt-14">
          <h2 className="text-[28px] md:text-[30px] font-normal leading-tight text-white mb-8 md:mb-10 iphone:mb-7">
            Contact Information
          </h2>

          <div className="space-y-0">
            {/* Get in Touch */}
            <div className="py-5 border-t border-zinc-800 md:grid md:grid-cols-2 md:py-4 md:border-b iphone:py-6">
              <div className="text-xs text-zinc-500 md:text-white font-medium mb-2 md:mb-0 iphone:mb-3 iphone:text-sm">Get in Touch</div>
              <div className="text-sm md:text-xs text-white md:text-zinc-300 space-y-1 iphone:space-y-2 iphone:text-[15px]">
                <div>+353 89 967 5410</div>
                <div>hello@indusmotorgroup.com</div>
              </div>
            </div>

            {/* Address & Working Hours */}
            <div className="py-5 border-t border-zinc-800 md:grid md:grid-cols-2 md:py-4 md:border-b iphone:py-6">
              <div className="text-xs text-zinc-500 md:text-white font-medium mb-2 md:mb-0 iphone:mb-3 iphone:text-sm">Address & Working Hours</div>
              <div className="text-sm md:text-xs text-white md:text-zinc-300 space-y-1 iphone:space-y-2 iphone:text-[15px]">
                <div>Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland</div>
                <div>Mon - Fri: 9:00am - 6:00pm</div>
              </div>
            </div>

            {/* Socials */}
            <div className="py-5 border-t border-b border-zinc-800 md:grid md:grid-cols-2 md:py-4 iphone:py-6">
              <div className="text-xs text-zinc-500 md:text-white font-medium mb-2 md:mb-0 iphone:mb-3 iphone:text-sm">Socials</div>
              <div className="text-sm md:text-xs space-y-2 iphone:space-y-3">
                <a href="#" className="block text-white md:text-zinc-300 hover:text-white transition underline underline-offset-2 md:no-underline iphone:text-[15px]">Instagram</a>
                <a href="#" className="block text-white md:text-zinc-300 hover:text-white transition underline underline-offset-2 md:no-underline iphone:text-[15px]">Facebook</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Warranty FAQs ── */}
        <section className="motion-rise mt-16 md:mt-12 iphone:mt-14">
          <div className="md:grid md:grid-cols-2">
            <h2 className="text-[28px] md:text-[30px] font-normal text-white mb-8 md:mb-10 iphone:mb-7">
              Warranty FAQS
            </h2>

            <div className="space-y-0">
              {faq.map(([question, answer], idx) => {
                const open = openFaq === idx
                return (
                  <div
                    key={question}
                    className={`py-5 md:py-4 iphone:py-5 border-t transition-colors hover:bg-zinc-950/40 ${idx === faq.length - 1 ? 'border-b border-zinc-800' : 'border-zinc-800'}`}
                  >
                    <button
                      className="flex w-full items-center justify-between text-left focus:outline-none gap-4"
                      onClick={() => setOpenFaq(open ? null : idx)}
                      aria-expanded={open ? "true" : "false"}
                    >
                      <span className="text-sm md:text-xs font-normal text-white md:text-zinc-300 iphone:text-[15px]">{question}</span>
                      <span className="text-xl md:text-sm text-zinc-400 md:text-zinc-300 font-light flex-shrink-0">+</span>
                    </button>
                    {open && (
                      <p className="mt-3 md:mt-2 iphone:mt-4 text-sm md:text-xs iphone:text-[14px] leading-relaxed text-zinc-400">{answer}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      {/* ── Find Your Car CTA ── */}
     <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-8 h-screen w-screen max-w-none overflow-hidden iphone:h-[180px] iphone:mt-4">
     <img
          src={findYourCarImg}
          alt="Find your next car"
          loading="lazy"
          decoding="async"
          className="hero-zoom-settle h-full w-full object-cover iphone:h-[180px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="hero-content-rise absolute inset-x-0 top-0 hero-shell pt-6 sm:pt-8 md:pt-10 iphone:pt-2">
          <h2 className="max-w-[420px] text-[22px] font-normal text-white md:text-[30px] iphone:text-[22px]">Ready To Get Started With Finance</h2>
          <Link
            to="/cars"
            className="ui-btn mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black iphone:text-[14px] iphone:px-3 iphone:py-2 iphone:w-auto iphone:min-w-0 iphone:ml-0"
            style={{ justifyContent: 'flex-start' }}
          >
            Start Application
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-8 sm:mt-10 md:mt-16 bg-black">
             <div className="site-footer-shell text-white text-[14px]">
                   <div className="site-footer-grid">
                 <div>
                   <p className="site-footer-brand">INDUS MOTOR GROUP</p>
                   <p className="site-footer-copy text-[13px] sm:text-[14px] leading-6 font-normal md:text-[14px] md:leading-tight">
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
                 Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
               </p>
             </div>
           </footer>
    </div>
  )
}