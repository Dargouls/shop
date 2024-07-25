import type { Metadata } from 'next';

import Header from '@/components/layout/header';
import 'keen-slider/keen-slider.min.css';
import { Sen } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const font = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ignite Shop',
	description: 'Lojinha virtual',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt'>
			<body
				className={'flex flex-col min-h-screen bg-base text-font-base px-4 ' + font.className}
				data-theme='dark'
			>
				<Header />
				<Suspense>
					<main className='flex flex-1 justify-center w-full flex-col'>{children}</main>
				</Suspense>
			</body>
		</html>
	);
}
