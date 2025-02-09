'use client';
import { FlexCol } from '@/app/styles/utils/Layout';
import styled from 'styled-components';

const StyledReview = styled.div`
	position: relative;
	font-size: 1.6rem;
	line-height: 2rem;
	width: 30rem;
	display: flex;
	flex-direction: column;
	margin-left: auto;
	order: 2;

	blockquote {
		font-weight: 400;
		margin-bottom: 0.8rem;
		text-align: left;
		line-height: 2.2rem;
	}
	p {
		font-size: 1.4rem;
		line-height: 2rem;
	}
	@media (max-width: 900px) {
		margin-left: 0;
		padding-top: 2rem;
		padding-left: 7rem;
		width: 100%;
		order: 1;
	}
`;
const StyledIcon = styled.div`
	position: absolute;
	top: -2.5rem;
	right: 31rem;
	width: 5rem;
	height: 6rem;
	display: block;
	@media (max-width: 900px) {
		top: -0.5rem;
		right: 0;
		left: 0;
	}
`;

const FlexCol_Review = styled(FlexCol)`
	align-items: flex-start;
`;

export { StyledReview, StyledIcon, FlexCol_Review };
