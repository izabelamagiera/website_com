import { clientFetch } from '../client';
import { asset, slug } from '../partials/asset';

export async function getHome(): Promise<HomepageProps> {
	return clientFetch(
		`*[_type == "home"][0] {
			_id,
			title,
			description,
			heroBanner {
				preheader,
				headline,
				logos[]${asset}
			},
			portfolio[]->{
				_id,
				title,
				${slug},
				projectIntro[],
				featureImage ${asset},
				tags[],
			},
			about[],
			skills {
				title,
				listOfSkills[]
			},
			tech {
				title,
				techList[]
			},
			reviews[]-> {
				_id,
				title,
				body[],
			}
        }`,
		{},
		['home']
	);
}
