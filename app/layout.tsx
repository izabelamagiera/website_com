import type { Metadata } from 'next';
import { poppins, bodoni } from './utils/fonts/googleFonts';
import './globals.css';

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
