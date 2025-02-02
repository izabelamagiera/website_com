'use client';
import { styled } from 'styled-components';

const Container = styled.div`
	display: block;
	width: 100%;
	max-width: 128rem;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	padding: 8rem;
	@media (max-width: 900px) {
		padding: 2rem;
	}
`;
const StyledSection = styled.section`
	display: block;
	margin-top: 16rem;
	@media (max-width: 900px) {
		margin-top: 8rem;
	}
`;

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 4rem;
	margin-bottom: 4rem;
	&:only-child,
	&:last-child {
		margin-bottom: 0;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;
const FlexRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	& > div {
		width: 50%;
	}
	& > div:nth-child(odd) {
		padding-right: 2rem;
	}

	& > div:nth-child(even) {
		padding-left: 2rem;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		width: 100%;

		& > div {
			width: 100%;
		}
		& > div:nth-child(odd) {
			padding-right: 0;
		}

		& > div:nth-child(even) {
			padding-left: 0;
		}
	}
`;
const FlexCol = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
`;
export { Container, Wrapper, StyledSection, Grid, FlexRow, FlexCol };
