import type { Metadata } from 'next';

import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header';
import 'keen-slider/keen-slider.min.css';
import { Sen } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const font = Sen({ subsets: ['latin'] });

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
						<main className='flex w-full flex-1 flex-col justify-center px-4'>{children}</main>
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
				'flex min-h-screen w-full max-w-[1500px] flex-col justify-center bg-base text-font-base ' +
				font.className
			}
		>
			{children}
		</div>
	);
}
