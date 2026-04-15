import { Link } from 'react-router-dom'
import { useState, useMemo, useEffect } from 'react'
import { Navbar } from './Home'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import ourCarsHeroImg from '../images/ourcarspage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (3).webp'

export default function Cars() {
	const { cars, loading, error } = useCars({ status: 'available' })

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const [activeFilters, setActiveFilters] = useState({})
	const [sortBy, setSortBy] = useState('newest')
	const [showFilters, setShowFilters] = useState({})
	const [searchTerm, setSearchTerm] = useState('')
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

	// Get unique filter values from cars
	const brands = [...new Set(cars.map(car => car.make))].sort()
	const models = [...new Set(cars.map(car => car.model))].sort()
	const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a)
	const fuelTypes = [...new Set(cars.map(car => car.fuelType))].sort()
	const bodyTypes = [...new Set(cars.map(car => car.bodyType))].sort()
	const transmissions = [...new Set(cars.map(car => car.transmission))].sort()

	const filterOptions = {
		Brand: brands,
		Model: models,
		Year: years,
		'Fuel Type': fuelTypes,
		'Body Type': bodyTypes,
		Transmission: transmissions,
		'Price Range': ['Under €10,000', '€10,000 - €20,000', '€20,000 - €30,000', 'Over €30,000']
	}

	const filterOrder = ['Brand', 'Model', 'Price Range', 'Year', 'Fuel Type', 'Body Type', 'Transmission']

	// Filter and sort cars
	const filteredCars = useMemo(() => {
		let filtered = cars.filter(car => {
			if (searchTerm.trim()) {
				const term = searchTerm.toLowerCase().trim()
				const searchableText = [
					car.make,
					car.model,
					car.year?.toString(),
					car.fuelType,
					car.transmission,
					car.bodyType,
				].filter(Boolean).join(' ').toLowerCase()

				if (!searchableText.includes(term)) return false
			}

			if (activeFilters.Brand && car.make !== activeFilters.Brand) return false
			if (activeFilters.Model && car.model !== activeFilters.Model) return false
			if (activeFilters.Year && car.year !== activeFilters.Year) return false
			if (activeFilters['Fuel Type'] && car.fuelType !== activeFilters['Fuel Type']) return false
			if (activeFilters['Body Type'] && car.bodyType !== activeFilters['Body Type']) return false
			if (activeFilters.Transmission && car.transmission !== activeFilters.Transmission) return false
			
			if (activeFilters['Price Range']) {
				const price = car.price
				const range = activeFilters['Price Range']
				if (range === 'Under €10,000' && price >= 10000) return false
				if (range === '€10,000 - €20,000' && (price < 10000 || price > 20000)) return false
				if (range === '€20,000 - €30,000' && (price < 20000 || price > 30000)) return false
				if (range === 'Over €30,000' && price <= 30000) return false
			}
			
			return true
		})

		// Sort
		filtered.sort((a, b) => {
			switch (sortBy) {
				case 'price-low':
					return a.price - b.price
				case 'price-high':
					return b.price - a.price
				case 'year-new':
					return b.year - a.year
				case 'year-old':
					return a.year - b.year
				case 'newest':
				default:
					return 0
			}
		})

		return filtered
	}, [cars, activeFilters, sortBy, searchTerm])

	const toggleFilter = (filterName, value) => {
		setActiveFilters(prev => ({
			...prev,
			[filterName]: prev[filterName] === value ? null : value
		}))
	}

	const clearFilters = () => {
		setActiveFilters({})
	}

	const toggleFilterDropdown = (filterName) => {
		setShowFilters(prev => {
			const isCurrentOpen = prev[filterName]
			// Close all filters, then toggle the current one
			const newFilters = {}
			Object.keys(filterOptions).forEach(key => {
				newFilters[key] = false
			})
			newFilters[filterName] = !isCurrentOpen
			return newFilters
		})
	}

	if (error) {
		return (
			<div className="min-h-screen bg-black text-zinc-300">
				<Navbar />
				{/* Add top padding to prevent content hiding behind fixed navbar (height: ~64px on desktop, ~48px on mobile) */}
				<div className="pt-[64px] sm:pt-[64px] md:pt-[72px] iphone:pt-[56px]" />
				<main className="layout-shell py-10 md:py-14">
					<div className="rounded-lg border border-red-900 bg-red-950 p-4 text-center text-red-200">
						Unable to load cars at this time. Please try again later.
					</div>
				</main>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300 iphone:text-[15px]">
			<Navbar />

			<main className="layout-shell py-10 md:py-14 iphone:py-4">
						<section className="motion-rise relative z-40 space-y-7">
								{/* 100px transparent gap */}
								<div style={{ height: '100px' }} />
<h1 className="text-center text-[26px] font-normal leading-tight text-white min-[390px]:text-[30px] sm:text-[34px] md:text-[66px] iphone:text-[14px]">Quality Used Cars for Sale</h1>

					<div className="flex justify-center md:hidden iphone:mt-2">
						<button
							type="button"
							onClick={() => setIsFilterModalOpen(true)}
							className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black"
						>
							Refine
							<svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
								<path d="M4 5h12M6.5 10h7M9 15h2" strokeLinecap="round" />
							</svg>
						</button>
					</div>

					<div className="relative z-[80] hidden flex-wrap items-center justify-center gap-2.5 md:flex md:gap-3 iphone:gap-1">
						{filterOrder.map((filterName) => (
							<div key={filterName} className="relative">
								<button
									onClick={() => toggleFilterDropdown(filterName)}
									className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-[14px] font-medium leading-none transition-all md:text-[16px] ${
										activeFilters[filterName]
											? 'border-zinc-500 bg-zinc-800 text-white'
											: 'border-zinc-700 bg-zinc-900 text-white hover:border-zinc-500 hover:bg-zinc-800'
								}`}
							>
								<svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
									<path d="M4.5 5h11m-10 5h8m-6 5h4" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span>{filterName}</span>
								<svg viewBox="0 0 20 20" className={`h-3 w-3 transition-transform ${showFilters[filterName] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
									<path d="M5 7.5 10 12.5l5-5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
							
							{showFilters[filterName] && (
								<div className="absolute left-0 top-full z-[120] mt-2 min-w-[210px] rounded-lg border border-zinc-700 bg-zinc-900 p-1.5 shadow-lg">
										<div className="max-h-[272px] space-y-1 overflow-y-auto pr-1 [scrollbar-color:#3f3f46_#18181b] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700">
											{filterOptions[filterName].map((option) => (
												<button
													key={option}
													onClick={(e) => {
														e.preventDefault()
														toggleFilter(filterName, option)
														setShowFilters(prev => ({...prev, [filterName]: false}))
													}}
													className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${
														activeFilters[filterName] === option
															? 'bg-white text-black font-medium'
															: 'text-zinc-300 hover:bg-zinc-800'
													}`}
												>
													{option}
												</button>
											))}
										</div>
									</div>
								)}
							</div>
						))}

						<button
							onClick={clearFilters}
							className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
							title="Reset filters"
						>
							<svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
								<line x1="3" y1="5" x2="17" y2="5" />
								<circle cx="8" cy="5" r="1.8" fill="currentColor" stroke="none" />
								<line x1="3" y1="10" x2="17" y2="10" />
								<circle cx="12" cy="10" r="1.8" fill="currentColor" stroke="none" />
								<line x1="3" y1="15" x2="17" y2="15" />
								<circle cx="6" cy="15" r="1.8" fill="currentColor" stroke="none" />
							</svg>
						</button>

						<div className="relative">
							<svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
								<circle cx="11" cy="11" r="7" />
								<line x1="16.65" y1="16.65" x2="21" y2="21" />
							</svg>
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								placeholder="Search"
								className="h-10 w-[126px] rounded-full border border-zinc-700 bg-zinc-900 pl-9 pr-3 text-[14px] text-zinc-200 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500 md:text-[16px]"
							/>
						</div>
					</div>
				</section>

				{isFilterModalOpen && (
					<div className="fixed inset-0 z-[200] md:hidden">
						<button
							type="button"
							className="absolute inset-0 bg-black/70"
							aria-label="Close filters"
							onClick={() => setIsFilterModalOpen(false)}
						></button>
						<div className="absolute inset-x-0 top-0 h-full overflow-y-auto bg-black px-6 pb-10 pt-8">
							<div className="flex items-center justify-between">
								<h2 className="text-[30px] font-semibold text-white">Search</h2>
								<button
									type="button"
									className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-300"
									aria-label="Close"
									onClick={() => setIsFilterModalOpen(false)}
								>
									<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
										<path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
									</svg>
								</button>
							</div>

							<div className="mt-6 space-y-3">
								{filterOrder.map((filterName) => (
									<div key={filterName} className="relative">
										<button
											type="button"
											onClick={() => toggleFilterDropdown(filterName)}
											className="flex w-full items-center justify-between rounded-full border border-zinc-800 bg-zinc-900 px-4 py-3 text-[16px] text-zinc-100"
										>
											<span>{filterName}</span>
											<svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${showFilters[filterName] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
												<path d="M5 7.5 10 12.5l5-5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										{showFilters[filterName] && (
											<div className="mt-2 rounded-2xl border border-zinc-800 bg-zinc-950 p-2">
												<div className="max-h-[220px] space-y-1 overflow-y-auto pr-1 [scrollbar-color:#3f3f46_#18181b] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700">
													{filterOptions[filterName].map((option) => (
														<button
															key={option}
															onClick={(e) => {
																e.preventDefault()
																toggleFilter(filterName, option)
																setShowFilters(prev => ({...prev, [filterName]: false}))
															}}
															className={`w-full rounded px-3 py-2 text-left text-[16px] transition-colors ${
																activeFilters[filterName] === option
																	? 'bg-white text-black font-medium'
																	: 'text-zinc-300 hover:bg-zinc-800'
															}`}
														>
															{option}
														</button>
													))}
												</div>
											</div>
										)}
									</div>
								))}
							</div>

							<div className="mt-8 space-y-3">
								<button
									type="button"
									className="w-full rounded-full bg-white px-6 py-3 text-[16px] font-medium text-black"
									onClick={() => setIsFilterModalOpen(false)}
								>
									Search
								</button>
								<button
									type="button"
									className="w-full text-[14px] text-zinc-400"
									onClick={() => {
										clearFilters()
										setShowFilters({})
									}}
								>
									Reset
								</button>
							</div>
						</div>
					</div>
				)}

				<section className="motion-rise motion-rise-delay-1 relative z-10 mt-20 md:mt-24 iphone:mt-4">
					<div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between iphone:mb-3 iphone:gap-2">
						<div className="max-w-[760px]">
							<h2 className="text-[30px] font-normal leading-[1.08] text-white md:text-[44px] iphone:text-[16px]">Explore Our Collection</h2>
							<p className="mt-2 mb-8 text-[16px] leading-6 text-zinc-400 md:mb-12 md:text-[18px] iphone:text-[13px] iphone:mb-4">
								Carefully selected used cars chosen for quality, reliability, and value.
							</p>
						</div>
						
						<div className="relative mt-2 sm:mt-0 md:self-start">
							<button 
								onClick={() => setShowFilters(prev => ({...prev, sortMenu: !prev.sortMenu}))}
								className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-[14px] font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 md:text-[16px]"
							>
								Sort By v
							</button>
							
							{showFilters.sortMenu && (
								<div className="absolute left-0 z-50 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-lg border border-zinc-700 bg-zinc-900 p-1.5 shadow-lg sm:left-auto sm:right-0 sm:w-auto sm:min-w-[170px]">
									<button
										onClick={() => {
											setSortBy('newest')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${sortBy === 'newest' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Newest
									</button>
									<button
										onClick={() => {
											setSortBy('price-low')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${sortBy === 'price-low' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Price: Low to High
									</button>
									<button
										onClick={() => {
											setSortBy('price-high')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${sortBy === 'price-high' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Price: High to Low
									</button>
									<button
										onClick={() => {
											setSortBy('year-new')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${sortBy === 'year-new' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Year: Newest First
									</button>
									<button
										onClick={() => {
											setSortBy('year-old')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full rounded px-3 py-2 text-left text-[14px] transition-colors md:text-[16px] ${sortBy === 'year-old' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Year: Oldest First
									</button>
								</div>
							)}
						</div>
					</div>

					<div className="mt-[44px] iphone:mt-2">
						{loading ? (
							<div className="flex items-center justify-center py-20">
								<div className="space-y-4 text-center">
									<div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
									<p className="text-[16px] text-zinc-400 md:text-[18px]">Loading cars...</p>
								</div>
							</div>
						) : filteredCars.length === 0 ? (
							<div className="rounded-lg border border-yellow-900 bg-yellow-950 p-6 text-center text-yellow-200">
								{cars.length === 0 ? 'No cars available at the moment. Please check back soon.' : 'No cars match your filters. Try adjusting your search.'}
							</div>
						) : (
							<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 iphone:gap-2">
								{filteredCars.map((car) => {
								// Handle both Sanity image objects and direct URLs
								let imageUrl = null
								if (car.images?.[0]) {
									const img = car.images[0]
									// Check if it's a proper Sanity image object with _type
									if (img._type === 'image' || img.asset) {
										imageUrl = urlFor(img).width(800).url()
									} 
									// Check if it's a URL string directly
									else if (typeof img === 'string') {
										imageUrl = img
									}
									// Check if it has a url property
									else if (img.url) {
										imageUrl = img.url
									}
								}

								return (
								<Link key={car._id} to={`/details?id=${car._id}`} className="group block">
									<article className="motion-card h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-black transition-colors hover:border-zinc-700 iphone:rounded-xl">
										{imageUrl ? (
											<img 
												src={imageUrl} 
												alt={`${car.make} ${car.model}`} 
												loading="lazy"
												decoding="async"
												className="motion-media h-[210px] w-full object-cover iphone:h-[180px]" 
											/>
										) : (
												<div className="flex h-[210px] w-full items-center justify-center bg-zinc-800 text-[14px] text-zinc-400 md:text-[16px] iphone:h-[180px]">
												No image
											</div>
										)}
												<div className="space-y-[15px] p-[10px] iphone:space-y-2 iphone:p-2">
											<div className="flex items-start justify-between gap-3 iphone:gap-1">
												<h3 className="truncate text-[18px] font-normal text-white iphone:text-[13px]">{car.make} {car.model}</h3>
												<span className="motion-link-slide pt-1 text-[13px] font-normal text-[#BABABA] iphone:text-[13px]">View Details {'>'}</span>
											</div>
												<p className="text-[16px] font-normal text-[#BABABA] iphone:text-[13px]">
												{car.year}  -  {car.mileage?.toLocaleString() || 0} km  -  {car.transmission}  -  {car.fuelType}
											</p>
												<div className="flex flex-wrap gap-[10px] iphone:gap-1">
												{car.transmission && (
													<span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
														{car.transmission}
													</span>
												)}
												{car.fuelType && (
													<span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
														{car.fuelType}
													</span>
												)}
												{car.seats && (
													<span className="rounded-full bg-black border border-zinc-700 px-2 py-0.5 text-[11px] font-normal text-white iphone:text-[14px] iphone:px-2">
														{car.seats} Seats
													</span>
												)}
											</div>
												<p className="text-[24px] font-normal leading-none text-white iphone:text-[15px]">€{car.price?.toLocaleString() || 0}</p>
												<p className="text-[16px] font-normal text-[#BABABA] iphone:text-[13px]">Finance Available</p>
										</div>
									</article>
								</Link>
								)
								})}
							</div>
						)}
					</div>

					<div className="mx-auto mt-14 max-w-[520px] pt-10">
						<div className="flex justify-center gap-2">
							<button className="size-8 rounded-lg bg-white text-[14px] font-semibold text-black md:text-[16px]">1</button>
							<button className="size-8 rounded-lg bg-zinc-900 text-[14px] font-semibold text-zinc-300 md:text-[16px]">2</button>
						</div>
					</div>
				</section>
			</main>

			<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-8 h-screen w-screen max-w-none overflow-hidden iphone:h-[180px] iphone:mt-4">
				<img
					src={ourCarsHeroImg}
					alt="Find your next car"
					loading="lazy"
					decoding="async"
					className="hero-zoom-settle h-full w-full object-cover iphone:h-[180px]"
				/>
				<div className="absolute inset-x-0 top-0 h-28 md:h-36 pointer-events-none bg-gradient-to-b from-black/40 to-transparent"></div>
				<div className="hero-content-rise absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-4 pt-6 sm:px-5 sm:pt-8 md:px-8 md:pt-10 iphone:pt-2">
					<h2 className="text-[30px] font-normal text-white md:text-[44px] iphone:text-[16px]">Find Your Next Car Today</h2>
					<Link to="/cars" className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[16px] font-normal text-black iphone:text-[14px] iphone:px-3 iphone:py-2">Browse Available Cars</Link>
				</div>
			</section>

			<footer className="mt-10 bg-black iphone:mt-4">
				<div className="site-footer-shell text-white iphone:text-[14px]">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy text-[13px] leading-tight md:text-[14px] font-normal iphone:text-[14px] iphone:leading-4">
								Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
							</p>
						</div>
						<div>
							<p className="site-footer-label">Company</p>
							<div className="site-footer-links">
								<Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
								<Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
								<Link to="/cars" className="block transition-colors hover:text-zinc-300">Our Cars</Link>
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
								<p className="text-white">Serving customers across Ireland</p>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-zinc-800 px-5 py-6 text-center md:px-8 md:py-8">
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

