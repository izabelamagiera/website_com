import { Poppins, Bodoni_Moda } from 'next/font/google';

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins-sans',
	subsets: ['latin'],
});
export const bodoni = Bodoni_Moda({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-bodoni-serif',
	subsets: ['latin'],
});
