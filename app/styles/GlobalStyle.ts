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
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
		position: relative;
        color: inherit;
        text-decoration: none;

		&::after {
			content: '';
			position: absolute;
			bottom: -0.2rem;
			left: 0;
			height: 0.2rem;
			width: 100%;
			background-color: var(--color-accent);
			transition: all 0.3s;
			z-index: -1;
		}
		&:hover::after {
			height: calc(100% + 0.4rem);
		}
	}
`;

export default GlobalStyle;
