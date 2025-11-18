import Button from "@/components/Button";

function Hero() {
	return (
		<div className="pb-15 container">
			<div className=' rounded-md flex overflow-hidden bg-accent-one'>
				<div className='flex-1 space-y-5 p-8 lg:p-12'>
					<h1 className='text-3xl md:text-4xl font-bold font-header'>
						Tech You Love. Prices You Can’t Resist.
					</h1>
					<Button variant="primary">Buy Yours Now</Button>
				</div>

				<div className='relative w-full flex-1 overflow-hidden md:inline lg:inline hidden'>
					<img
						src='girl-with-headphone.png'
						alt=''
						className='absolute object-fit top-0 left-[25%] w-1/2'
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
