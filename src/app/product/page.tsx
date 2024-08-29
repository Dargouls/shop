import brinquedos from '@/assets/images/brinquedos.png';
import camera from '@/assets/images/camera.png';
import casa from '@/assets/images/casa.png';

import HeroShop from '@/components/heroShop/heroShop';
import KnowSomething from '@/components/knowSomething/knowSomething';
import ProductsSelector from '@/components/productsSelector/productsSelector';

import CardSections from '@/features/initialPage/cardSections/cardSections';
export default function Products() {
	return (
		<>
			<HeroShop />

			<main className='mt-10 flex flex-col gap-10'>
				<section>
					<ProductsSelector moreLink='/' title='Recomendações' />
				</section>

				<section>
					<CardSections />
				</section>

				<section className='flex w-full gap-4'>
					<KnowSomething className='w-full' image={camera} />
					<KnowSomething image={brinquedos} />
					<KnowSomething image={casa} />
				</section>

				<section>
					<ProductsSelector moreLink='/' title='Seu histórico' />
				</section>
			</main>
		</>
	);
}
