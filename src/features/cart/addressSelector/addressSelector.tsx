'use client';

import Link from '@/components/link/link';

import { RadioGroup, RadioGroupItem, RadioItemContainer } from '@/components/ui/radio-group';
import { useMoney } from '@/hooks/formatMoney';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AddressSelectorProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AddressSelector({ ...props }: AddressSelectorProps) {
	const [addressSelected, setAddressSelected] = useState('1');
	const { formatBRL } = useMoney();

	const handleChangeAddress = (e: string) => {
		setAddressSelected(e);
	};

	return (
		<>
			<main className={twMerge(props.className)}>
				<section>
					<RadioGroup className='gap-4' defaultValue='1' onValueChange={handleChangeAddress}>
						<RadioItemContainer className='flex w-full rounded bg-white p-4'>
							<RadioGroupItem id='address-one' value='1' />
							<label className='relative w-full' htmlFor='address-one'>
								<h3 className='mb-2'>Trabalho</h3>
								<p>Rua dos alfeneiros, 04</p>
								<p>Xique-xique - Bahia</p>

								<details open={addressSelected === '1'}>
									<summary hidden>AAA</summary>
									<hr className='my-4 w-full border-slate-200' />
									<Link href='/' variant='color'>
										Editar endereço
									</Link>
								</details>

								<span className='absolute right-0 top-1/2 -translate-y-4 text-lg'>{formatBRL(1000)}</span>
							</label>
						</RadioItemContainer>

						<RadioItemContainer className='rounded bg-white p-4'>
							<RadioGroupItem id='address-two' value='2' />
							<label className='relative w-full' htmlFor='address-two'>
								<h3>Casa</h3>
								<p>Rua Clube de Regatas Brasil, 228</p>
								<p>Maceió - Alagoas</p>

								<details open={addressSelected === '2'}>
									<summary hidden>AAA</summary>
									<hr className='my-4 w-full border-slate-200' />
									<Link href='/' variant='color'>
										Editar endereço
									</Link>
								</details>

								<span className='absolute right-0 top-1/2 -translate-y-4 text-lg'>{formatBRL(1200)}</span>
							</label>
						</RadioItemContainer>
					</RadioGroup>
				</section>
			</main>
		</>
	);
}
