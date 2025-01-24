import s from './page.module.css';
import AnimateLogo from './components/AnimateLogo';
import { getHome } from './sanity/pages/homepage-query';

export default async function Home() {
	const page = await getHome();
	console.log(page, 'check query');
	return (
		<div className={s.pageWrap}>
			<div className={s.pageContent}>
				<AnimateLogo />
				<h1>izabela magiera</h1>
				<p>
					<span className={s.bold}>status</span>: work_in_progress
				</p>
				<p>{page && page.title}</p>
			</div>
		</div>
	);
}
