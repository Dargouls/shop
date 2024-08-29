import Button from '@/components/button/button';
import { useMoney } from '@/hooks/formatMoney';
import { PackageSearch } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import DiscountCoupon from '../discountCoupon/discountCoupon';

interface ResumeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Resume({ ...props }: ResumeProps) {
	const { formatBRL } = useMoney();

	return (
		<>
			<aside className={twMerge('flex flex-col rounded bg-white p-4', props.className)}>
				<section>
					<h2 className='flex items-center gap-1 text-lg'>
						<PackageSearch size={16} />
						Resumo
					</h2>
				</section>

				<section className='flex flex-col gap-4 text-sm'>
					<div className='flex justify-between border-b-2'>
						<span className='opacity-50'>Valor dos Produtos:</span>
						<span className='text-base font-semibold text-black'>{formatBRL(246589)}</span>
					</div>
					<div className='flex justify-between border-b-2'>
						<span className='opacity-50'>Frete:</span>
						<span className='text-base font-semibold text-black'>{formatBRL(0)}</span>
					</div>

					<DiscountCoupon />
					<div className='mt-2 flex justify-between'>
						<h3 className='text-black'>Total</h3>
						<h3 className='font-semibold text-emerald-600'>{formatBRL(246589)}</h3>
					</div>

					<Link href={'/address-cart'}>
						<Button>Continuar a compra</Button>
					</Link>
				</section>
			</aside>
		</>
	);
}
