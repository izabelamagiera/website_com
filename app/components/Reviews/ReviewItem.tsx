import React, { useEffect, useState } from 'react';
import { StyledReview } from './StyledReview.styled';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import { StyledLink } from '@/app/styles/utils/Typography';

export default function ReviewItem({ body }: ReviewProps) {
	const [siteUrl, setSiteUrl] = useState('');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setSiteUrl(window.location.href);
		}
	}, []);
	const components: PortableTextComponents = {
		marks: {
			link: ({ value, children }: any) => {
				return (
					<StyledLink
						href={value.href}
						target={value.href.startsWith(`${siteUrl}`) ? '_self' : '_blank'}
					>
						{children}
					</StyledLink>
				);
			},
		},
	};
	return (
		<StyledReview>
			<PortableText value={body} components={components} />
		</StyledReview>
	);
}
