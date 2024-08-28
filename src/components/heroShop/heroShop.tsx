import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import cat from '@/assets/images/cat.png';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroShopProps extends HTMLAttributes<HTMLDivElement> {}

export default function HeroShop({ ...props }: HeroShopProps) {
	return (
		<section className={twMerge('flex w-full items-center justify-center gap-4 px-40', props.className)}>
			<div className='flex h-full flex-col justify-between'>
				<div>
					<h1 className='font-bold'>Community of Cat Experts</h1>
					<span className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut tellus varius dolor posuere
						tempus sed id mauris. Nulla ullamcorper leo sem, non sagittis lacus rutrum sollicitudin.
					</span>
				</div>

				<Link href={'/blog'} className='mt-2 flex w-max items-center gap-1 hover:text-link'>
					Veja mais ofertas relacionadas
					<ChevronRight />
				</Link>
			</div>

			<Image src={cat} alt='cat' width={300} height={300} />
		</section>
	);
}
