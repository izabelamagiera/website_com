import { LogoIcon } from '@/app/assets/Logo/LogoIcon';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
import React from 'react';
import { StyledHeader } from './StyledHeader.styled';

export default function Header({ links }: LinksProps) {
	return (
		<StyledHeader>
			<LogoIcon />
			<FlexCol>
				<div>change mode</div>
				<FlexRow>
					{links.map((link) => (
						<StyledLink key={link._key} href={link.url} target="_blank">
							{link.linkText}
						</StyledLink>
					))}
				</FlexRow>
			</FlexCol>
		</StyledHeader>
	);
}
