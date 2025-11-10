import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: string;
}

function Button({ children, variant = "secondary", ...rest }: Props) {
	return (
		<div>
			<button
				{...rest}
				className={`px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
					variant == "primary"
						? "bg-black text-white"
						: variant == "secondary"
						? "border-2 border-black hover:bg-black hover:text-white "
						: ""
				}`}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
