'use client';

import { Search } from 'lucide-react';
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useDebounceValue } from 'usehooks-ts';
interface SerachboxProps<T> extends HTMLAttributes<HTMLDivElement> {
	list: T[];
	reorderable?: boolean;
	groupBy?: keyof T;
	alphabetical?: boolean;
	attributeToSearch: keyof T;
	setResult: Dispatch<SetStateAction<T[]>>;
	placeholder?: string;
}

export default function Searchbox<T>({
	list,
	attributeToSearch,
	alphabetical,
	groupBy,
	reorderable,
	setResult,
	placeholder,
	...props
}: SerachboxProps<T>) {
	const [order, setOrder] = useDebounceValue('asc', 200);
	const [search, setSearch] = useDebounceValue('', 200);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputFocus = () => {
		inputRef.current?.focus();
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (list) {
			console.log('list', list);
			const filteredList = list.filter((item) =>
				item[attributeToSearch]
					?.toString()
					.toLowerCase()
					.normalize('NFD')
					.replace(/[^a-zA-Z0-9\s]/g, '')
					.includes(
						search
							.toString()
							.normalize('NFD')
							.replace(/[^a-zA-Z0-9\s]/g, '')
							.toLowerCase()
							.trim()
					)
			);
			setResult(filteredList);
		}
	}, [search]);

	return (
		<>
			<search
				className={twMerge(
					'shadow-grand flex w-full items-center gap-2 rounded-lg bg-white p-4',
					props.className
				)}
				onClick={handleInputFocus}
			>
				<Search className='text-slate-500' />
				<hr className='w-4 rotate-90 border-slate-200' />

				<input
					className='ml-2 w-full bg-transparent outline-none'
					type='text'
					ref={inputRef}
					onChange={handleSearch}
					placeholder={placeholder}
				/>
			</search>
		</>
	);
}
