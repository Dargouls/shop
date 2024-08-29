'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import check from '@/assets/anim/check.json';
import Lottie from 'react-lottie-player';
import { useDebounceValue } from 'usehooks-ts';

interface DiscountCouponProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DiscountCoupon({ ...props }: DiscountCouponProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputFocus, isInputFocus] = useState(false);
	const [coupon, setCoupon] = useDebounceValue('', 500);
	const [applied, setApplied] = useState(false);
	const [animate, setAnimate] = useState(false);
	const code = '99143';

	const handleInputFocus = () => {
		inputRef.current?.focus();
		setAnimate(false); // Reinicia a animação
		setTimeout(() => setAnimate(true), 0); // Reativa a animação
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCoupon(e.target.value);
	};

	useEffect(() => {
		if (coupon === code) {
			setApplied(true);
		} else {
			setApplied(false);
		}
	}, [coupon]);

	return (
		<>
			<search
				className={twMerge(
					'shadow-grand relative flex w-full items-center gap-2 rounded-lg bg-slate-200 p-4 pl-0 pr-10 transition-colors duration-300 before:absolute before:h-full before:w-0 before:rounded-lg before:bg-slate-300 before:opacity-80 before:content-[""]',
					animate && 'before:animate-select-input', // Condicionalmente aplica a animação
					props.className
				)}
				onClick={handleInputFocus}
			>
				<input
					className='ml-6 w-full bg-transparent outline-none'
					type='text'
					ref={inputRef}
					onChange={handleSearch}
					onFocus={() => isInputFocus(true)}
					onBlur={() => isInputFocus(false)}
					placeholder='Cupom de desconto'
				/>
				<i className={'absolute right-0'}>
					{applied && <Lottie loop={false} play={true} className='max-w-[64px]' animationData={check} />}
				</i>
			</search>
		</>
	);
}
