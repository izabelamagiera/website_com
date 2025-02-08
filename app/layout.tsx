'use client';

import { inter } from './utils/fonts/googleFonts';
import StyledComponentsRegistry from './registry';
import GlobalStyle from './styles/GlobalStyle';
import { ColorThemeProvider } from './context/ColorContext/ColorThemeContext';

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
