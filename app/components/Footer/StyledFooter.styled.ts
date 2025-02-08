'use client';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
import { TextMd } from '@/app/styles/utils/Typography';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding: 4rem 0 0;
  display: flex;
  justify-content: space-between;
  ${TextMd} {
    margin-bottom: 0;
    align-self: flex-end;
  }
  & > div {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  height: auto;

  & > svg {
    height: 2rem;
    width: auto;
    margin: 0 1rem;
  }

  p {
    font-size: 1.6rem;
    margin: 0;
    line-height: 1;
  }
  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

export { StyledFooter, FooterLogo };
