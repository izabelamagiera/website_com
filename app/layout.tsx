import type { Metadata } from 'next';
import { Poppins, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins-sans',
	subsets: ['latin'],
});
const bodoni = Bodoni_Moda({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-bodoni-serif',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Izabela Magiera',
	description: 'Front-end developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${bodoni.variable}`}>
				{children}
			</body>
		</html>
	);
}
