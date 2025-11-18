import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "secondary" | "primary" | "ghost" | "accent" | "icon";
	width?: "fit" | "full";
}

function Button({
	children,
	variant = "secondary",
	width = "fit",
	...rest
}: Props) {
	return (
		<div className='w-full'>
			<button
				{...rest}
				className={` cursor-pointer rounded-lg transition-all duration-200 ${
					variant == "primary"
						? "bg-black text-white hover:bg-transparent px-5 py-2 hover:text-black border-2 border-transparent hover:border-black"
						: variant == "secondary"
						? "border-2 border-black hover:bg-black px-5 py-2 hover:text-white "
						: variant == "ghost" 
						? "text-black hover:bg-surface px-5 py-2 "
						: variant == "accent" 
						? "bg-accent-one text-black hover:bg-black px-5 py-2  hover:text-white transition-all duration-200"
						: variant == "icon" 
						? " p-2 hover:bg-surface flex gap-3 w-full"
						: ""
				} ${width == "full" ? "w-full" : ""}`}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
