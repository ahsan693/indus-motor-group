import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { Navbar } from './Home'
import { useCar } from '../hooks/useCar'
import { useCars } from '../hooks/useCars'
import { urlFor } from '../lib/sanity'

const HERO_TAGS = ['Finance Available', 'Trade-Ins Welcome', 'Nationwide Delivery Available']

const ENQUIRY_HIGHLIGHTS = [
	{
		title: 'Warranty Options Available',
		description: 'Optional third-party warranty cover available.',
		icon: 'shield',
	},
	{
		title: 'Trade Ins Welcome',
		description: 'We may be able to accept your current vehicle as part exchange.',
		icon: 'trade',
	},
	{
		title: 'Finance Assistance',
		description: 'Finance options available through trusted third-party lenders.',
		icon: 'finance',
	},
	{
		title: 'Nationwide Delivery',
		description: 'Delivery available anywhere across Ireland.',
		icon: 'delivery',
	},
]

const FAQ_ITEMS = [
	{
		question: 'Do your vehicles include warranty options?',
		answer:
			'Warranty options are available on all vehicles at the point of sale, with coverage available for up to two years through trusted third-party providers.',
		moreDetails:
			'Coverage plans can vary by vehicle and provider. Our team can explain what is included, available claim limits, and term options before you complete your purchase.',
	},
	{
		question: 'Can I trade in my current car?',
		answer:
			'Trade-ins may be considered depending on the vehicle. Contact us to discuss your current car and available options.',
		moreDetails:
			'If you share your registration number, mileage, condition details, and service history, we can give you a faster estimate and guide you through next steps.',
	},
	{
		question: 'Do you offer finance?',
		answer: 'Finance options may be available through trusted third party lenders.',
		moreDetails:
			'Finance approval is subject to lender criteria. We can help you understand available terms, monthly payment estimates, and documentation required for applications.',
	},
	{
		question: 'Can I arrange a viewing?',
		answer:
			'Yes, viewings can be arranged by contacting us directly. Get in touch to schedule a time to see a vehicle.',
		moreDetails:
			'To make your visit smoother, we recommend sharing the exact vehicle you want to view so we can have it ready on arrival.',
	},
	{
		question: 'Where are you located?',
		answer:
			'Indus Motor Group serves customers across Ireland. Contact us to arrange a viewing or enquiry.',
		moreDetails:
			'If you are travelling from outside Dublin, our team can coordinate suitable appointment windows and provide guidance before your journey.',
	},
	{
		question: 'Do you offer nationwide delivery?',
		answer:
			'Yes, we can arrange delivery of your vehicle anywhere in Ireland. Contact our team to discuss delivery options.',
		moreDetails:
			'Delivery timelines may depend on destination and scheduling availability. We will confirm estimated delivery date and handover steps in advance.',
	},
]

const FEATURE_GROUPS = [
	{
		key: 'interiorComfort',
		title: 'Interior & Comfort',
		items: [
			{ value: 'airConditioning', label: 'Air Conditioning' },
			{ value: 'centreArmrest', label: 'Centre Armrest' },
			{ value: 'climateControl', label: 'Climate Control' },
			{ value: 'electricSeats', label: 'Electric Seats' },
			{ value: 'electricWindows', label: 'Electric Windows' },
			{ value: 'foldingRearSeats', label: 'Folding Rear Seats' },
			{ value: 'heatedFrontSeats', label: 'Heated Front Seats' },
			{ value: 'sunroof', label: 'Sunroof' },
		],
	},
	{
		key: 'safetySecurity',
		title: 'Safety & Security',
		items: [
			{ value: 'antiTheftSystem', label: 'Anti-Theft System' },
			{ value: 'automaticWipers', label: 'Automatic Wipers' },
			{ value: 'brakeAssistSystem', label: 'Brake Assist System' },
			{ value: 'centralLocking', label: 'Central Locking' },
			{ value: 'daytimeRunningLights', label: 'Daytime Running Lights' },
			{ value: 'ebd', label: 'EBD (Electronic Brakeforce Distribution)' },
			{ value: 'hillStartAssist', label: 'Hill-Start Assist' },
			{ value: 'tractionControl', label: 'Traction Control' },
		],
	},
	{
		key: 'technologyDriverAssistance',
		title: 'Technology & Driver Assistance',
		items: [
			{ value: 'bluetooth', label: 'Bluetooth' },
			{ value: 'cruiseControl', label: 'Cruise Control' },
			{ value: 'electronicHandbrake', label: 'Electronic Handbrake' },
			{ value: 'multiFunctionSteeringWheel', label: 'Multi-Function Steering Wheel' },
			{ value: 'parkingSensors', label: 'Parking Sensors' },
			{ value: 'satNav', label: 'Sat Nav' },
			{ value: 'selectableDriveMode', label: 'Selectable Drive Mode' },
			{ value: 'stopStartButton', label: 'Stop / Start Button' },
		],
	},
	{
		key: 'exteriorStyling',
		title: 'Exterior & Styling',
		items: [
			{ value: 'alloyWheels', label: 'Alloy Wheels' },
			{ value: 'metallicPaint', label: 'Metallic Paint' },
			{ value: 'rearSpoiler', label: 'Rear Spoiler' },
		],
	},
]

