import { Heart, Star } from "lucide-react";
import Button from "./Button";

interface Props {
	name: string;
	price: number;
	description: string;
	starCount: number;
	ratings: number;
}

function ProductCard({ name, price, description, starCount, ratings }: Props) {
	const stars = [];
	for (let index = 0; index < starCount; index++) {
		stars.push(<Star size={10} fill='green' />);
	}
	return (
		<div className='flex flex-col '>
			<div className='p-3 rounded-sm bg-surface w-full relative '>
				<div className='absolute top-5 right-5 bg-white p-2 rounded-full cursor-pointer'>
					<Heart />
				</div>
				<div className='p-25'></div>
			</div>

			<div className='py-3 flex flex-col gap-1 h-full justify-between'>
				<div className='flex justify-between'>
					<h3 className='text-sm font-semibold'>{name}</h3>
					<Price>{`${price}`}</Price>
				</div>
				<p className='text-[12px] line-clamp-1'>{description}</p>

				<div className='flex items-center gap-2'>
					<div className='relative'>
						<span className='flex gap-0.5'>
							<Star size={10} />
							<Star size={10} />
							<Star size={10} />
							<Star size={10} />
							<Star size={10} />
						</span>
						<span className='absolute top-0 left-0 z-10 flex gap-0.5'>
							{...stars}
						</span>
					</div>
					<span className='text-sm'>{`(${ratings})`}</span>
				</div>

				<Button>Add to cart</Button>
			</div>
		</div>
	);
}

export default ProductCard;

const Price: React.FC<{ children: string }> = ({ children }) => {
	return (
		<span className='flex items-start'>
			<span className='text-[12px]'>$</span>
			<span>{children.split(".")[0] || children}</span>
			<span className='text-[12px]'>
				.{children.split(".")[1] || "00"}
			</span>
		</span>
	);
};
