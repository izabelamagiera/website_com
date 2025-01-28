'use client';
import React, { useState } from 'react';
import s from './Portfolio.module.css';
import cn from 'classnames';
import { PortableText } from '@portabletext/react';
// import * as motion from 'motion/react-client';
export default function ProjectItem({
	title,
	featureImage,
	projectIntro,
	tags,
}: ProjectProps) {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div
			className={s.projectItem}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				className={s.projectImage}
				style={featureImage && { backgroundImage: `url(${featureImage.url})` }}
			></div>
			<div className={s.projectInfo}>
				<div>
					<h2>{title}</h2>
					<PortableText value={projectIntro} />
				</div>
				<div className={s.projectTags}>
					{tags.map((tag, index) => (
						<span key={index} className={cn('tag', isHover ? 'light' : '')}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
