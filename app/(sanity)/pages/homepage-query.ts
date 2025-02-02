import { HomepageProps } from '@/app/types/pages/homePageProps';
import { clientFetch } from '../client';
import { asset } from '../fragments/asset';
import { tag } from '../fragments/tag';

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
      experience {
        title,
        label,
        attachment ${asset},
        jobs[]->{
          _id,
          title,
          url,
          intro,
          jobTitle,
          dates,
          description[],
          tags[]-> ${tag},
          
        },
      },
      portfolio {
        title,
        projects[]-> {
          _id,
          title,
          description[],
          image ${asset},
          url,
          tags[]-> ${tag},
        },
          
      }
		}`,
		{},
		['home']
	);
}
