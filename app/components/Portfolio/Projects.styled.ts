"use client";
import { FlexRow } from "@/app/styles";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
  & > div {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 76%;
  overflow: hidden;
  margin-bottom: 2rem;
  img {
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
`;

export { StyledProjectCard, ProjectImage };
