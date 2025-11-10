import { ChevronDown, LucideSlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../store";

const filters = ["Price", "Review", "Color", "Offer"];

function ProductSection() {
	return (
		<div className='container'>
			<div className='flex justify-between items-center mb-10'>
				<ul className='flex gap-2'>
					{filters.map((label, index) => (
						<li
							key={index}
							className='rounded-lg bg-surface py-2 px-4 text-sm flex items-center gap-1 cursor-pointer'
						>
							<span>{label}</span>
							<ChevronDown size={20} />
						</li>
					))}
					<li className='rounded-lg bg-surface py-2 px-4 text-sm flex items-center gap-1  cursor-pointer'>
						<span>All Filters</span>
						<LucideSlidersHorizontal size={20} />
					</li>
				</ul>

				<button className='border py-2 px-4 flex items-center rounded-lg text-sm gap-1 cursor-pointer'>
					<span>Sort By</span>
					<ChevronDown size={20} />
				</button>
			</div>

			<div>
				<h1 className='header'>Hottest Products For You!</h1>

				<div className='w-full grid grid-cols-4 gap-5'>
					{products.map((product) => (
						<ProductCard 
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            ratings={product.ratings}
                            starCount={product.stars}
                        />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductSection;
