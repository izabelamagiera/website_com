'use client';

import { inter } from './utils/fonts/googleFonts';
import { Suspense } from 'react';
import Loading from './components/utils/Loading/Loading';
import StyledComponentsRegistry from './registry';
import { ColorThemeProvider } from './context/ColorContext/ColorThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import Script from 'next/script';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="GTM"
        src="https://www.googletagmanager.com/gtag/js?id=G-R76G802Q3J"
        strategy="afterInteractive"
        data-categoty="analytics"
        data-service="GTM"
      />
      <Script id="google" strategy="afterInteractive" data-categoty="analytics" data-service="GA4">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R76G802Q3J');`}
      </Script>
      <StyledComponentsRegistry>
        <ColorThemeProvider>
          <GlobalStyle />
          <body className={`${inter.variable}`}>{children}</body>
        </ColorThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
