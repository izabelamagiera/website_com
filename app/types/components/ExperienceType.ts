import { PortableTextBlock } from '@portabletext/react';
import { AssetProps } from '../fragments/AssetType';
import { TagProps } from '../fragments/TagType';

export interface JobProps {
	_id: string;
	title: string;
	url: string;
	intro: string;
	jobTitle: string;
	dates: string;
	description: PortableTextBlock[];
	tags: TagProps[];
}
export interface JobsProps {
	jobs: JobProps[];
}
export interface ExperienceProps {
	title: string;
	label: string;
	attachment: AssetProps;
	jobs: JobProps[];
}
