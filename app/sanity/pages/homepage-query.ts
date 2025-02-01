import { clientFetch } from '../client';

export async function getHome(): Promise<HomepageProps> {
	return clientFetch(
		`
        *[_type == "home"][0] {
			_id,
			title,
			description,
			links[] {
				_key,
				linkText,
				url
			},
			about[],
			reviews[]-> {
				_id,
				title,
				body[],
			},
		}`,
		{},
		['home']
	);
}
