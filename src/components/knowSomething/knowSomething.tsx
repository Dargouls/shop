import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface KnowSomethingProps extends HTMLAttributes<HTMLDivElement> {
	image: string | StaticImport;
}

export default function KnowSomething({ image, ...props }: KnowSomethingProps) {
	return (
		<Link className='w-full' href='/'>
			<div
				{...props}
				className={twMerge('flex h-full w-full flex-col gap-2 rounded bg-white', props.className)}
			>
				<h2 className='p-4 text-2xl'>Mais vendidos em Livros e HQs</h2>

				<Image src={image} alt='image' className='h-full w-full object-cover' />
				<div className='p-4 text-link'>Ver mais</div>
			</div>
		</Link>
	);
}
