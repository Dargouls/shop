import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: 'color' | 'underline' | 'default';
}

export default function Link({ children, variant, ...props }: LinkProps) {
	const variantStyle = {
		color: 'text-link hover:brightness-90',
		underline: 'hover:underline w-max',
		default: '',
	};

	return (
		<>
			<NextLink
				{...props}
				href={props.href!}
				className={twMerge(
					`flex items-center gap-2 tracking-wider outline-none transition-colors duration-500 hover:brightness-90 ${variantStyle[variant || 'default']}`,
					props.className
				)}
			>
				{children}
			</NextLink>
		</>
	);
}
