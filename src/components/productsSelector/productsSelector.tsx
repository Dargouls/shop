import Link from 'next/link';
import { useProducts } from '../../serverActions/useProducts';
import SwiperCon from '../swiper/swiper';

import { useMoney } from '@/hooks/formatMoney';
import { HTMLAttributes } from 'react';
import ProductCard from '../productCard/productCard';

interface ProductsSelectorProps extends HTMLAttributes<HTMLDivElement> {}

export default async function ProductsSelector({ ...props }: ProductsSelectorProps) {
	const { getProducts } = useProducts();
	const products = await getProducts();
	const { formatBRL } = useMoney();

	return (
		<>
			<section className=''>
				<SwiperCon>
					{products.map((product) => {
						return (
							<Link key={product.id} href={`/product/${product.id}`}>
								<ProductCard product={product} className='hover:text-link'>
									<div>
										<h3>{product.name}</h3>
										<span className='overflow-hidden text-clip text-sm opacity-50'>
											{product?.description?.toString().slice(0, 30)}
											{(product?.description?.toString().length ?? 0) > 30 && '...'}
										</span>

										<h2 className='font-light'>{formatBRL(product.price)}</h2>

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
