import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 10px;
    }

    body {
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.foreground};
        background: ${({ theme }) => theme.colors.background};
        font-family: var(--font-inter-sans), sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
		position: relative;
        color: inherit;
        font-size: inherit;
        text-decoration: none;
	}
`;

export default GlobalStyle;
