import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
	return (
		<section>
			<div className={s.footerFlexContainer}>
				<div className={s.footerItems}>
					<div className={s.footerFlexItem}>email</div>
					<div className={s.footerFlexItem}>phone</div>
					<div className={s.footerFlexItem}>linkedin</div>
					<div className={s.footerFlexItem}>github</div>
					<div className={s.footerFlexItem}>website</div>
				</div>
			</div>
		</section>
	);
}
