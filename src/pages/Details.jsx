import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './Home'
import { useCar } from '../hooks/useCar'
import { urlFor } from '../lib/sanity'

export default function Details() {
	const [searchParams] = useSearchParams()
	const carId = searchParams.get('id')
	const { car, loading, error } = useCar(carId)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	if (!carId || loading) {
		return (
			<div className="min-h-screen bg-black text-zinc-300">
				<Navbar />
				<main className="mx-auto max-w-[1240px] space-y-10 px-5 py-10 md:px-8 md:py-14">
					<div className="flex items-center justify-center py-20">
						<div className="space-y-4 text-center">
							<div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
							<p className="text-sm text-zinc-400">Loading car details...</p>
						</div>
					</div>
				</main>
			</div>
		)
	}

	if (error || !car) {
		return (
			<div className="min-h-screen bg-black text-zinc-300">
				<Navbar />
				<main className="mx-auto max-w-[1240px] space-y-10 px-5 py-10 md:px-8 md:py-14">
					<div className="rounded-lg border border-red-900 bg-red-950 p-4 text-center text-red-200">
						Unable to load car details. Please try selecting a car from our inventory.
					</div>
					<div className="text-center">
						<Link to="/cars" className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black">
							Back to Cars
						</Link>
					</div>
				</main>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />
			<main className="mx-auto max-w-[1240px] space-y-10 px-5 py-10 md:px-8 md:py-14">
				<div className="space-y-4">
					<Link to="/cars" className="text-sm text-zinc-400 hover:text-white">← Back to Cars</Link>
					<p className="text-sm text-zinc-500">Home › Cars › {car.make} {car.model}</p>
					<h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-6xl">{car.make} {car.model}</h1>
					<p className="text-2xl font-semibold text-white md:text-3xl">€{car.price?.toLocaleString() || 0}</p>
					{car.description && (
						<p className="max-w-3xl text-zinc-400">
							{car.description}
						</p>
					)}
				</div>

				<section className="grid gap-7 lg:grid-cols-2">
					<div className="space-y-4">
						{car.images && car.images.length > 0 ? (() => {
							const img = car.images[currentImageIndex]
							let imageUrl = null
							// Check if it's a proper Sanity image object with _type
							if (img._type === 'image' || img.asset) {
								imageUrl = urlFor(img).width(1200).url()
							} 
							// Check if it's a URL string directly
							else if (typeof img === 'string') {
								imageUrl = img
							}
							// Check if it has a url property
							else if (img.url) {
								imageUrl = img.url
							}

							return imageUrl ? (
								<img
									src={imageUrl}
									alt={`${car.make} ${car.model}`}
									className="h-64 w-full rounded-2xl border border-zinc-800 object-cover sm:h-80 md:h-[420px]"
								/>
							) : (
								<div className="h-64 w-full rounded-2xl border border-zinc-800 bg-zinc-800 flex items-center justify-center sm:h-80 md:h-[420px] text-zinc-400">
									No image available
								</div>
							)
						})() : (
							<div className="h-64 w-full rounded-2xl border border-zinc-800 bg-zinc-800 flex items-center justify-center sm:h-80 md:h-[420px] text-zinc-400">
								No image available
							</div>
						)}

						{/* Thumbnail Gallery */}
						{car.images && car.images.length > 1 && (
							<div className="flex gap-2 overflow-x-auto pb-2">
								{car.images.map((img, index) => {
									let thumbUrl = null
									if (img._type === 'image' || img.asset) {
										thumbUrl = urlFor(img).width(120).height(100).url()
									} else if (typeof img === 'string') {
										thumbUrl = img
									} else if (img.url) {
										thumbUrl = img.url
									}

									return thumbUrl ? (
										<button
											key={index}
											onClick={() => setCurrentImageIndex(index)}
											className={`flex-shrink-0 rounded-lg border-2 overflow-hidden transition-all ${
												currentImageIndex === index 
													? 'border-white' 
													: 'border-zinc-700 hover:border-zinc-500'
											}`}
										>
											<img
												src={thumbUrl}
												alt={`${car.make} ${car.model} view ${index + 1}`}
												className="h-24 w-28 object-cover"
											/>
										</button>
									) : null
								})}
							</div>
						)}

						{/* Image Counter */}
						{car.images && car.images.length > 1 && (
							<p className="text-xs text-zinc-500 text-center">
								Image {currentImageIndex + 1} of {car.images.length}
							</p>
						)}
					</div>

					<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
						<h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">Vehicle Specifications</h2>
						<div className="space-y-3 text-sm">
							{car.year && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Year</span>
									<span className="text-white">{car.year}</span>
								</div>
							)}
							{car.mileage !== undefined && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Mileage</span>
									<span className="text-white">{car.mileage?.toLocaleString()} km</span>
								</div>
							)}
							{car.transmission && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Transmission</span>
									<span className="text-white">{car.transmission}</span>
								</div>
							)}
							{car.fuelType && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Fuel Type</span>
									<span className="text-white">{car.fuelType}</span>
								</div>
							)}
							{car.bodyType && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Body Type</span>
									<span className="text-white">{car.bodyType}</span>
								</div>
							)}
							{car.engineSize && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Engine Size</span>
									<span className="text-white">{car.engineSize}L</span>
								</div>
							)}
							{car.color && (
								<div className="flex items-center justify-between border-b border-zinc-800 pb-2">
									<span className="text-zinc-500">Color</span>
									<span className="text-white">{car.color}</span>
								</div>
							)}
							{car.owners !== undefined && (
								<div className="flex items-center justify-between">
									<span className="text-zinc-500">Previous Owners</span>
									<span className="text-white">{car.owners}</span>
								</div>
							)}
							{car.nctExpiry && (
								<div className="flex items-center justify-between">
									<span className="text-zinc-500">NCT Expiry</span>
									<span className="text-white">{new Date(car.nctExpiry).toLocaleDateString()}</span>
								</div>
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
