//placeholder

const BookFeature = ({ className }) => {
	return (
		<div className={`w-full shadow-md p-6 ${className}`}>
			<div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full max-w-[90%] mx-auto">
				{/* Left Column - Large Quote */}
				<div className="text-left hidden md:flex md:text-5xl font-bold text-white flex-1 min-w-[150px]">
					JUST <br /> READ <br /> IT.
				</div>

				{/* Middle Column - Book Image Placeholder */}
				<div className="flex justify-center basis-1/3 min-w-[150px]">
					<div className="w-48 h-64 md:w-60 md:h-80 bg-gray-300 flex items-center justify-center text-gray-600">
						📖 Image Here
					</div>
				</div>

				{/* Right Column - Book Information */}
				<div className="text-left text-white basis-1/3 min-w-[150px]">
					<h3 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wide text-gray-400">
						Book of the
					</h3>
					<h2 className="text-lg sm:text-xl md:text-3xl font-bold">DAY</h2>
					<p className="mt-1 md:mt-2 sm:text-base md:text-lg">1984</p>
					<p className="text-gray-400 text-sm md:text-base">George Orwell</p>
				</div>
			</div>
		</div>
	);
};

export default BookFeature;

