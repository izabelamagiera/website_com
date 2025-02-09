import { DEFAULT_THEME, DARK_THEME } from '@/app/styles/theme';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider, ThemeType } from 'styled-components';

interface ColorThemeType {
  colorTheme: ThemeType;
  toggleColorTheme: () => void;
}
export const ColorThemeContext = createContext({} as ColorThemeType);

export const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<ThemeType>(DEFAULT_THEME);
  const toggleColorTheme = () => {
    colorTheme === DEFAULT_THEME ? setColorTheme(DARK_THEME) : setColorTheme(DEFAULT_THEME);
  };

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme,
        toggleColorTheme
      }}
    >
      <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
    </ColorThemeContext.Provider>
  );
};

export const useColorThemeContext = () => useContext(ColorThemeContext);
