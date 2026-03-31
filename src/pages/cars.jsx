import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { Navbar } from './Home'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'
import ourCarsHeroImg from '../images/ourcarspage-images/7fshAqoL1O3dFQK0x0MXpNnO8RU (3).webp'

export default function Cars() {
	const { cars, loading, error } = useCars({ status: 'available' })
	const [activeFilters, setActiveFilters] = useState({})
	const [sortBy, setSortBy] = useState('newest')
	const [showFilters, setShowFilters] = useState({})

	// Get unique filter values from cars
	const brands = [...new Set(cars.map(car => car.make))].sort()
	const models = [...new Set(cars.map(car => car.model))].sort()
	const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a)
	const fuelTypes = [...new Set(cars.map(car => car.fuelType))].sort()
	const bodyTypes = [...new Set(cars.map(car => car.bodyType))].sort()
	const transmissions = [...new Set(cars.map(car => car.transmission))].sort()

	const filterOptions = {
		Brand: brands,
		Models: models,
		Year: years,
		'Fuel Type': fuelTypes,
		'Body Type': bodyTypes,
		Transmission: transmissions,
		'Price Range': ['Under €10,000', '€10,000 - €20,000', '€20,000 - €30,000', 'Over €30,000']
	}

	// Filter and sort cars
	const filteredCars = useMemo(() => {
		let filtered = cars.filter(car => {
			if (activeFilters.Brand && car.make !== activeFilters.Brand) return false
			if (activeFilters.Models && car.model !== activeFilters.Models) return false
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
	}, [cars, activeFilters, sortBy])

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
				<main className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
					<div className="rounded-lg border border-red-900 bg-red-950 p-4 text-center text-red-200">
						Unable to load cars at this time. Please try again later.
					</div>
				</main>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />

			<main className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
				<section className="space-y-8">
					<h1 className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-6xl">Quality Used Cars for Sale</h1>

					<div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
						{Object.keys(filterOptions).map((filterName) => (
							<div key={filterName} className="relative group">
								<button
									onClick={() => toggleFilterDropdown(filterName)}
									className={`rounded-full px-4 py-2.5 text-xs font-medium transition-all ${
										activeFilters[filterName]
											? 'bg-white text-black border border-white'
											: 'border border-zinc-600 bg-zinc-900 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800'
									}`}
								>
									{filterName} {activeFilters[filterName] ? '✓' : '⌄'}
								</button>
								
								{showFilters[filterName] && (
									<div className="absolute z-50 left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-3 min-w-[200px]">
										<div className="max-h-[300px] overflow-y-auto space-y-2">
											{filterOptions[filterName].map((option) => (
												<button
													key={option}
													onClick={(e) => {
														e.preventDefault()
														toggleFilter(filterName, option)
														setShowFilters(prev => ({...prev, [filterName]: false}))
													}}
													className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
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
							className="rounded-full border border-zinc-600 bg-zinc-900 px-4 py-2.5 text-xs text-zinc-300 hover:bg-zinc-800 transition-colors"
							title="Clear all filters"
						>
							⟲ Reset
						</button>
					</div>

					{/* Active filters display */}
					{Object.keys(activeFilters).length > 0 && (
						<div className="flex flex-wrap items-center gap-2 justify-center">
							<span className="text-xs text-zinc-400">Active filters:</span>
							{Object.entries(activeFilters).map(([key, value]) => (
								<button
									key={key}
									onClick={() => toggleFilter(key, value)}
									className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200 hover:bg-zinc-700"
								>
									{key}: {value}
									<span>×</span>
								</button>
							))}
						</div>
					)}
				</section>

				<section className="mt-14">
					<div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Explore Our Collection</h2>
							<p className="mt-2 text-sm text-zinc-400">
								{filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''} found
							</p>
						</div>
						
						<div className="relative">
							<button 
								onClick={() => setShowFilters(prev => ({...prev, sortMenu: !prev.sortMenu}))}
								className="rounded-full border border-zinc-600 bg-zinc-900 px-6 py-3 text-xs font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
							>
								Sort By ⌄
							</button>
							
							{showFilters.sortMenu && (
								<div className="absolute right-0 z-50 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-2 min-w-[180px]">
									<button
										onClick={() => {
											setSortBy('newest')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${sortBy === 'newest' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Newest
									</button>
									<button
										onClick={() => {
											setSortBy('price-low')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${sortBy === 'price-low' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Price: Low to High
									</button>
									<button
										onClick={() => {
											setSortBy('price-high')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${sortBy === 'price-high' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Price: High to Low
									</button>
									<button
										onClick={() => {
											setSortBy('year-new')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${sortBy === 'year-new' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Year: Newest First
									</button>
									<button
										onClick={() => {
											setSortBy('year-old')
											setShowFilters(prev => ({...prev, sortMenu: false}))
										}}
										className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${sortBy === 'year-old' ? 'bg-white text-black font-medium' : 'text-zinc-300 hover:bg-zinc-800'}`}
									>
										Year: Oldest First
									</button>
								</div>
							)}
						</div>
					</div>

					{loading ? (
						<div className="flex items-center justify-center py-20">
							<div className="space-y-4 text-center">
								<div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
								<p className="text-sm text-zinc-400">Loading cars...</p>
							</div>
						</div>
					) : filteredCars.length === 0 ? (
						<div className="rounded-lg border border-yellow-900 bg-yellow-950 p-6 text-center text-yellow-200">
							{cars.length === 0 ? 'No cars available at the moment. Please check back soon.' : 'No cars match your filters. Try adjusting your search.'}
						</div>
					) : (
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
								<Link key={car._id} to={`/details?id=${car._id}`} className="block">
									<article className="overflow-hidden rounded-xl border border-zinc-800 bg-black hover:border-zinc-700 transition-colors cursor-pointer h-full">
										{imageUrl ? (
											<img 
												src={imageUrl} 
												alt={`${car.make} ${car.model}`} 
												className="h-52 w-full object-cover" 
											/>
										) : (
											<div className="h-52 w-full bg-zinc-800 flex items-center justify-center text-zinc-400">
												No image
											</div>
										)}
										<div className="space-y-3 p-4">
											<div className="flex items-start justify-between gap-3">
												<h3 className="text-xl font-medium text-white sm:text-2xl">{car.make} {car.model}</h3>
												<span className="pt-1 text-xs text-zinc-300">View Details ›</span>
											</div>
											<p className="text-xs text-zinc-400">
												{car.year} · {car.mileage?.toLocaleString() || 0} km · {car.transmission} · {car.fuelType}
											</p>
											<div className="flex flex-wrap gap-1.5">
												{car.transmission && (
													<span className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
														{car.transmission}
													</span>
												)}
												{car.fuelType && (
													<span className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
														{car.fuelType}
													</span>
												)}
												{car.bodyType && (
													<span className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">
														{car.bodyType}
													</span>
												)}
											</div>
											<p className="pt-1 text-2xl font-medium text-white md:text-3xl">€{car.price?.toLocaleString() || 0}</p>
										</div>
									</article>
								</Link>
								)
							})}
						</div>
					)}

					<div className="mx-auto mt-14 max-w-[520px] border-t border-zinc-800 pt-10">
						<div className="flex justify-center gap-2">
							<button className="size-8 rounded-lg bg-white text-xs font-semibold text-black">1</button>
							<button className="size-8 rounded-lg bg-zinc-900 text-xs font-semibold text-zinc-300">2</button>
						</div>
					</div>
				</section>
			</main>

			<section className="relative mt-8 overflow-hidden border-y border-zinc-800">
				<img
					src={ourCarsHeroImg}
					alt="Find your next car"
					className="h-[360px] w-full object-cover md:h-[430px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
				<div className="absolute inset-x-0 top-0 mx-auto max-w-[1240px] px-5 pt-8 md:px-8 md:pt-10">
					<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">Find Your Next Car Today</h2>
					<button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">Browse Available Cars</button>
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
