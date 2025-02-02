import { AboutSectionProps } from '@/app/types/components/AboutType';
import { Grid, StyledRichText, StyledSection } from '@/app/styles';
import { PortableText } from '@portabletext/react';
import Reviews from '../Reviews/Reviews';

export default function About({ about, reviews }: AboutSectionProps) {
	return (
		<StyledSection>
			<Grid>
				<StyledRichText>
					<PortableText value={about} />
				</StyledRichText>
				<Reviews reviews={reviews} />
			</Grid>
		</StyledSection>
	);
}
