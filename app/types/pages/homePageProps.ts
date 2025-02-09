import { PortableTextBlock } from 'next-sanity';
import { ReviewProps } from '../components/ReviewType';
import { LinkProps } from '../fragments/LinkType';
import { ExperienceProps } from '../components/ExperienceType';
import { PortfolioProps } from '../components/PortfolioTypes';

export interface HomepageProps {
  _id: string;
  title: string;
  description: string;
  links: LinkProps[];
  reviews: ReviewProps[];
  about: PortableTextBlock[];
  experience: ExperienceProps;
  portfolio: PortfolioProps;
}
