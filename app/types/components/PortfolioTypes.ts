import { PortableTextBlock } from '@portabletext/react';
import { AssetProps } from '../fragments/AssetType';
import { TagProps } from '../fragments/TagType';

export interface PortfolioProps {
  title: string;
  projects: ProjectProps[];
}
export interface ProjectProps {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  image: AssetProps;
  darkModeImage: AssetProps;
  url: string;
  tags: TagProps[];
}
export interface ProjectsProps {
  projects: ProjectProps[];
}
