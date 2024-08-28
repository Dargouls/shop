import Link from 'next/link';
import { HTMLAttributes } from 'react';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer({ ...props }: FooterProps) {
	const linkStyle = 'text-white text-sm hover:underline w-max';
	return (
		<>
			<footer className='mt-10 text-white'>
				<div className='h-10 bg-slate-600' />
				<div className='bg-slate-700'>
					<div className='flex flex-wrap justify-around'>
						<section className='flex flex-col gap-2 p-10'>
							<h3>Conheça-nos</h3>
							<Link href={'/'} className={linkStyle}>
								Sobre a Ad Shop
							</Link>
							<Link href={'/'} className={linkStyle}>
								Informações corporativas
							</Link>
							<Link href={'/'} className={linkStyle}>
								Carreiras
							</Link>
							<Link href={'/'} className={linkStyle}>
								Comunicados à imprensa
							</Link>
							<Link href={'/'} className={linkStyle}>
								Acessibilidade
							</Link>
						</section>
						<section className='flex flex-col gap-2 p-10'>
							<h3>Conheça-nos</h3>
							<Link href={'/'} className={linkStyle}>
								Sobre a Ad Shop
							</Link>
							<Link href={'/'} className={linkStyle}>
								Informações corporativas
							</Link>
							<Link href={'/'} className={linkStyle}>
								Carreiras
							</Link>
							<Link href={'/'} className={linkStyle}>
								Comunicados à imprensa
							</Link>
							<Link href={'/'} className={linkStyle}>
								Acessibilidade
							</Link>
						</section>
						<section className='flex flex-col gap-2 p-10'>
							<h3>Conheça-nos</h3>
							<Link href={'/'} className={linkStyle}>
								Sobre a Ad Shop
							</Link>
							<Link href={'/'} className={linkStyle}>
								Informações corporativas
							</Link>
							<Link href={'/'} className={linkStyle}>
								Carreiras
							</Link>
							<Link href={'/'} className={linkStyle}>
								Comunicados à imprensa
							</Link>
							<Link href={'/'} className={linkStyle}>
								Acessibilidade
							</Link>
						</section>
						<section className='flex flex-col gap-2 p-10'>
							<h3>Conheça-nos</h3>
							<Link href={'/'} className={linkStyle}>
								Sobre a Ad Shop
							</Link>
							<Link href={'/'} className={linkStyle}>
								Informações corporativas
							</Link>
							<Link href={'/'} className={linkStyle}>
								Carreiras
							</Link>
							<Link href={'/'} className={linkStyle}>
								Comunicados à imprensa
							</Link>
							<Link href={'/'} className={linkStyle}>
								Acessibilidade
							</Link>
						</section>
					</div>
				</div>
			</footer>
		</>
	);
}
