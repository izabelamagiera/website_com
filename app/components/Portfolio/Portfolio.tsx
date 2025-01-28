import React from 'react';
import s from './Portfolio.module.css';
import ProjectItem from './ProjectItem';

export default function Portfolio({ portfolio }: ProjectsProps) {
	return (
		<section aria-label="Portfolio section">
			<div className={s.sectionGrid}>
				{portfolio.map((project) => (
					<ProjectItem key={project._id} {...project} />
				))}
			</div>
		</section>
	);
}
