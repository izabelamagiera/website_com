import { clientFetch } from '../client';
import { asset } from '../partials/asset';

export async function getProject(slug: string): Promise<ProjectProps> {
	return clientFetch(
		`*[_type == "project" && slug.current == $slug][0] {
            _id,
            title,
            "slug": slug.current,
            projectIntro[],
            featureImage ${asset},
            sections[]-> {
                _id,
                _type,
                'Button': *[_type == 'Button' && _id == ^._id][0] {
                    _type,
                    _id,
                    title
                },
                'Masthead': *[_type == 'Masthead' && _id == ^._id][0]{
                    _type,
                    _id,
                    title
                },
            },
        }`,
		{ slug },
		['project']
	);
}
