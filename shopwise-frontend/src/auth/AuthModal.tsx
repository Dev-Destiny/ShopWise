import { useEffect, useState } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Button from "@/components/Button";

function AuthModal() {
	const { isOpen, setIsOpen } = useAuthStore();
	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		// return () => (document.body.style.overflow = "auto");
	}, [isOpen]);

	if (!isOpen) return;
	return (
		<div
			onClick={() => setIsOpen(false)}
			className='fixed inset-0 overflow-y-scroll min-h-screen w-full z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
		>
			<div
				className='bg-white rounded-3xl p-10 min-w-1/3 '
				onClick={(e) => e.stopPropagation()}
			>
				<form
					action=''
					className='flex flex-col items-center space-y-5 '
				>
					<div className='text-center'>
						<h1 className='text-3xl font-semibold font-header'>
							Welcome to Shopwise
						</h1>
						<p className='text-muted-text'>The best tech plug.</p>
					</div>

					<div className='flex flex-col gap-5 w-full'>
						<div className='flex flex-col gap-3'>
							<Label htmlFor='email'>Email</Label>
							<Input
								placeholder='Email'
								id='email'
								type='email'
								className=''
							/>
						</div>

						<div className='flex flex-col gap-3'>
							<Label htmlFor='password'>Password</Label>
							<Input
								placeholder='Password'
								id='password'
								type='password'
							/>
						</div>

						{!isLogin && (
							<div className='flex flex-col gap-3'>
								<Label htmlFor='confpassword'>
									Confirm Password
								</Label>
								<Input
									placeholder='Confirm Password'
									id='confpassword'
									type='password'
								/>
							</div>
						)}
					</div>
					{isLogin ? (
						<Button width='full' variant='primary'>
							Log in
						</Button>
					) : (
						<Button width="full" variant="primary">Sign Up</Button>
					)}
					<div className='flex gap-2 text-sm'>
						<p className=''>
							{isLogin
								? "Don't have an account?"
								: "Already have an account?"}
						</p>
						<p
							className='text-blue-600 cursor-pointer'
							onClick={() => setIsLogin(!isLogin)}
						>
							{isLogin ? "Sign Up" : "Log In"}
						</p>
					</div>
					<p>OR</p>
					<Button width='full'>
						<span>Continue With Google</span>
					</Button>
				</form>
			</div>
		</div>
	);
}

export default AuthModal;
