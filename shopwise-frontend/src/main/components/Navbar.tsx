import {
	ChevronDown,
	MenuIcon,
	Phone,
	Search,
	ShoppingCart,
	User,
} from "lucide-react";
import { useState } from "react";
import { motion, stagger, AnimatePresence } from "motion/react";
import { useAuthStore } from "../../store/useAuthStore";
import Button from "../../components/Button";
import { useScreenType } from "@/hooks/useScreenSize";

const categories = [
	{ label: "Headphones & Earbuds", link: "/", isSpecial: false },
	{ label: "Smartwatches & Fitness Bands", link: "/", isSpecial: false },
	{ label: "Speakers & Sound Systems", link: "/", isSpecial: false },
	{ label: "Chargers & Power Banks", link: "/", isSpecial: false },
	{ label: "Smart Home Devices", link: "/", isSpecial: false },
	{ label: "Computer & Mobile Accessories", link: "/", isSpecial: false },
	{ label: "Gaming Gear", link: "/", isSpecial: false },
	{ label: "Deals", link: "/", isSpecial: true },
	{ label: "What's New", link: "/", isSpecial: true },
	{ label: "Delivery", link: "/", isSpecial: true },
];

// const dropdownCat = categories.filter(cat => !cat.isSpecial)
const special = categories.filter((cat) => cat.isSpecial);

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
	const [isSearch, setIsSearch] = useState(false);
	const { setIsOpen } = useAuthStore();
	const { type } = useScreenType();
	return (
		<div className='w-full relative'>
			<div className="bg-black text-white text-[12px] py-2">
				<div className="container flex justify-between items-center">
					<div className="flex gap-2">
						<Phone size={15}/>
						<p>+2349043044492</p>
					</div>
					<div>
						<p>Get 50% Off on Selected Items | Shop Now</p>
					</div>
					<div className="flex gap-5">
						<div className="flex gap-1">
							<span>Eng</span>
							<ChevronDown size={20}/>
						</div>
						<div className="flex gap-1">
							<span>Location</span>
							<ChevronDown size={20}/>
						</div>
					</div>
				</div>
			</div>


			<div className='flex lg:gap-10  py-5  items-center justify-between container'>
				<div className='flex gap-5'>
					{type !== "desktop" && (
						<div>
							{/* <Button
								variant='icon'
								onClick={() => setUnderNav(!underNav)}
							>
								<MenuIcon />
							</Button> */}
							<MenuIcon onClick={() => setUnderNav(!underNav)}/>
							<Menu underNav={underNav} />
						</div>
					)}

					<div className='flex items-center gap-3'>
						<ShoppingCart />
						<h1 className='md:text-2xl lg:text-2xl text-xl  font-header font-semibold'>
							ShopWise
						</h1>
					</div>
				</div>

				<div className='flex gap-10'>
					{type == "desktop" && (
						<motion.div
							className='flex items-center gap-1'
							onClick={() => setUnderNav(!underNav)}
						>
							<span className='text-md'>Category</span>
							<ChevronDown
								size={20}
								className={
									underNav
										? "rotate-180 transition-all duration-300"
										: "rotate--180 transition-all duration-300"
								}
							/>
							<Menu underNav={underNav} />
						</motion.div>
					)}

					{!isSearch && (
						<motion.div className='lg:inline hidden' layout>
							<ul className='flex gap-7 font-semibold text-sm '>
								{special.map((cat, index) => (
									<li
										key={index}
										className='cursor-pointer hover:text-accent-two'
									>
										{cat.label}
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>

				{type == "desktop" && (
					<motion.div
						layout
						className={`bg-surface px-5 py-2 rounded-lg flex `}
						style={{ flexGrow: isSearch ? "1" : "1" }}
						transition={{ ease: "easeOut", duration: 0.2 }}
					>
						<motion.input
							type='text'
							placeholder='Search Product'
							className='text-sm outline-0 w-full'
							onFocus={() => setIsSearch(true)}
							onBlur={() => setIsSearch(false)}
						/>
						<Search size={20} />
					</motion.div>
				)}

				<div className='flex items-center gap-1'>
					{type !== "desktop" && (
						<Button variant='icon'>
							<Search />
						</Button>
					)}
					<Button variant='icon' onClick={() => setIsOpen(true)}>
						{/* <p className=''>Sign Up</p> */}
						{/* Sign up */}
						<User />
					</Button>

					{type == "desktop" ? (
						<Button variant='icon'>
							<ShoppingCart />
							<span className=''>Cart</span>
						</Button>
					) : (
						<Button variant='icon' className=''>
							<ShoppingCart />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;



function Menu({ underNav }: { underNav: Boolean }) {
	return (
		<AnimatePresence>
			{underNav && (
				<motion.div
					className='absolute pb-10 bg-white top-full left-0 w-full z-10 shadow-soft'
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
							{categories.map((category, index) => (
								<motion.li
									key={index}
									variants={categoryVariant}
									transition={{
										ease: "easeInOut",
										duration: 0.5,
									}}
									className={`text-secondary-text font-semibold text-xl hover:text-black cursor-pointer ${
										category.isSpecial && "lg:hidden"
									}`}
								>
									{category.label}
								</motion.li>
							))}
						</AnimatePresence>
					</motion.ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
