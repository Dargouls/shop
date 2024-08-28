import BestSellers from '@/components/bestSellers/bestSellers';
import HeroShop from '@/components/heroShop/heroShop';
import KnowSomething from '@/components/knowSomething/knowSomething';
import ProductsSelector from '@/components/productsSelector/productsSelector';

import candies from '@/assets/images/candies.png';
export default function Products() {
	return (
		<>
			<HeroShop />

			<main className='mt-10 flex flex-col gap-10'>
				<section>
					<ProductsSelector moreLink='/' title='Recomendações' />
				</section>

				<section className='flex gap-4'>
					<BestSellers />
					<KnowSomething image={candies} />
					<KnowSomething image={candies} />
					<KnowSomething image={candies} />
				</section>

				<section>
					<ProductsSelector moreLink='/' title='Camisas' />
				</section>
				<section>
					<ProductsSelector moreLink='/' title='Casa' />
				</section>
				<section>
					<ProductsSelector moreLink='/' title='Eletrônicos' />
				</section>
			</main>
		</>
	);
}
