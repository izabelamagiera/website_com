import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
${variables};

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 10px;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        color: var(--foreground);
        background: var(--background);
        font-family: var(--font-inter-sans), sans-serif;
    }
    a {
		position: relative;
        color: inherit;
        font-size: inherit;
        text-decoration: none;
	}
`;

export default GlobalStyle;
