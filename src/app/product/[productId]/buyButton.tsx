'use client';

import { Button } from '@/components/button/button';
import { IProduct } from '@/interfaces.ts/product';

export function BuyButton({ product }: { product: IProduct }) {
	const handleBuyProduct = async () => {
		const response = await fetch('/api/checkout', {
			method: 'POST',
			body: JSON.stringify({
				priceId: product.defaultPriceId,
			}),
		});

		const { checkoutUrl } = await response.json();

		window.location.href = checkoutUrl;
	};
	return (
		<>
			<Button className='mt-8' onClick={handleBuyProduct}>
				Comprar agora
			</Button>
		</>
	);
}
