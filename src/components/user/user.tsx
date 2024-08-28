import { HTMLAttributes } from 'react';

import { User as UserImg } from 'lucide-react';

interface UserProps extends HTMLAttributes<HTMLDivElement> {}

export default function User({ ...props }: UserProps) {
	return (
		<>
			<div className='flex items-center justify-center p-2'>
				<UserImg />
			</div>
		</>
	);
}
