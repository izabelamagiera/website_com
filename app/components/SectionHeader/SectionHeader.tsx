import { FlexRow } from '@/app/styles';

import { SectionHeaderProps } from '@/app/types/components/SectionHeaderType';
import React from 'react';
import { StyledSectionHeader } from './SectionHeader.styled';
import { HeaderLg, HeaderSm } from '@/app/styles/utils/Typography';

export default function SectionHeader({
	title,
	label,
	attachment,
}: SectionHeaderProps) {
	return (
		<StyledSectionHeader>
			<HeaderLg>{title.toUpperCase()}</HeaderLg>

			{attachment && (
				<HeaderSm>
					<a href={attachment?.url} target="_blank">
						{label}
					</a>
				</HeaderSm>
			)}
		</StyledSectionHeader>
	);
}
