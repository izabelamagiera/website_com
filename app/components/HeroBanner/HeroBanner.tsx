import React from 'react';
import s from './HeroBanner.module.css';
import Image from 'next/image';
export default function HeroBanner({
	preheader,
	headline,
	logos,
}: HeroBannerProps) {
	return (
		<div className={s.section}>
			<div className={s.heroContentWrap}>
				<span className={'tag'}>{preheader.toUpperCase()}</span>

				<h1 className={s.heroHeadline}>{headline}</h1>
				<div className={s.heroLogosWrap}>
					{logos.map((logo) => {
						return (
							<div className={s.heroLogoItem} key={logo._key}>
								<Image
									src={logo.url}
									alt={logo.alt}
									width={logo.dimensions.width}
									height={logo.dimensions.height}
									style={{ width: 'auto', height: '3.2rem' }}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
