'use client';

import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onclick?: () => void;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<>
			<button
				className={twMerge(
					'w-full rounded-lg bg-primary py-4 transition-all duration-300 hover:opacity-80 active:brightness-90',
					props.className
				)}
				onClick={props.onClick}
			>
				{children}
			</button>
		</>
	);
}
