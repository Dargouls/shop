import type { Metadata } from 'next';

import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header';
import 'keen-slider/keen-slider.min.css';
import { Inter, Sen, Source_Sans_3 } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const sen = Sen({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ad Shop',
	description: 'Lojinha virtual',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className='flex justify-center bg-base' data-theme='light'>
				<Suspense>
					<Container>
						<Header />
						<main className='flex w-full flex-1 flex-col px-4'>{children}</main>
						<Footer />
					</Container>
				</Suspense>
			</body>
		</html>
	);
}

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={
				'relative flex min-h-screen w-full max-w-[1500px] flex-col justify-center bg-base text-font-base text-stone-900 ' +
				sourceSans3.className
			}
		>
			{children}
		</div>
	);
}
