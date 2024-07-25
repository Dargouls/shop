'use client';

import imgPlaceholder from '@/assets/t-shirt/2_explorer-t-shirt 1 blur.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
	product: { name: string; imageUrl: string };
}
export default function ProductCard({ product, ...props }: ProductCardProps) {
	return (
		<>
			<div
				className={twMerge(
					'group relative flex object-cover cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-primary to-secondary p-1',
					props.className
				)}
			>
				<Image
					src={product.imageUrl}
					placeholder='blur'
					blurDataURL={imgPlaceholder.src}
					loading='lazy'
					overrideSrc={imgPlaceholder.src}
					// onLoad={() => setImageLoaded(true)}
					width={384}
					height={448}
					alt={product.name}
				/>
				{props.children}
			</div>
		</>
	);
}
