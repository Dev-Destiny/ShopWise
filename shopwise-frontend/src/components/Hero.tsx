function Hero() {
	return (
		<div className="pb-15">
			<div className='container rounded-md flex overflow-hidden bg-accent-one'>
				<div className='flex-1 space-y-5 p-12'>
					<h1 className='text-4xl font-bold'>
						Tech You Love. Prices You Can’t Resist.
					</h1>
					<button className='bg-black text-white p-2 px-5 rounded-lg text-sm'>
						Buy Yours Now
					</button>
				</div>

				<div className='relative w-full flex-1 overflow-hidden'>
					<img
						src='girl-with-headphone.png'
						alt=''
						className='absolute object-fit top-0 w-3/4'
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
