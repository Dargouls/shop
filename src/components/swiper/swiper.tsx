'use client';
import React from 'react';

import { twMerge } from 'tailwind-merge';

import 'swiper/css';
import 'swiper/css/navigation';

import { useKeenSlider } from 'keen-slider/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const breakpoints = {
	'(min-width: 320px)': { slides: { perView: 1, spacing: 16 } },
	'(min-width: 550px)': { slides: { perView: 2, spacing: 16 } },
	'(min-width: 991px)': { slides: { perView: 4, spacing: 16 } },
	'(min-width: 1400px)': { slides: { perView: 5, spacing: 16 } },
};

interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export default function SwiperCon({ children, ...props }: SwiperProps) {
	const [sliderRef, instanceRef] = useKeenSlider({
		breakpoints: breakpoints,
	});

	return (
		<>
			<div className='relative'>
				<div ref={sliderRef} className={twMerge('keen-slider', props.className)}>
					{React.Children.map(children, (child, index) => (
						<div className='keen-slider__slide'>{child}</div>
					))}
				</div>

				<div
					className='rounded absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white px-2 py-10 shadow-2xl hover:brightness-95'
					onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
				>
					<ArrowLeft
					// disabled={currentSlide === 0}
					/>
				</div>
				<div
					className='rounded absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white px-2 py-10 shadow-2xl hover:brightness-95'
					onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
				>
					<ArrowRight
					// disabled={
					//   currentSlide ===
					//   instanceRef.current.track.details.slides.length - 1
					// }
					/>
				</div>
			</div>
		</>
	);
}
