import { getProject } from '@/app/(sanity)/pages/project-query';
import * as modules from '@/app/components/sections';
import { JSX } from 'react';

interface SectionProps {
	[index: string]: ({}: ComponentProps) => JSX.Element;
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<ParamsProps>;
}) {
	const slug = (await params).slug;
	const page = await getProject(slug);

	const component: SectionProps = modules;

	return (
		<div>
			<>
				{page.sections.map((section) => {
					console.log(section);
					const Component = component[section._type] || 'error';
					return <Component key={section._id} {...section} />;
				})}
			</>
		</div>
	);
}
