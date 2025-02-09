'use client';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
import { motion } from 'motion/react';
import styled from 'styled-components';

const ThemeToggleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 7rem;
  height: 3rem;
  border-radius: 2rem;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;

const ThemeIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const Toggle = styled(motion.div)`
  position: absolute;
  top: -0.6rem;
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
`;

export { ThemeToggleWrapper, ThemeIcon, Toggle };
