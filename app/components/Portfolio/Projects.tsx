import React from 'react';
import { ExperienceProps } from '@/app/types/components/ExperienceType';
import { FlexRow, Grid, StyledSection } from '@/app/styles';
import { Job, SectionHeader } from '../sections';
import { PortfolioProps } from '@/app/types/components/PortfolioTypes';
import Project from './Project';

export default function Projects({ title, projects }: PortfolioProps) {
	return (
		<StyledSection>
			<SectionHeader title={title} />
			<FlexRow>
				{projects.map((project) => (
					<Project key={project._id} {...project} />
				))}
			</FlexRow>
		</StyledSection>
	);
}
