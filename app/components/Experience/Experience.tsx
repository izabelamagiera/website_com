import React from 'react';
import { ExperienceProps } from '@/app/types/components/ExperienceType';
import { StyledSection } from '@/app/styles';
import { div } from 'motion/react-client';
import SectionHeader from '../SectionHeader/SectionHeader';
import Job from './Job';

export default function Experience({ title, label, attachment, jobs }: ExperienceProps) {
  return (
    <StyledSection>
      <SectionHeader title={title} label={label} attachment={attachment} />
      {jobs.map((job) => (
        <Job key={job._id} {...job} />
      ))}
    </StyledSection>
  );
}
