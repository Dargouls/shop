import CircularProgress from '@/components/circularProgress/circularProgress';

export default function Loading() {
	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<CircularProgress size={100} />
		</div>
	);
}
