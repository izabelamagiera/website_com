'use client';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
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
	${FlexRow} {
		align-items: flex-end;
	}
	@media (max-width: 900px) {
		flex-direction: column-reverse;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		${FlexRow} {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 2rem;
		}
	}
`;
const StyledLogo = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	span {
		font-weight: 500;
		margin-left: 1rem;
		line-height: 1.2;
		font-size: 1.6rem;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		span {
			margin-left: 0;
			margin-top: 1rem;
		}

		svg {
			margin-top: 6rem;
			width: 70%;
			max-width: 27rem;
			height: auto;
		}
	}
`;
const ModeSwitch = styled.div`
	position: absolute;
	right: 0;
	top: 0.3rem;
	@media (max-width: 900px) {
		top: 10.2rem;
	}
`;
export { StyledHeader, StyledLogo, ModeSwitch };
