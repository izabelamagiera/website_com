interface ParamsProps {
	slug: string;
}
interface HomepageProps {
	title: string;
	description: string;
	links: LinkProps[];
	reviews: ReviewProps[];
	about: PortableTextBlock[];
}

interface ProjectProps {
	_id: string;
	title: string;
	slug: string;
	featureImage: AssetProps;
	projectIntro: PortableTextBlock[];
	tags: string[];
	sections: {
		_id: string;
		_type: string;
		Button: ButtonProps;
		Masthead: MastheadProps;
	}[];
}
interface ProjectsProps {
	portfolio: ProjectPageProps[];
}
interface LinkProps {
	_key: string;
	linkText: string;
	url: string;
}
interface LinksProps {
	links: LinkProps[];
}
interface ReviewProps {
	_id: string;
	title: string;
	body: PortableTextBlock[];
}
interface ReviewsProps {
	reviews: ReviewProps[];
}
interface ButtonProps {
	_id: string;
	_type: string;
	title: string;
}
interface MastheadProps {
	_id: string;
	title: string;
}
interface ComponentProps {
	Button: ButtonProps;
	Masthead: MastheadProps;
}

interface HeroBannerProps {
	preheader: string;
	headline: string;
	logos: AssetProps[];
}
interface AboutSectionProps {
	about: PortableTextBlock[];
	reviews: ReviewProps[];
}
// PARTIALS
interface AssetProps {
	_key: string;
	alt: string;
	url: string;
	dimensions: {
		width: number;
		height: number;
	};
}
