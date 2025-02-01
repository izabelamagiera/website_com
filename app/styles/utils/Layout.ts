'use client';
import { styled } from 'styled-components';

const Container = styled.div`
	display: block;
	width: 100%;
	max-width: 108rem;
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
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 4rem;
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

	@media (max-width: 900px) {
		flex-direction: column;
		width: 100%;

		& > div {
			width: 100%;
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
