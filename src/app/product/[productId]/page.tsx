import ProductCard from '@/components/productCard/productCard';

import { useMoney } from '@/hooks/formatMoney';
import { useProducts } from '@/serverActions/useProducts';
import { BuyButton } from './buyButton';

export async function generateStaticParams() {
	const { getProducts } = useProducts();
	const products = await getProducts();
	return products.map((product) => ({ productId: product.id }));
}

export default async function Product({ params: { productId } }: { params: { productId: string } }) {
	const { getProductById } = useProducts();
	const { formatBRL } = useMoney();
	const product = await getProductById(productId);

	return (
		<div className='flex h-full justify-center gap-12'>
			<ProductCard product={product} />
			<div className='flex h-full flex-col justify-between'>
				<div>
					<h1>{product.name}</h1>
					<h2 className='font-light text-primary-400'>{formatBRL(product.price)}</h2>
					<p className='text-wrap'>{product.description}</p>
				</div>
				<BuyButton product={product} />
			</div>
		</div>
	);
}
