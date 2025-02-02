'use client';
import { Container, Grid } from '@/app/styles';
import styled from 'styled-components';

const StyledJobGrid = styled(Grid)`
	@media (max-width: 900px) {
		gap: 0;
		border-bottom: 1px solid var(--color-accent);

		&:last-child {
			border-bottom: none;
		}
		${Container} {
			margin-bottom: 4rem;
			&:first-child {
				margin-bottom: 2rem;
			}
		}
	}
`;

export { StyledJobGrid };
