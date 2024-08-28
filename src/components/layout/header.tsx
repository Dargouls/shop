'use client';

import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../assets/brand/cat.png';
import Searchbox from '../searchbox/searchbox';
import User from '../user/user';

export default function Header() {
	const [list, setList] = useState([]);

	return (
		<>
			<header className='flex w-full items-center justify-between bg-transparent px-4 py-4'>
				<Link href={'/product'} className='flex max-w-max flex-col'>
					<Image src={logo} alt='Ad shop' height={60} />
					<span className='font-semibold'>Ad Shop</span>
				</Link>

				<Searchbox
					className='mx-4 flex-1'
					placeholder='O que você está procurando?'
					attributeToSearch={'name'}
					list={list}
					setResult={setList}
				/>
				<nav className='flex gap-4 font-bold'>
					<User />
					<Link href={'/blog'} className='rounded-2-5xl bg-slate-300 p-4'>
						<ShoppingCart />
					</Link>
				</nav>
			</header>
		</>
	);
}
