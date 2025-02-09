'use client';
import { Container, Grid } from '@/app/styles';
import { HeaderMd, StyledRichText, TextLg } from '@/app/styles/utils/Typography';
import { JobProps } from '@/app/types/components/ExperienceType';
import { PortableText } from '@portabletext/react';
import Tags from '../Tags/Tag';
import { StyledJobGrid } from './Experience.styled';
import { useEffect, useState } from 'react';
import { richTextStyles } from '@/app/helpers/RichTextComponents';

export default function Job({ title, jobTitle, url, intro, dates, description, tags }: JobProps) {
  const [siteUrl, setSiteUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.href);
    }
  }, []);
  const components = richTextStyles(siteUrl);
  return (
    <StyledJobGrid>
      <Container>
        <HeaderMd>
          <a href={url} target="_blank">
            {title}
          </a>
        </HeaderMd>
        <TextLg>{intro}</TextLg>
      </Container>
      <Container>
        <HeaderMd>
          {jobTitle.toUpperCase()}
          <span> {`(${dates})`}</span>
        </HeaderMd>
        <StyledRichText>
          <PortableText value={description} components={components} />
        </StyledRichText>
        <Tags tags={tags} />
      </Container>
    </StyledJobGrid>
  );
}
