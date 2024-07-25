import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/images/Ignite shop.svg';

export default function Header() {
	return (
		<>
			<header className='fixed w-full bg-transparent py-4'>
				<Link href={'/product'} className='flex max-w-max gap-2'>
					<Image src={logo} alt='ignite shop' />
					<div className='flex flex-col'>
						<span className='font-semibold'>ignite</span>
						<span>shop</span>
					</div>
				</Link>
			</header>
		</>
	);
}
