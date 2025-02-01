'use client';
import { FlexRow, StyledLink } from '@/app/styles';
import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 1.4rem;
	line-height: 2rem;

	${StyledLink} {
		display: inline-block;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		width: auto;

		${FlexRow} {
			flex-direction: row;
			justify-content: flex-start;
		}
	}
`;

export { StyledHeader };
