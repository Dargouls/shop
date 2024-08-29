import { useMoney } from '@/hooks/formatMoney';
import { IProduct } from '@/interfaces/product';
import { twMerge } from 'tailwind-merge';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	product: IProduct;
}
export default function CardFooter({ product: { name, price }, ...props }: CardFooterProps) {
	const { formatBRL } = useMoney();

	return (
		<footer
			className={twMerge(
				'absolute bottom-1 left-1 right-1 flex translate-y-full justify-between rounded-md bg-base-contrast p-8 opacity-0 transition-all duration-300',
				props.className
			)}
		>
			<span className='font-semibold'>{name}</span>
			<span className='font-semibold text-primary-400'>{price / 100}</span>
		</footer>
	);
}
