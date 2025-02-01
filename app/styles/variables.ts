import { css } from 'styled-components';

const variables = css`
	:root {
		--color-dark: hsl(0, 0%, 18%);
		--color-light: hsl(34, 19%, 93%);
		--color-accent: hsl(37, 12%, 74%);
		--background: var(--color-light);
		--foreground: var(--color-dark);
	}
`;

export default variables;
