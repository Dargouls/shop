import HeroShop from '@/components/heroShop/heroShop';
import ProductsSelector from '@/components/productsSelector/productsSelector';

export default function Products() {
	return (
		<>
			<HeroShop />

			<section className='mt-10'>
				<h2>Catálogo</h2>
				<ProductsSelector />
			</section>
			<ProductsSelector />
			<ProductsSelector />
		</>
	);
}
