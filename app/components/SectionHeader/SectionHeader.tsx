"use client";
import { SectionHeaderProps } from "@/app/types/components/SectionHeaderType";
import React, { useState } from "react";
import { StyledSectionHeader } from "./SectionHeader.styled";
import { HeaderLg, HeaderSm } from "@/app/styles/utils/Typography";

export default function SectionHeader({
  title,
  label,
  attachment,
}: SectionHeaderProps) {
  const [linkToFile, setLinkToFile] = useState<string>("");
  const handleDownloadFile = () => {
    setLinkToFile(attachment ? attachment.url : "");
  };
  return (
    <StyledSectionHeader>
      <HeaderLg>{title.toUpperCase()}</HeaderLg>

      {attachment && (
        <HeaderSm>
          <a onClick={handleDownloadFile} href={linkToFile} target="_blank">
            {label}
          </a>
        </HeaderSm>
      )}
    </StyledSectionHeader>
  );
}
