import { Container, Grid } from '@/app/styles';
import {
	HeaderMd,
	StyledRichText,
	TextLg,
} from '@/app/styles/utils/Typography';
import { JobProps } from '@/app/types/components/ExperienceType';
import { PortableText } from '@portabletext/react';
import Tags from '../Tags/Tag';
import { StyledJobGrid } from './Experience.styled';

export default function Job({
	title,
	jobTitle,
	url,
	intro,
	dates,
	description,
	tags,
}: JobProps) {
	return (
		<StyledJobGrid>
			<Container>
				<HeaderMd>
					<a href={url} target="_blank">
						{title}
					</a>
				</HeaderMd>
				<TextLg>{intro}</TextLg>
			</Container>
			<Container>
				<HeaderMd>
					{jobTitle.toUpperCase()}
					<span> {`(${dates})`}</span>
				</HeaderMd>
				<StyledRichText>
					<PortableText value={description} />
				</StyledRichText>
				<Tags tags={tags} />
			</Container>
		</StyledJobGrid>
	);
}
