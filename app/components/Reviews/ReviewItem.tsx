'use client';
import React, { useEffect, useState } from 'react';
import s from './Reviews.module.css';
import { PortableText, PortableTextComponents } from '@portabletext/react';

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
					<a
						href={value.href}
						target={value.href.startsWith(`${siteUrl}`) ? '_self' : '_blank'}
					>
						{children}
					</a>
				);
			},
		},
	};
	return (
		<div className={s.review}>
			<PortableText value={body} components={components} />
		</div>
	);
}
