import searching from '@/assets/illustrations/Searching - Looking.svg';
import Button from '@/components/button/button';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<div className='flex items-center justify-center'>
				<section>
					<div className='max-w-96'>
						<h1>Oooops!!</h1>
						<span>Não foi possível encontrar a página que está procurando</span>
					</div>
					<Link href='/'>
						<Button className='text-white'>Voltar para o inicio</Button>
					</Link>
				</section>
				<Image src={searching} alt='not found' width={500} height={500} />
			</div>
		</>
	);
}
