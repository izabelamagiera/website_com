import Image from 'next/image';
import s from './page.module.css';

export default function Home() {
	return (
		<div className={s.pageWrap}>
			<div className={s.pageContent}>
				<Image src="/stampSun.svg" alt="logo" width={80} height={80} />
				<h1>izabela magiera</h1>
				<p>this website is work in progress</p>
			</div>
		</div>
	);
}
