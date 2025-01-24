import { createClient, type QueryParams } from 'next-sanity';

const env = process.env.ENV || '{{ENV}}';
const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: env === 'live' ? 'production' : 'stage',
	useCdn: true,
	apiVersion: '2025-01-24',
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN_ID,
});

export async function clientFetch(
	query: string,
	params: QueryParams = DEFAULT_PARAMS,
	tags: string[] = DEFAULT_TAGS
) {
	return client.fetch(query, params, {
		next: {
			tags: [...tags, 'sanityQuery'],
			revalidate: 600,
		},
	});
}
