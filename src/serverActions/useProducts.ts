import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export const useProducts = () => {
	const getProducts = async () => {
		const response = await stripe.products.list({
			expand: ['data.default_price'],
		});

		const products = response.data.map((product) => {
			const price = product.default_price as Stripe.Price;

			return {
				id: product.id,
				name: product.name,
				description: product.description,
				imageUrl: product.images[0],
				price: price.unit_amount || 0,
				defaultPriceId: price.id,
			};
		});

		return products;
	};

	const getProductById = async (id: string) => {
		const response = await stripe.products.retrieve(id, {
			expand: ['default_price'],
		});
		const price = response.default_price as Stripe.Price;
		const product = {
			id: response.id,
			name: response.name,
			description: response.description,
			imageUrl: response.images[0],
			price: price.unit_amount || 0,
			defaultPriceId: price.id,
		};

		return product;
	};
	return { getProducts, getProductById };
};
