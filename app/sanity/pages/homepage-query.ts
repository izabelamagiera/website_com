import { clientFetch } from '../client';

export async function getHomepage() {
	return clientFetch(
		`
        *[_type == "homepage"][0] {
        _id,
            title,
			description
        }`
	);
}
