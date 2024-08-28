import type { Metadata } from 'next';

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
		<html lang='pt'>
			<body
				className={
					'm-auto flex min-h-screen max-w-[1500px] flex-col bg-base px-4 text-font-base ' + font.className
				}
				data-theme='light'
			>
				<Header />
				<Suspense>
					<main className='flex w-full flex-1 flex-col justify-center'>{children}</main>
				</Suspense>
			</body>
		</html>
	);
}
