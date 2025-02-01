'use client';
import { inter } from './utils/fonts/googleFonts';
import StyledComponentsRegistry from './registry';
import GlobalStyle from './styles/GlobalStyle';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<GlobalStyle />
				<body className={`${inter.variable}`}>{children}</body>
			</StyledComponentsRegistry>
		</html>
	);
}
