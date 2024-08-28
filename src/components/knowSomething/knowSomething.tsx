import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import ImageContainer from '../imageContainer/imageContainer';

interface KnowSomethingProps extends HTMLAttributes<HTMLDivElement> {
	image: string | StaticImport;
}

export default function KnowSomething({ image, ...props }: KnowSomethingProps) {
	return (
		<Link href='/'>
			<div {...props} className={twMerge('rounded flex h-full flex-col gap-2 bg-white p-4', props.className)}>
				<h2 className='text-2xl'>Mais vendidos em Livros e HQs</h2>
				<ImageContainer>
					<Image src={image} alt='image' className='h-full object-cover' />
				</ImageContainer>
				<div className='text-link'>Ver mais</div>
			</div>
		</Link>
	);
}
