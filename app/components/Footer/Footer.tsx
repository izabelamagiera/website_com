import { LogoIconInline } from "@/app/assets/Logo/LogoIconInline";
import { FlexRow, StyledSection } from "@/app/styles";
import {
  HeaderSm,
  StyledLink,
  TextLg,
  TextMd,
} from "@/app/styles/utils/Typography";
import React from "react";
import { StyledLogo } from "../Header/StyledHeader.styled";
import { FooterLogo, StyledFooter } from "./StyledFooter.styled";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <StyledSection>
      <StyledFooter>
        <FooterLogo>
          <TextMd>&copy; </TextMd>
          <LogoIconInline />
          <TextMd>{currentYear}</TextMd>
        </FooterLogo>
        <div>
          <TextMd>
            <strong>say </strong>
            <StyledLink href="mailto: hello@izabelamagiera.com">
              hello@izabelamagiera.com
            </StyledLink>
          </TextMd>
        </div>
      </StyledFooter>
    </StyledSection>
  );
}
