'use client';
import styled, { useTheme } from 'styled-components';

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
    background-color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover::after {
    height: calc(100% + 0.2rem);
  }
`;

const StyledRichText = styled.div`
  position: relative;
  h3 {
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    @media (max-width: 900px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
  p {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    margin-top: 0.4rem;
  }
`;
const HeaderLg = styled.h2`
  display: flex;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 4.4rem;
  font-weight: 500;
  a {
    display: inline-block;
    position: relative;
    &::after {
      content: ${({ theme }) => theme.icons.content};
      margin-left: 0.5rem;
      position: relative;
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      background-color: transparent;
      transition: all 0.6s;
      z-index: -1;
    }
    &:hover::after {
      margin-left: 1rem;
    }
  }

  @media (max-width: 900px) {
    font-size: 2.8rem;
    line-height: 3.8rem;
  }
`;
const HeaderMd = styled.h3`
  display: flex;
  align-items: flex-start;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
  a {
    display: inline-block;
    position: relative;
    padding-right: 2rem;
    &::after {
      content: ${({ theme }) => theme.icons.content};
      position: absolute;
      top: 0;
      right: 0;
      height: 2rem;
      width: auto;
      transition: all 0.3s;
      z-index: -1;

      svg {
        fill: pink;
      }
    }
    &:hover::after {
      top: -0.25rem;
      right: -0.25rem;
    }
  }
  span {
    margin-left: 0.6rem;
    font-weight: 400;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 2.2rem;
    line-height: 3rem;
    margin-bottom: 1rem;

    span {
      margin-left: 0;
    }
  }
`;
const HeaderSm = styled.h4`
  display: flex;
  position: relative;
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-weight: 500;
  a {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-right: 2rem;
    &::after {
      content: ${({ theme }) => theme.icons.content};
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover::after {
      top: -0.15rem;
      right: -0.15rem;
    }
  }
  span {
    margin-left: 0.6rem;
    font-weight: 400;
  }
  @media (max-width: 900px) {
    line-height: 3rem;
  }
`;
// const TextSm = styled.p``;
const TextMd = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  margin-bottom: 0.9rem;
`;

const TextLg = styled.p`
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 400;
  margin-bottom: 0.9rem;
`;
export { StyledLink, StyledRichText, HeaderLg, HeaderMd, HeaderSm, TextLg, TextMd };
