'use client';

import { FlexRow } from '@/app/styles/utils/Layout';
import styled from 'styled-components';
const TagsWrapper = styled(FlexRow)`
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	@media (max-width: 900px) {
		flex-direction: row;
	}
`;
const StyledTag = styled.span`
	display: inline-block;
	font-size: 1.4rem;
	margin: 1rem 1rem 1rem 0;
	padding: 0.2rem 0;
	background-color: var(--color-accent);
	width: auto;
	height: auto;
`;

export { TagsWrapper, StyledTag };
