import { getHome } from '@/app/(sanity)/pages/homepage-query';
import HeroBanner from '../components/HeroBanner/HeroBanner';
// import { PortableText } from 'next-sanity';
import Portfolio from '../components/Portfolio/Portfolio';
import AboutSection from '../components/AboutSection/AboutSection';
import Reviews from '../components/Reviews/Reviews';

export default async function Home() {
	const page = await getHome();
	console.log(page, 'check query');
	return (
		<>
			<HeroBanner {...page.heroBanner} />
			<Portfolio portfolio={page.portfolio} />
			<AboutSection about={page.about} skills={page.skills} tech={page.tech} />
			<Reviews reviews={page.reviews} />
		</>
	);
}
