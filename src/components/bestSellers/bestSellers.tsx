import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import camera from '@/assets/images/camera.png';
import Link from 'next/link';

interface bestSellersProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function BestSellers({ ...props }: bestSellersProps) {
	return (
		<>
			<Link
				href='/'
				{...props}
				className={twMerge('flex w-max min-w-[300px] flex-col gap-2 rounded bg-white', props.className)}
			>
				<h2 className='text-wrap p-4 text-2xl'>Mais vendidos em Livros e HQs AAAAAA</h2>

				<Image src={camera} alt='camera' className='h-full object-cover' />
				<div className='p-4 text-link'>Ver mais</div>
			</Link>
		</>
	);
}
