import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function ImageContainer({ ...props }: ImageContainerProps) {
	return <div {...props} className={twMerge('h-64 w-full overflow-hidden', props.className)} />;
}
