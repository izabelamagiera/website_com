import { Grid, StyledRichText, StyledSection } from '@/app/styles';
import { PortableText } from '@portabletext/react';
import Reviews from '../../Reviews/Reviews';

export default function PageSection() {
	return (
		<StyledSection>
			<Grid>
				<div>col 1</div>
				<div>col 2</div>
			</Grid>
		</StyledSection>
	);
}
