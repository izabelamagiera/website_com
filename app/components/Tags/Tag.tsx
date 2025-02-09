import { FlexRow } from '@/app/styles';
import { TagsProps } from '@/app/types/fragments/TagType';
import React from 'react';
import { StyledTag, TagsWrapper } from './Tag.styled';

export default function Tags({ tags }: TagsProps) {
	return (
		<TagsWrapper>
			{tags.map((tag) => (
				<StyledTag key={tag._id}>{tag.title}</StyledTag>
			))}
		</TagsWrapper>
	);
}
