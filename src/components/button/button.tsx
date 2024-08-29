import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'contained' | 'text' | 'outlined';
	color?: string;
}

export default function Button({ children, color, variant, ...props }: ButtonProps) {
	const variantStyle = {
		outlined: twMerge(
			'border-2 text-primary hover:bg-primary hover:text-white',
			color && `border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white`
		),
		text: twMerge('text-primary', color && `text-${color}-500`),
		contained: twMerge('bg-primary text-white', color && `bg-${color}-500`),
	};

	return (
		<>
			<button
				{...props}
				className={twMerge(
					`flex w-full items-center justify-center gap-2 rounded-lg border-primary px-4 py-2 tracking-wider outline-none transition-colors duration-500 hover:brightness-95 ${variantStyle[variant || 'contained']}`,
					props.className
				)}
			>
				{children}
			</button>
		</>
	);
}
