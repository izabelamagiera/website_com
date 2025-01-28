import type { Metadata } from 'next';
import { mono, inter, nunito } from './utils/fonts/googleFonts';
import './globals.css';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

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
			<body className={`${mono.variable} ${nunito.variable} ${inter.variable}`}>
				<div className={'container'}>
					<Header />
					<>{children}</>
					<Footer />
				</div>
			</body>
		</html>
	);
}
