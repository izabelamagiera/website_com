'use client';
import { FlexCol, FlexRow, StyledLink } from '@/app/styles';
import styled from 'styled-components';

const StyledLoading = styled.div`
  background: pink;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;

  @keyframes l1 {
    0% {
      background-position: right;
    }
  }
`;

export { StyledLoading };
