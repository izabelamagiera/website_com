import { ThemeType } from 'styled-components';
export const DEFAULT_THEME: ThemeType = {
  colors: {
    body: 'hsl(34, 19%, 93%)',
    text: 'hsl(0, 0%, 18%)',
    textAccent: 'hsl(0, 0%, 18%)',
    accent: 'hsl(37, 12%, 74%)',
    background: 'hsl(34, 19%, 93%)',
    foreground: 'hsl(0, 0%, 18%)'
  },
  icons: {
    content: `url('/icons/TextLinkArrowUp.svg')`
  }
};
export const DARK_THEME: ThemeType = {
  colors: {
    body: ' hsl(0, 0%, 18%)',
    text: 'hsl(0, 0%,55%)',
    textAccent: 'hsl(0, 0%, 18%)',
    accent: 'hsl(291, 7%, 29%)',
    // accent: 'hsl(177, 15.70%, 27.50%)',
    background: 'hsl(240, 4.90%, 12.00%)',
    foreground: 'hsl(0, 0%,55%)'
  },
  icons: {
    content: `url('/icons/TextLinkArrowUpLight.svg')`
  }
};
