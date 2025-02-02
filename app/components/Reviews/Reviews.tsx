'use client';

import { FlexCol_Review, StyledIcon } from './StyledReview.styled';
import { QuoteMark } from '@/app/assets/QuoteMark/QuoteMark';
import ReviewItem from './ReviewItem';
import { ReviewsProps } from '@/app/types/components/ReviewType';

export default function Reviews({ reviews }: ReviewsProps) {
	return (
		<FlexCol_Review>
			<StyledIcon>
				<QuoteMark />
			</StyledIcon>

			{reviews.map((review) => (
				<ReviewItem key={review._id} {...review} />
			))}
		</FlexCol_Review>
	);
}
