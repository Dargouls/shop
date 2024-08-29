'use client';

import Image from 'next/image';

import monitor from '@/assets/images/monitor.png';
import { useMoney } from '@/hooks/formatMoney';
import { ChevronLeft, ChevronRight, Trash } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../../../components/button/button';
interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function CartCard({ ...props }: CartCardProps) {
	const { formatBRL } = useMoney();
	const [qtd, setQtd] = useState(1);

	const handleRemove = () => {
		if (qtd > 1) setQtd(qtd - 1);
	};

	const handleAdd = () => {
		setQtd(qtd + 1);
	};

	return (
		<>
			<article className='flex items-start gap-10'>
				<figure>
					<Image src={monitor} alt='produto' width={100} height={100} />
				</figure>

				<div>
					<Link href={'/'}>
						<h3 className='hover:underline'>Monitor Gamer Curvo KBM! GAMING MG320 27"</h3>
					</Link>
					<span className='opacity-50'>Parcelado no cartão em até 10x sem juros: R$ 965,90</span>
				</div>
				<div className='flex flex-col items-center justify-center gap-2'>
					<div className='flex items-end justify-center gap-2'>
						<ChevronLeft className={qtd === 1 ? 'text-slate-500' : 'text-primary'} onClick={handleRemove} />
						<div className='flex flex-col items-center justify-center gap-2'>
							<p className='font-bold'>{qtd}</p>
						</div>
						<ChevronRight className='text-primary' onClick={handleAdd} />
					</div>
					<Button className='text-sm font-semibold text-rose-700' variant='text'>
						<Trash size={16} />
						Remover
					</Button>
				</div>

				<div>
					<h4 className='font-light'>{formatBRL(84999)}</h4>
				</div>
			</article>
		</>
	);
}
