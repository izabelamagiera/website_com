'use client';
import { LogoIcon } from '@/app/assets/Logo/LogoIcon';
import { FlexRow, StyledLink } from '@/app/styles';
import { ThemeSwitch, StyledHeader, StyledLogo } from './StyledHeader.styled';
import { LinksProps } from '@/app/types/fragments/LinkType';
import { useColorThemeContext } from '@/app/context/ColorContext/ColorThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header({ links }: LinksProps) {
  const { toggleColorTheme } = useColorThemeContext();
  return (
    <StyledHeader>
      <ThemeSwitch>
        <ThemeToggle />
      </ThemeSwitch>
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
