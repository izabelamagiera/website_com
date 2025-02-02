import { PortableTextBlock } from '@portabletext/react';
import { ReviewProps } from './ReviewType';
export interface AboutSectionProps {
	about: PortableTextBlock[];
	reviews: ReviewProps[];
}
