import SwiperCon from '@/components/swiper/swiper';
import Image, { StaticImageData } from 'next/image';

import { GalleryHorizontalEnd } from 'lucide-react';

import calca from '@/assets/images/calca.png';
import catFood from '@/assets/images/cat-food.png';
import monitor from '@/assets/images/monitor.png';
import shirt from '@/assets/t-shirt/2_explorer-t-shirt 1.png';

interface CardSectionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const breakpoints = {
	'(min-width: 320px)': { slides: { perView: 1, spacing: 16 } },
	'(min-width: 550px)': { slides: { perView: 2, spacing: 16 } },
	'(min-width: 991px)': { slides: { perView: 7, spacing: 16 } },
	'(min-width: 1400px)': { slides: { perView: 8, spacing: 16 } },
};

export default function CardSections({ ...props }: CardSectionsProps) {
	return (
		<>
			<nav className='flex flex-col gap-4 bg-white p-4'>
				<h2 className='flex items-center gap-1 text-2xl font-bold'>
					<GalleryHorizontalEnd fill='var(--color-primary)' color='var(--color-primary)' />
					Departamentos
				</h2>

				<SwiperCon customBreakpoints={breakpoints} loop>
					<Slide image={shirt}>Camisetas</Slide>
					<Slide image={monitor}>Eletrônicos</Slide>
					<Slide image={catFood}>Gatos</Slide>
					<Slide image={catFood}>Cachorros</Slide>
					<Slide image={calca}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
					<Slide image={catFood}>Calças</Slide>
				</SwiperCon>
			</nav>
		</>
	);
}

function Slide({ image, children }: { children: React.ReactNode; image: StaticImageData }) {
	return (
		<>
			<article className='flex flex-col items-center justify-center gap-10 bg-white'>
				<figure>
					<Image src={image} alt='image' height={100} />
				</figure>

				<h4 className='text-xl text-primary'>{children}</h4>
			</article>
		</>
	);
}
