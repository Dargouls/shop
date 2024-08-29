import Stepper from '@/components/stepper/stepper';
import AddressSelector from '@/features/cart/addressSelector/addressSelector';
import Resume from '@/features/cart/resume/resume';

export default function AddressCart() {
	return (
		<>
			<Stepper step={2} />
			<main className='flex gap-10'>
				<AddressSelector className='flex-1' />
				<Resume className='w-1/3' />
			</main>
		</>
	);
}
