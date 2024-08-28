import Link from 'next/link';
import { useProducts } from '../../serverActions/useProducts';
import SwiperCon from '../swiper/swiper';

import { useMoney } from '@/hooks/formatMoney';
import { ChevronRight } from 'lucide-react';
import { HTMLAttributes } from 'react';
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
				<div className='flex items-end gap-2'>
					<h2 className='text-2xl'>{title}</h2>
					{moreLink && (
						<Link href={moreLink} className='flex gap-1 hover:text-link'>
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
										<h3>{product.name}</h3>
										<h3 className='text-2xl font-light'>{formatBRL(product.price)}</h3>

										<span className='opacity-40'>em 12x {formatBRL(product.price / 12)}</span>
									</div>
								</ProductCard>
							</Link>
						);
					})}
				</SwiperCon>
			</section>
		</>
	);
}
