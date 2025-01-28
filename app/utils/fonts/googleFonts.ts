import { Nunito_Sans, Inter, Anonymous_Pro } from 'next/font/google';

export const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export const nunito = Nunito_Sans({
	weight: ['300', '400', '600', '700', '900'],
	variable: '--font-nunito',
	subsets: ['latin'],
});

export const mono = Anonymous_Pro({
	weight: ['400', '700'],
	variable: '--font-mono',
	subsets: ['latin'],
});
