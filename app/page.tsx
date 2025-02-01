import { getHome } from './sanity/pages/homepage-query';
import { Metadata } from 'next';
import Header from './components/Header/Header';
import { Container, Wrapper } from './styles';
import About from './components/sections/About/About';
import PageSection from './components/sections/Section/Section';

const page = await getHome();
export const metadata: Metadata = {
	title: page.title ? `${page.title}` : 'Izabela Magiera | Web developer',
	description: page.description ? `${page.title}` : 'Description',
};
export default async function Home() {
	return (
		<Wrapper>
			<Container>
				<Header links={page.links} />
				<About about={page.about} reviews={page.reviews} />
				<PageSection />
			</Container>
		</Wrapper>
	);
}
