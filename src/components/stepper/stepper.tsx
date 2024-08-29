import { IconProps } from '@/interfaces/iconProps';
import { CheckCircle, CreditCard, ShoppingCart, Truck } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
	step: number;
}

export default function Stepper({ step, ...props }: StepperProps) {
	return (
		<>
			<aside>
				<div
					{...props}
					className={twMerge('my-4 flex h-10 w-full items-center justify-center', props.className)}
				>
					<Step icon={ShoppingCart} title='Carrinho' isActive={step === 1} />
					<hr className='w-full border-slate-300' />
					<Step icon={Truck} title='Entrega' isActive={step === 2} />
					<hr className='w-full border-slate-300' />
					<Step icon={CreditCard} title='Pagamento' isActive={step === 3} />
					<hr className='w-full border-slate-300' />
					<Step icon={CheckCircle} title='Concluir' isActive={step === 4} />
				</div>
			</aside>
		</>
	);
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: IconProps;
	title: string;
	isActive?: boolean;
}

function Step({ title, icon: Icon, isActive, ...props }: StepProps) {
	return (
		<>
			<div
				{...props}
				className={twMerge('flex h-10 w-full items-center justify-center gap-2', props.className)}
			>
				<Icon
					className={isActive ? 'stroke-primary' : 'stroke-slate-300'}
					strokeWidth={isActive ? 3 : 2}
					size={isActive ? 20 : 16}
				/>
				<span className={twMerge('text-sm', isActive ? 'font-bold text-primary' : 'text-slate-300')}>
					{title}
				</span>
			</div>
		</>
	);
}
