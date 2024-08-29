'use client';

import imgPlaceholder from '@/assets/t-shirt/2_explorer-t-shirt 1 blur.png';
import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import ImageContainer from '../imageContainer/imageContainer';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
	product: { name: string; imageUrl: string };
}
export default function ProductCard({ product, ...props }: ProductCardProps) {
	return (
		<>
			<div
				className={twMerge(
					'group relative flex h-full cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white object-cover py-4',
					props.className
				)}
			>
				<div className='flex gap-1'>
					<Star fill='#facc15' size={14} color='none' />
					<Star fill='#facc15' size={14} color='none' />
					<Star fill='#facc15' size={14} color='none' />
					<Star fill='#facc15' size={14} color='none' />
					<StarHalf fill='#facc15' size={14} color='none' />
					<span className='text-xs'>(161)</span>
				</div>
				<ImageContainer className='h-40 w-40'>
					<Image
						src={product.imageUrl}
						placeholder='blur'
						blurDataURL={imgPlaceholder.src}
						loading='lazy'
						overrideSrc={imgPlaceholder.src}
						// onLoad={() => setImageLoaded(true)}
						width={100}
						height={100}
						alt={product.name}
						className='h-full w-full object-cover'
					/>
				</ImageContainer>

				{props.children}
			</div>
		</>
	);
}
