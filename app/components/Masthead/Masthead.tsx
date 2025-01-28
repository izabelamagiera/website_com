import React from 'react';
import s from './Mashead.module.css';

interface MastheadComponentProps {
	Masthead: MastheadProps;
}
export default function Masthead({ Masthead }: MastheadComponentProps) {
	return (
		<div className={s.container}>
			<div className={s.innerContainer}>{Masthead.title}</div>
		</div>
	);
}
