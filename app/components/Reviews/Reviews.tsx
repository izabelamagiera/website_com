import React from 'react';
import s from './Reviews.module.css';
import { QuoteMark } from '@/app/assets/QuoteMarkIcon/QuoteMarkIcon';
import ReviewItem from './ReviewItem';

export default function Reviews({ reviews }: ReviewsProps) {
	return (
		<section aria-label="Reviews section">
			<div className={s.sectionBlockContainer}>
				{reviews.map((review) => (
					<ReviewItem key={review._id} {...review} />
				))}
			</div>
			<div className={s.quoteMark}>
				<QuoteMark />
			</div>
		</section>
	);
}
