import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import camera from '@/assets/images/camera.png';
import Link from 'next/link';
import ImageContainer from '../imageContainer/imageContainer';

interface bestSellersProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function BestSellers({ ...props }: bestSellersProps) {
	return (
		<>
			<Link
				href='/'
				{...props}
				className={twMerge('rounded flex w-max flex-col gap-2 bg-white p-4', props.className)}
			>
				<h2 className='text-2xl'>Mais vendidos em Livros e HQs</h2>
				<ImageContainer>
					<Image src={camera} alt='camera' className='h-full object-cover' />
				</ImageContainer>
				<div className='text-link'>Ver mais</div>
			</Link>
		</>
	);
}
