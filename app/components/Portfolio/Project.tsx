'use client';
import { ProjectProps } from '@/app/types/components/PortfolioTypes';
import { useEffect, useState } from 'react';
import { richTextStyles } from '@/app/helpers/RichTextComponents';
import { ProjectImage, StyledProjectCard } from '@/app/styles';
import { HeaderMd, StyledRichText } from '@/app/styles/utils/Typography';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Tags from '../Tags/Tag';
import { useColorThemeContext } from '@/app/context/ColorContext/ColorThemeContext';
import { DARK_THEME } from '@/app/styles/theme';

export default function Project({ title, description, url, image, darkModeImage, tags }: ProjectProps) {
  const { colorTheme } = useColorThemeContext();
  const [siteUrl, setSiteUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.href);
    }
  }, []);
  const components = richTextStyles(siteUrl);
  return (
    <StyledProjectCard>
      <div>
        <ProjectImage>
          <Image
            src={
              darkModeImage && colorTheme === DARK_THEME
                ? `${darkModeImage.url}?w=2000&fm=webp`
                : `${image.url}?w=2000&fm=webp`
            }
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            style={{ width: '100%', height: 'auto' }}
          />
        </ProjectImage>
        <HeaderMd>
          <a href={url} target="_blank">
            {title.toUpperCase()}
          </a>
        </HeaderMd>
        <StyledRichText>
          <PortableText value={description} components={components} />
        </StyledRichText>
      </div>
      <Tags tags={tags} />
    </StyledProjectCard>
  );
}
