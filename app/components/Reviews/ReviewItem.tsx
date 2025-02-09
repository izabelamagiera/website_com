import React, { useEffect, useState } from 'react';
import { ReviewProps } from '@/app/types/components/ReviewType';
import { StyledReview } from './StyledReview.styled';
import { PortableText } from '@portabletext/react';
import { richTextStyles } from '@/app/helpers/RichTextComponents';

export default function ReviewItem({ body }: ReviewProps) {
  const [siteUrl, setSiteUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.href);
    }
  }, []);
  const components = richTextStyles(siteUrl);
  return (
    <StyledReview>
      <PortableText value={body} components={components} />
    </StyledReview>
  );
}
