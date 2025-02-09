'use client';

import { inter } from './utils/fonts/googleFonts';
import { Suspense } from 'react';
import Loading from './components/utils/Loading/Loading';
import StyledComponentsRegistry from './registry';
import { ColorThemeProvider } from './context/ColorContext/ColorThemeContext';
import GlobalStyle from './styles/GlobalStyle';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ColorThemeProvider>
          <GlobalStyle />
          <body className={`${inter.variable}`}>{children}</body>
        </ColorThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
