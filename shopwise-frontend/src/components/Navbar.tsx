import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { motion, stagger, AnimatePresence } from "motion/react";

const categories = [
	"Headphones & Earbuds",
	"Smartwatches & Fitness Bands",
	"Speakers & Sound Systems",
	"Chargers & Power Banks",
	"Smart Home Devices",
	"Computer & Mobile Accessories",
	"Gaming Gear",
];

const categoryVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};
function Navbar() {
	const [underNav, setUnderNav] = useState(false);
	const [open, setOpen] = useState(false);
	return (
		<div className='w-full py-5 relative'>
			<div className='flex container items-center gap-10'>
				<div className='flex items-center gap-3'>
					<ShoppingCart />
					<h1 className='text-2xl font-header font-semibold'>
						ShopWise
					</h1>
				</div>

				<div className='flex gap-5 items-center flex-1 justify-between'>
					<motion.div
						className='flex items-center gap-1 group'
						onHoverStart={() => setUnderNav(true)}
					>
						<span className='text-md'>Category</span>
						<ChevronDown size={20} className={underNav ? "rotate-180 transition-all duration-300" : "rotate--180 transition-all duration-300"}/>

						<AnimatePresence>
							{underNav && (
								<motion.div
									className='absolute pb-10 bg-white top-full left-0 w-full z-10 shadow-soft'
									onHoverEnd={() => setUnderNav(false)}
									style={{ originY: 0 }}
									initial={{ scaleY: 0, opacity: 0 }}
									whileInView={{ scaleY: 1, opacity: 1 }}
									transition={{
										ease: "linear",
										duration: 0.1,
									}}
									exit={{ scaleY: 0, opacity: 0 }}
								>
									<motion.ul
										className='container space-y-3'
										initial='hidden'
										whileInView='visible'
										exit='hidden'
										transition={{
											delayChildren: stagger(0.04),
										}}
									>
										<AnimatePresence propagate>
											{categories.map(
												(category, index) => (
													<motion.li
														key={index}
														variants={
															categoryVariant
														}
														transition={{
															ease: "easeInOut",
															duration: 0.5,
														}}
														className='text-secondary-text font-semibold text-xl hover:text-black cursor-pointer'
													>
														{category}
													</motion.li>
												)
											)}
										</AnimatePresence>
									</motion.ul>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>

					<div className=''>
						<ul className='flex gap-10 font-semibold text-sm'>
							<li onClick={() => setOpen(open ? false : true)}>Deals</li>
							<li>What's New</li>
							<li>Delivery</li>
						</ul>
					</div>

					<div className='bg-surface px-5 py-2 rounded-lg flex min-w-70'>
						<input
							type='text'
							placeholder='Search Product'
							className='text-sm outline-0 w-full'
						/>
						<Search size={20} />
					</div>
				</div>

				<div className='flex items-center gap-5'>
					<div className='flex items-center gap-2'>
						<User />
						<span>Account</span>
					</div>
					<div className='flex items-center gap-2'>
						<ShoppingCart />
						<span>Cart</span>
					</div>
				</div>
			</div>
			<div className="fixed h-screen w-full bg-gray-600 z-90 top-0"></div>
		</div>
	);
}

export default Navbar;
