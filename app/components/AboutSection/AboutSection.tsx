import React from 'react';
import s from './About.module.css';
import { PortableText } from '@portabletext/react';

export default function AboutSection({
	about,
	skills,
	tech,
}: AboutSectionProps) {
	return (
		<section aria-label="About me">
			<div className={s.sectionFlexContainer}>
				<div className={s.sectionColumn}>
					<h2 className={s.columnHeader}>About</h2>
					<div className={s.columnText}>
						<PortableText value={about} />
					</div>
				</div>
				<div className={s.sectionColumn}>
					<h2 className={s.columnHeader}>Tech stack</h2>
					{tech.techList.map((item, index) => (
						<p key={index} className={s.columnText}>
							{item}
						</p>
					))}
				</div>

				<div className={s.sectionColumn}>
					<h2 className={s.columnHeader}>Skills</h2>
					{skills.listOfSkills.map((item, index) => (
						<p key={index} className={s.columnText}>
							{item}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
