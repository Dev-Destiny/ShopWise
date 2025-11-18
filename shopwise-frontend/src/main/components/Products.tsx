import { ChevronDown, LucideSlidersHorizontal } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../store";
import { Link } from "react-router";

const filters = ["Price", "Review", "Color", "Offer"];

function ProductSection() {
	return (
		<div className='container'>
			<div className='flex justify-between items-center mb-10'>
				<ul className='flex gap-2'>
					{filters.map((label, index) => (
						<li
							key={index}
							className='rounded-lg bg-surface py-2 px-4 text-sm flex items-center gap-1 cursor-pointer group '
						>
							<span>{label}</span>
							<ChevronDown
								size={20}
								className='group-hover:rotate-180 transition-all duration-300'
							/>
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

				<div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-5'>
					{products.map((product) => (
						<Link to={`/products/${product.id}`}>
							<ProductCard
								key={product.id}
								name={product.name}
								description={product.description}
								price={product.price}
								ratings={product.ratings}
								starCount={product.stars}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductSection;
