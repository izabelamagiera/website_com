import { PortableTextBlock } from '@portabletext/react';

export interface ReviewProps {
	_id: string;
	title: string;
	body: PortableTextBlock[];
}
export interface ReviewsProps {
	reviews: ReviewProps[];
}
