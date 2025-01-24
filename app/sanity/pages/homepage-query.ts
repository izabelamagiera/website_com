import { clientFetch } from '../client';

export async function getHome() {
	return clientFetch(
		`
        *[_type == "home"][0] {
			_id,
			title,
			description
        }`,
		{},
		['home']
	);
}
