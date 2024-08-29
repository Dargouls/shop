'use client';

import { ChevronDown, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../assets/brand/cat.png';
import Searchbox from '../searchbox/searchbox';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
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

				<nav className='mx-10 flex flex-1 gap-2'>
					<Searchbox
						placeholder='O que você está procurando?'
						attributeToSearch={'name'}
						list={list}
						setResult={setList}
					/>
					<DropdownMenu>
						<DropdownMenuTrigger className='flex items-center gap-1 text-lg font-bold'>
							Categorias
							<ChevronDown />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Para gatos</DropdownMenuItem>
							<DropdownMenuItem>Para cachorros</DropdownMenuItem>
							<DropdownMenuItem>Eletrônicos</DropdownMenuItem>
							<DropdownMenuItem>Camisetas</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>

				<nav className='flex gap-4 font-bold'>
					<Link href={'/cart'} className='rounded-2-5xl bg-slate-300 p-4'>
						<ShoppingCart />
					</Link>
					<User />
				</nav>
			</header>
		</>
	);
}
