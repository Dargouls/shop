import { HTMLAttributes } from 'react';

import { User as UserImg } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface UserProps extends HTMLAttributes<HTMLDivElement> {}

export default function User({ ...props }: UserProps) {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className='rounded-2-5xl bg-slate-300 p-4 outline-none'>
					<UserImg />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Minhas compras</DropdownMenuItem>
					<DropdownMenuItem>Sair</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
