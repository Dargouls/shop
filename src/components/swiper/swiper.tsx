'use client';
import React from 'react';

import { twMerge } from 'tailwind-merge';

import 'swiper/css';
import 'swiper/css/navigation';

import { useKeenSlider } from 'keen-slider/react';
const breakpoints = {
	'(min-width: 320px)': { slides: { perView: 1, spacing: 16 } },
	'(min-width: 550px)': { slides: { perView: 2, spacing: 16 } },
	'(min-width: 991px)': { slides: { perView: 3, spacing: 16 } },
	'(min-width: 1400px)': { slides: { perView: 3, spacing: 16 } },
};

interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}
export default function SwiperCon({ children, className, ...props }: SwiperProps) {
	const [sliderRef, instanceRef] = useKeenSlider({
		breakpoints: breakpoints,
	});

	return (
		<>
			<div ref={sliderRef} className='keen-slider'>
				{React.Children.map(children, (child, index) => (
					<div className='keen-slider__slide'>{child}</div>
				))}
			</div>
		</>
	);
}
