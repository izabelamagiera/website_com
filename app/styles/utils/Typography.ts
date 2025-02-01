'use client';
import styled from 'styled-components';

const StyledLink = styled.a`
	position: relative;
	display: inline-block;
	margin-right: 1.4rem;
	font-size: inherit;
	line-height: inherit;
	z-index: 1;

	&:last-child,
	&:only-child {
		margin-right: 0;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -0.1rem;
		left: 0;
		height: 0.2rem;
		width: 100%;
		background-color: var(--color-accent);
		transition: all 0.3s;
		z-index: -1;
	}
	&:hover::after {
		height: calc(100% + 0.2rem);
	}
`;

const StyledRichText = styled.div`
	position: relative;

	p {
		font-size: 1.8rem;
		line-height: 2.6rem;
		font-weight: 400;
	}

	blockquote {
		padding-left: 50%;
	}
`;

export { StyledLink, StyledRichText };
