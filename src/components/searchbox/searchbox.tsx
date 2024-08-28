'use client';

import { Search } from 'lucide-react';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { useDebounceValue } from 'usehooks-ts';
interface SerachboxProps<T> {
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

	const handleOrder = useCallback(
		(order: string) => {
			setOrder(order);
			if (alphabetical) {
				console.log(order);
				if (order === 'asc')
					setResult((prevState) =>
						[...prevState].sort((a, b) => (a[attributeToSearch] > b[attributeToSearch] ? 1 : -1))
					);

				if (order === 'desc')
					setResult((prevState) =>
						[...prevState].sort((a, b) => (a[attributeToSearch] < b[attributeToSearch] ? 1 : -1))
					);
			}

			if (order === 'groupBy' && groupBy) {
				setResult((prevState) => [...prevState].sort((a, b) => (a[groupBy] > b[groupBy] ? 1 : -1)));
			}
		},
		[order]
	);

	return (
		<>
			<search
				className='shadow-grand flex w-40 items-center gap-2 rounded-lg bg-white p-4'
				onClick={handleInputFocus}
			>
				<Search className='text-slate-300' />
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