function getImageUrl(image, width = 1600) {
	if (!image) return null
	if (image._type === 'image' || image.asset) return urlFor(image).width(width).url()
	if (typeof image === 'string') return image
	if (image.url) return image.url
	return null
}

function HighlightIcon({ type }) {
	if (type === 'shield') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M12 3 5 6v6c0 5 3.2 7.8 7 9 3.8-1.2 7-4 7-9V6l-7-3Z" />
				<path d="m9.5 12 1.8 1.8L14.8 10" />
			</svg>
		)
	}

	if (type === 'trade') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M8 7h8" />
				<path d="m13 4 3 3-3 3" />
				<path d="M16 17H8" />
				<path d="m11 20-3-3 3-3" />
			</svg>
		)
	}

	if (type === 'finance') {
		return (
			<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="3" y="5" width="18" height="14" rx="2" />
				<path d="M3 10h18" />
				<path d="M7 15h2" />
			</svg>
		)
	}

	return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M3 7h13v10H3z" />
			<path d="M16 10h3l2 2v5h-5" />
			<circle cx="7" cy="18" r="1.5" />
			<circle cx="18" cy="18" r="1.5" />
		</svg>
	)
}

export default function Details() {
	const [searchParams] = useSearchParams()
	const carId = searchParams.get('id')
	const { car, loading, error } = useCar(carId)
	const { cars: availableCars, loading: relatedCarsLoading } = useCars({ status: 'available' })
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [expandedFaqItems, setExpandedFaqItems] = useState({})

	const imageUrls = useMemo(() => {
		if (!car?.images?.length) return []
		return car.images.map((image) => getImageUrl(image)).filter(Boolean)
	}, [car])

	const relatedCars = useMemo(() => {
		if (!Array.isArray(availableCars) || !car) return []

		const remainingCars = availableCars.filter((item) => item._id !== car._id)
		const sameMakeCars = remainingCars.filter(
			(item) =>
				typeof item.make === 'string' &&
				typeof car.make === 'string' &&
				item.make.toLowerCase() === car.make.toLowerCase(),
		)
		const otherCars = remainingCars.filter((item) => !sameMakeCars.some((match) => match._id === item._id))

		return [...sameMakeCars, ...otherCars].slice(0, 3)
	}, [availableCars, car])

	useEffect(() => {
		setCurrentImageIndex(0)
	}, [carId, car?._id])

	const hasMultipleImages = imageUrls.length > 1
	const activeImageUrl = imageUrls[currentImageIndex] || null

	const goToPreviousImage = () => {
		if (!hasMultipleImages) return
		setCurrentImageIndex((previous) => (previous === 0 ? imageUrls.length - 1 : previous - 1))
	}

	const goToNextImage = () => {
		if (!hasMultipleImages) return
		setCurrentImageIndex((previous) => (previous === imageUrls.length - 1 ? 0 : previous + 1))
	}

	if (!carId) {
		return (
			<div className="min-h-screen bg-black text-zinc-300">
				<Navbar />
				<main className="layout-shell space-y-8 py-10 md:py-14">
					<div className="rounded-lg border border-yellow-900 bg-yellow-950 p-4 text-center text-yellow-200">
						No car selected. Please choose a vehicle from our inventory.
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

	if (loading) {
		return (
			<div className="min-h-screen bg-black text-zinc-300">
				<Navbar />
				<main className="layout-shell space-y-10 py-10 md:py-14">
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
				<main className="layout-shell space-y-10 py-10 md:py-14">
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

	const formatPrice = (value) => {
		if (value === undefined || value === null || value === '') return 'Price on request'
		return new Intl.NumberFormat('en-IE', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(Number(value))
	}

	const formatEuroNoDecimals = (value) => new Intl.NumberFormat('en-IE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(Number(value))

	const formatValue = (value, formatter = (entry) => entry) => {
		if (value === undefined || value === null || value === '') return '—'
		return formatter(value)
	}

	const formatNctDue = (value) => {
		if (!value) return '—'
		const date = new Date(value)
		if (Number.isNaN(date.getTime())) return '—'
		return new Intl.DateTimeFormat('en-IE', {
			month: '2-digit',
			year: 'numeric',
		}).format(date)
	}

	const heroSummary = [
		car.year ? String(car.year) : null,
		car.mileage !== undefined && car.mileage !== null ? `${Number(car.mileage).toLocaleString('en-IE')} km` : null,
		car.transmission || null,
		car.fuelType || null,
	].filter(Boolean)

	const leftSpecifications = [
		{ label: 'Make', value: formatValue(car.make) },
		{ label: 'Model', value: formatValue(car.model) },
		{ label: 'Year', value: formatValue(car.year) },
		{ label: 'Mileage', value: formatValue(car.mileage, (value) => `${Number(value).toLocaleString('en-IE')} km`) },
		{ label: 'Transmission', value: formatValue(car.transmission) },
		{ label: 'Fuel Type', value: formatValue(car.fuelType) },
		{ label: 'Body Type', value: formatValue(car.bodyType) },
		{ label: 'Engine Size', value: formatValue(car.engineSize, (value) => `${value}L`) },
	]

	const rightSpecifications = [
		{ label: 'Seats', value: formatValue(car.seats) },
		{ label: 'Doors', value: formatValue(car.doors) },
		{ label: 'Colour', value: formatValue(car.color) },
		{ label: 'Engine Power', value: formatValue(car.enginePower, (value) => `${value} BHP`) },
		{ label: 'CO₂ Emissions', value: formatValue(car.co2Emissions, (value) => `${value} g/km`) },
		{ label: 'Road Tax', value: formatValue(car.roadTax, (value) => `${formatEuroNoDecimals(value)}/year`) },
		{ label: 'NCT Due', value: formatNctDue(car.nctExpiry) },
		{ label: 'Previous Owners', value: formatValue(car.owners) },
	]

	const enquiryMail = `mailto:hello@indusmotorgroup.com?subject=${encodeURIComponent(`Enquiry about ${car.make} ${car.model}`)}`

	const selectedFeatureGroups = FEATURE_GROUPS.map((group) => {
		const selectedValues = Array.isArray(car.features?.[group.key]) ? car.features[group.key] : []
		if (selectedValues.length === 0) {
			return {
				title: group.title,
				selectedItems: [],
			}
		}

		const selectedSet = new Set(selectedValues)
		const selectedItems = group.items
			.filter((item) => selectedSet.has(item.value))
			.map((item) => item.label)

		return {
			title: group.title,
			selectedItems,
		}
	}).filter((group) => group.selectedItems.length > 0)

	const getRelatedTags = (relatedCar) => {
		const tags = [
			relatedCar.transmission || null,
			relatedCar.fuelType || null,
			relatedCar.seats ? `${relatedCar.seats} Seats` : null,
			typeof relatedCar.mileage === 'number' && relatedCar.mileage <= 70000 ? 'Low Mileage' : null,
		].filter(Boolean)

		if (tags.length > 0) return tags.slice(0, 4)
		if (relatedCar.bodyType) return [relatedCar.bodyType]
		return ['Quality Used']
	}

	const toggleFaqItem = (index) => {
		setExpandedFaqItems((previous) => ({
			...previous,
			[index]: !previous[index],
		}))
	}

	return (
		<div className="min-h-screen bg-black text-zinc-300">
			<Navbar />
			<main className="layout-shell py-8 md:py-10">
				<p className="text-[11px] text-zinc-500">
					Home <span className="mx-1 text-zinc-700">›</span>
					<Link to="/cars" className="text-zinc-400 underline-offset-2 hover:text-white hover:underline">Our Cars</Link>
					<span className="mx-1 text-zinc-700">›</span>
					<span className="text-zinc-300">{car.make} {car.model}</span>
				</p>

				<section className="motion-rise mt-6 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-10">
					<div className="space-y-6">
<Link to="/cars" className="ui-btn inline-flex items-center rounded-full bg-white px-6 py-2.5 text-[16px] font-medium text-black">
						← Back
						</Link>

						<div className="space-y-2">
							<h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{car.make} {car.model}</h1>
							<p className="text-4xl font-medium text-white">{formatPrice(car.price)}</p>
						</div>

						<div className="flex flex-wrap gap-2">
							{HERO_TAGS.map((tag) => (
								<span key={tag} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-[11px] text-zinc-300">
									{tag}
								</span>
							))}
						</div>

						{car.description && (
							<p className="max-w-xl text-sm leading-7 text-zinc-400">
								{car.description}
							</p>
						)}

						{heroSummary.length > 0 && (
							<p className="text-sm text-zinc-400">{heroSummary.join(' · ')}</p>
						)}

						<a href={enquiryMail} className="group inline-flex items-center text-sm font-medium text-white transition-colors hover:text-zinc-300">
							Enquire Now <span className="ml-2">→</span>
						</a>
					</div>

					<div className="group motion-card relative overflow-hidden rounded-[22px] border border-zinc-800 bg-zinc-950">
						{activeImageUrl ? (
							<img
								src={activeImageUrl}
								alt={`${car.make} ${car.model}`}
								decoding="async"
								className="motion-media h-[300px] w-full object-cover sm:h-[360px] md:h-[430px]"
							/>
						) : (
							<div className="flex h-[300px] items-center justify-center text-zinc-400 sm:h-[360px] md:h-[430px]">
								No image available
							</div>
						)}

						{hasMultipleImages && (
							<>
								<button
									type="button"
									onClick={goToPreviousImage}
									className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-500/70 bg-black/45 text-2xl text-white transition-colors hover:bg-black/70"
									aria-label="Previous image"
								>
									‹
								</button>
								<button
									type="button"
									onClick={goToNextImage}
									className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-500/70 bg-black/45 text-2xl text-white transition-colors hover:bg-black/70"
									aria-label="Next image"
								>
									›
								</button>

								<div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
									{imageUrls.map((_, index) => (
										<button
											type="button"
											key={`image-dot-${index}`}
											onClick={() => setCurrentImageIndex(index)}
											className={`h-2.5 w-2.5 rounded-full transition-colors ${currentImageIndex === index ? 'bg-white' : 'bg-zinc-500/60 hover:bg-zinc-300'}`}
											aria-label={`View image ${index + 1}`}
										/>
									))}
								</div>
							</>
						)}
					</div>
				</section>

				<section className="motion-rise motion-rise-delay-1 mt-12 pb-4 md:mt-14">
					<h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Vehicle Specifications</h2>
					<div className="mt-8 grid gap-x-14 gap-y-2 md:grid-cols-2">
						<div>
							{leftSpecifications.map((spec) => (
								<div key={spec.label} className="grid grid-cols-[1fr_auto] items-center border-b border-zinc-800 py-4">
									<span className="text-sm text-zinc-500">{spec.label}</span>
									<span className="text-sm text-white">{spec.value}</span>
								</div>
							))}
						</div>
						<div>
							{rightSpecifications.map((spec) => (
								<div key={spec.label} className="grid grid-cols-[1fr_auto] items-center border-b border-zinc-800 py-4">
									<span className="text-sm text-zinc-500">{spec.label}</span>
									<span className="text-sm text-white">{spec.value}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="motion-rise mt-10 border-t border-zinc-800 pt-8 md:mt-12 md:pt-10">
					<h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Features</h2>

					{selectedFeatureGroups.length === 0 ? (
						<p className="mt-6 text-sm text-zinc-500">No optional features selected for this vehicle.</p>
					) : (
						<div className="mt-6 border-t border-zinc-800">
							{selectedFeatureGroups.map((group) => (
								<div key={group.title} className="border-b border-zinc-800 py-6">
									<div className="mb-4 flex items-center justify-between">
										<h3 className="text-sm font-semibold text-zinc-200">{group.title}</h3>
										<span className="text-xl leading-none text-zinc-500">+</span>
									</div>
									<div className="flex flex-wrap gap-x-8 gap-y-3">
										{group.selectedItems.map((item) => (
											<span key={`${group.title}-${item}`} className="inline-flex items-center text-xs text-zinc-300 sm:text-sm">
												<span className="mr-2 text-zinc-400">✓</span>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					)}
				</section>

				<section className="motion-rise mt-12 rounded-[20px] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black px-6 py-8 sm:px-8 md:mt-14 md:px-10 md:py-10">
					<div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center md:gap-10">
						<div className="space-y-4">
							<h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Enquire About This Vehicle</h2>
							<p className="max-w-md text-sm leading-6 text-zinc-400">
								Contact our team to arrange a viewing, ask questions, or check availability.
							</p>
							<a href={enquiryMail} className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-transform duration-200 hover:scale-[1.02]">
								Enquire Now
							</a>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{ENQUIRY_HIGHLIGHTS.map((item) => (
								<article key={item.title} className="group motion-card rounded-xl border border-zinc-800 bg-black/35 p-4">
									<span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-300">
										<HighlightIcon type={item.icon} />
									</span>
									<h3 className="motion-link-slide text-sm font-medium text-zinc-100">{item.title}</h3>
									<p className="mt-2 text-xs leading-5 text-zinc-400">{item.description}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="motion-rise motion-rise-delay-2 mt-14 md:mt-16">
					<div className="mb-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">You May Also Like</h2>
							<p className="mt-2 text-[11px] text-zinc-500">
								Discover more quality used cars available at Indus Motor Group.
							</p>
						</div>
						<Link
							to="/cars"
							className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[11px] font-medium text-black transition-colors hover:bg-zinc-200"
						>
							View All Cars
						</Link>
					</div>

					{relatedCarsLoading ? (
						<div className="flex items-center justify-center rounded-xl border border-zinc-800 py-10">
							<div className="space-y-3 text-center">
								<div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
								<p className="text-xs text-zinc-500">Loading similar vehicles...</p>
							</div>
						</div>
					) : relatedCars.length === 0 ? (
						<div className="rounded-xl border border-zinc-800 px-6 py-10 text-center text-sm text-zinc-500">
							More vehicles are coming soon.
						</div>
					) : (
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{relatedCars.map((relatedCar) => {
								const relatedImageUrl = getImageUrl(relatedCar.images?.[0], 900)
								const relatedSummary = [
									relatedCar.year ? String(relatedCar.year) : null,
									typeof relatedCar.mileage === 'number'
										? `${relatedCar.mileage.toLocaleString('en-IE')} km`
										: null,
									relatedCar.transmission || null,
									relatedCar.fuelType || null,
								].filter(Boolean)

								return (
									<Link key={relatedCar._id} to={`/details?id=${relatedCar._id}`} className="group block">
										<article className="motion-card h-full overflow-hidden rounded-xl border border-zinc-800 bg-black transition-colors hover:border-zinc-700">
											{relatedImageUrl ? (
												<img
													src={relatedImageUrl}
													alt={`${relatedCar.make} ${relatedCar.model}`}
													loading="lazy"
													decoding="async"
													className="motion-media h-44 w-full object-cover"
												/>
											) : (
												<div className="flex h-44 items-center justify-center bg-zinc-900 text-xs text-zinc-500">
													No image available
												</div>
											)}

											<div className="space-y-3 p-4">
												<div className="flex items-start justify-between gap-3">
													<h3 className="text-2xl font-medium leading-tight text-white">{relatedCar.make} {relatedCar.model}</h3>
													<span className="motion-link-slide pt-1 text-[11px] text-zinc-300">View Details ›</span>
												</div>

												<p className="text-[11px] text-zinc-500">{relatedSummary.join(' · ')}</p>

												<div className="flex flex-wrap gap-1.5">
													{getRelatedTags(relatedCar).map((tag) => (
														<span key={`${relatedCar._id}-${tag}`} className="rounded-full border border-zinc-700 bg-zinc-950 px-2 py-1 text-[11px] text-zinc-300">
															{tag}
														</span>
													))}
												</div>

												<p className="pt-1 text-3xl font-medium text-white">
													{relatedCar.price === undefined || relatedCar.price === null || relatedCar.price === ''
														? 'Price on request'
														: formatEuroNoDecimals(relatedCar.price)}
												</p>
											</div>
										</article>
									</Link>
								)
							})}
						</div>
					)}
				</section>

				<section className="motion-rise mt-16 border-t border-zinc-800 pt-10 md:mt-20 md:pt-12">
					<div className="grid gap-8 lg:grid-cols-[290px_1fr] lg:gap-12">
						<div>
							<h2 className="max-w-[240px] text-4xl font-semibold leading-tight text-white sm:text-5xl">
								Frequently Asked Questions
							</h2>
						</div>

						<div className="border-y border-zinc-800">
							{FAQ_ITEMS.map((item, index) => {
								const isExpanded = Boolean(expandedFaqItems[index])

								return (
									<article key={item.question} className="border-b border-zinc-800 last:border-b-0">
										<button
											type="button"
											onClick={() => toggleFaqItem(index)}
											className="flex w-full items-start justify-between gap-3 py-4 text-left"
											aria-expanded={isExpanded}
										>
											<span className="text-[13px] font-medium leading-5 text-zinc-100">{item.question}</span>
											<span className="mt-0.5 text-xl leading-none text-zinc-300">{isExpanded ? '−' : '+'}</span>
										</button>

										<p className="pb-4 pr-8 text-[11px] leading-5 text-zinc-500">
											{item.answer}
										</p>

										<div className={`grid transition-all duration-300 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
											<div className="overflow-hidden">
												<p className="pb-4 pr-8 text-[11px] leading-5 text-zinc-400">{item.moreDetails}</p>
											</div>
										</div>
									</article>
								)
							})}
						</div>
					</div>
				</section>
			</main>

			<section className="motion-rise hero-shell mt-14 md:mt-16">
				<div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-950 to-[#070a0d] px-6 py-14 text-center sm:px-10 md:py-16">
					<h2 className="mx-auto max-w-[520px] text-4xl font-semibold leading-tight text-white sm:text-5xl">
						Choose Your Next Car and Have It Delivered Anywhere in Ireland
					</h2>

					<div className="mx-auto mt-8 flex w-fit items-center justify-center rounded-full bg-white p-2 text-black">
						<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M11.2 4.5v9.8" />
							<path d="m8.8 6.6 2.4-2.1 2.4 2.1" />
							<path d="M12.8 19.5V9.7" />
							<path d="m10.4 17.4 2.4 2.1 2.4-2.1" />
						</svg>
					</div>

					<p className="mt-4 text-sm text-zinc-200">Indus Motor Group</p>
					<p className="mt-1 text-xs text-zinc-500">Nationwide vehicle delivery available.</p>

					<a
						href={enquiryMail}
						className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors hover:bg-zinc-200"
					>
						Enquire Now
					</a>
				</div>
			</section>

			<footer className="mt-14 border-t border-zinc-800 bg-black md:mt-16">
				<div className="site-footer-shell">
					<div className="site-footer-grid">
						<div>
							<p className="site-footer-brand">INDUS MOTOR GROUP</p>
							<p className="site-footer-copy">
								Quality used cars with transparent pricing, trusted warranty options, and a straightforward buying experience.
							</p>

							<div className="mt-4 flex items-center gap-3 text-zinc-400">
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
							<div className="site-footer-links">
								<Link to="/" className="block transition-colors hover:text-zinc-300">Home</Link>
								<Link to="#" className="block transition-colors hover:text-zinc-300">About</Link>
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
				</div>

				<div className="border-t border-zinc-800 px-5 py-6 text-center md:px-8 md:py-8">
					<p className="site-footer-legal">
						Indus Motor Group is a trading name of Indus Motors Limited, a company registered in Ireland. Company No. 790570. Registered office: Office 2, 12A Lower Main Street, Lucan, Dublin - Ireland
					</p>
					<p className="mt-2 text-[11px] text-zinc-500">
						<Link to="/privacy-policy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</Link>
						{' '}|{' '}
						<Link to="/cookie-policy" className="underline underline-offset-2 hover:text-zinc-300">Cookie Policy</Link>
						{' '}|{' '}
						<Link to="/terms-conditions" className="underline underline-offset-2 hover:text-zinc-300">Terms & Conditions</Link>
					</p>
					<p className="mt-2 text-[11px] text-zinc-600">© 2026 Indus Motors Limited. All rights reserved.</p>
					<p className="mt-2 text-[11px] text-zinc-600">
						Website by <a href="#" className="underline underline-offset-2 hover:text-zinc-300">Dropline Media</a>
					</p>
				</div>
			</footer>
		</div>
	)
}
