import Button from '@/components/button/button';
import Stepper from '@/components/stepper/stepper';
import CartCard from '@/features/cart/cartCard/cartCard';
import Resume from '@/features/cart/resume/resume';
import { ShoppingBag, Trash } from 'lucide-react';

export default function Cart() {
	return (
		<>
			<Stepper step={1} />

			<div className='flex h-max gap-10'>
				<main className='flex h-max flex-1 flex-col gap-10 rounded bg-white p-4'>
					<section className='flex justify-between'>
						<h2 className='flex items-center gap-1 text-2xl'>
							<ShoppingBag className='stroke-primary' size={20} />
							Produtos
						</h2>
					</section>

					<section className='flex flex-col items-end justify-center gap-10'>
						<CartCard />
						<CartCard />
						<Button className='flex w-max text-sm' variant='outlined' color='rose'>
							<Trash size={16} /> Remover todos os produtos
						</Button>
					</section>
				</main>

				<aside className='w-1/3'>
					<Resume />
					{/* <CepCalc /> */}
				</aside>
			</div>
		</>
	);
}
