import Link from 'next/link';
import { useProducts } from '../../serverActions/useProducts';
import SwiperCon from '../swiper/swiper';

import { useMoney } from '@/hooks/formatMoney';
import { ChevronRight, Sparkles } from 'lucide-react';
import { HTMLAttributes } from 'react';
import Button from '../button/button';
import ProductCard from '../productCard/productCard';

interface ProductsSelectorProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	moreLink?: string;
}

export default async function ProductsSelector({ title, moreLink, ...props }: ProductsSelectorProps) {
	const { getProducts } = useProducts();
	const products = await getProducts();
	const { formatBRL } = useMoney();

	return (
		<>
			<section className='flex flex-col gap-2 bg-white p-4'>
				<div className='flex items-center justify-between gap-2'>
					<h2 className='flex items-center gap-1 text-2xl font-bold'>
						<Sparkles fill='var(--color-primary)' color='var(--color-primary)' />
						{title}
					</h2>
					{moreLink && (
						<Link
							href={moreLink}
							className='flex items-center gap-1 text-xl font-bold text-primary hover:text-link'
						>
							Ver mais <ChevronRight />
						</Link>
					)}
				</div>
				<SwiperCon>
					{products.map((product) => {
						return (
							<Link key={product.id} href={`/product/${product.id}`}>
								<ProductCard product={product} className='hover:text-link'>
									<div>
										<span className='font-normal'>{product.name}</span>
										<h3 className='text-2xl font-bold'>{formatBRL(product.price)}</h3>

										<span className='opacity-50'>em 12x {formatBRL(product.price / 12)}</span>
									</div>

									<Button variant='contained'>Comprar</Button>
								</ProductCard>
							</Link>
						);
					})}
				</SwiperCon>
			</section>
		</>
	);
}
