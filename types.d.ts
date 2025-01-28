interface ParamsProps {
	slug: string;
}
interface HomepageProps {
	title: string;
	description: string;
	heroBanner: HeroBannerProps;
	portfolio: ProjectPageProps[];
	about: PortableTextBlock[];
	skills: {
		title: string;
		listOfSkills: string[];
	};
	tech: {
		title: string;
		techList: string[];
	};
	reviews: ReviewProps[];
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
	skills: {
		title: string;
		listOfSkills: string[];
	};
	tech: {
		title: string;
		techList: string[];
	};
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
