'use client';

import ProductCard from '@/components/productCard/productCard';
import { useProducts } from '@/serverActions/useProducts';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IProductResume {
	name: string;
	imageUrl: string;
}
export default function PurshaseSuccess() {
	const { getProductById } = useProducts();
	const params = useSearchParams();
	const [product, setProduct] = useState<IProductResume>({ name: '', imageUrl: '' });

	const sessionId = params.get('session_id');
	const getProduct = async () => {
		try {
			const response = await fetch(`/api/checkout?session_id=${sessionId}`, { method: 'GET' });
			const productData = await response.json().then((data) => {
				return { name: data.checkoutSession.name, imageUrl: data.checkoutSession.images[0] };
			});

			setProduct(productData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			<div className='flex flex-col h-full w-full items-center gap-4 justify-center'>
				<h1 className='mb-10'>Compra efetuada!</h1>

				<ProductCard className='w-36 h-36' product={product} />

				<h3 className='max-w-xl text-center'>
					Uhuul <b>Gabriel Azevedo</b>, sua <b>{product?.name}</b> já está a caminho da sua casa.
				</h3>

				<Link href={'/product'} className='text-primary font-bold'>
					Voltar ao catálogo
				</Link>
			</div>
		</>
	);
}
