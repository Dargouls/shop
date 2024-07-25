import Link from 'next/link';
import { useProducts } from '../../serverActions/useProducts';
import CardFooter from '../productCard/cardFooter';
import ProductCard from '../productCard/productCard';
import SwiperCon from '../swiper/swiper';

export default async function ProductsSelector() {
	const { getProducts } = useProducts();
	const products = await getProducts();
	return (
		<>
			<SwiperCon>
				{products.map((product) => {
					return (
						<Link key={product.id} href={`/product/${product.id}`}>
							<ProductCard product={product}>
								<CardFooter className='group-hover:translate-y-0 group-hover:opacity-90' product={product} />
							</ProductCard>
						</Link>
					);
				})}
			</SwiperCon>
		</>
	);
}
