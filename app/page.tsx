import s from './page.module.css';
import AnimateLogo from './components/AnimateLogo';

export default function Home() {
	return (
		<div className={s.pageWrap}>
			<div className={s.pageContent}>
				<AnimateLogo />
				<h1>izabela magiera</h1>
				<p>
					<span className={s.bold}>status</span>: work_in_progress
				</p>
			</div>
		</div>
	);
}
