'use client';
import { PortableTextComponents } from '@portabletext/react';
import { StyledLink } from '@/app/styles/utils/Typography';

const richTextStyles = (siteUrl: string) => {
  const components: PortableTextComponents = {
    marks: {
      link: ({ value, children }: any) => {
        return (
          <StyledLink href={value.href} target={value.href.startsWith(`${siteUrl}`) ? '_self' : '_blank'}>
            {children}
          </StyledLink>
        );
      }
    }
  };
  return components;
};

export { richTextStyles };
