'use client';

import { Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useDebounceValue } from 'usehooks-ts';

interface CepCalc extends React.HTMLAttributes<HTMLDivElement> {}

export default function CepCalc({ ...props }: CepCalc) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [coupon, setCoupon] = useDebounceValue('', 500);
	const [applied, setApplied] = useState(false);
	const code = '';

	const handleInputFocus = () => {
		inputRef.current?.focus();
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
			<div className='flex flex-col gap-2 rounded bg-white p-4'>
				<h2 className='flex items-center gap-1 text-lg'>
					<Truck size={16} color='var(--color-primary)' fill='var(--color-primary)' />
					Entrega
				</h2>

				<div>
					<search
						className={twMerge(
							'shadow-grand flex w-full items-center gap-2 rounded-lg bg-slate-200 p-4 pr-20',
							props.className
						)}
						onClick={handleInputFocus}
					>
						<input
							className='ml-2 w-full bg-transparent outline-none'
							type='text'
							ref={inputRef}
							onChange={handleSearch}
							placeholder='Cupom de desconto'
						/>
					</search>
					<span className='font-bold text-primary'>Não lembro meu CEP</span>
				</div>
			</div>
		</>
	);
}
