// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface ThemeType {
    colors: {
      body: string;
      text: string;
      accent: string;
      textAccent: string;
      background: string;
      foreground: string;
    };
    icons: {
      content: string;
    };
  }
}
