import { LogoIcon } from '@/app/assets/Logo/LogoIcon';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
import React from 'react';
import { ModeSwitch, StyledHeader, StyledLogo } from './StyledHeader.styled';
import { LinksProps } from '@/app/types/fragments/LinkType';
import { ModeSwitchIcon } from '@/app/assets/ModeSwitch/ModeSwitch';

export default function Header({ links }: LinksProps) {
	return (
		<StyledHeader>
			<ModeSwitch>
				<ModeSwitchIcon />
			</ModeSwitch>
			<StyledLogo>
				<LogoIcon /> <span>Front-end engineer</span>
			</StyledLogo>
			<FlexRow>
				{links.map((link) => (
					<StyledLink key={link._key} href={link.url} target="_blank">
						{link.linkText}
					</StyledLink>
				))}
			</FlexRow>
		</StyledHeader>
	);
}
