'use client';

import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../assets/brand/logo.png';
import Searchbox from '../searchbox/searchbox';
import User from '../user/user';

export default function Header() {
	const [list, setList] = useState([]);

	return (
		<>
			<header className='flex w-full items-center justify-between bg-transparent py-4'>
				<div className='flex gap-4'>
					<Link href={'/product'} className='flex max-w-max gap-2'>
						<Image src={logo} alt='Ad shop' height={60} />
						<div className='flex flex-col'>
							<span className='font-semibold'>Ad Shop</span>
						</div>
					</Link>
					<Searchbox attributeToSearch={'name'} list={list} setResult={setList} />
				</div>

				<nav className='flex gap-10 font-bold'>
					<User />
					<Link href={'/blog'} className='rounded-full bg-slate-500 p-4'>
						<ShoppingCart />
					</Link>
				</nav>
			</header>
		</>
	);
}
