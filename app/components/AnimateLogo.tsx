'use client';
import { motion } from 'motion/react';

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = i * 0.25;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: {
					delay,
					type: 'tween',
					duration: 0.4,
					bounce: 0,
					ease: 'linear',
				},
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

const AnimateLogo = () => {
	return (
		<motion.svg
			width="80"
			height="80"
			viewBox="0 0 100 100"
			fill="none"
			initial="hidden"
			animate="visible"
		>
			<motion.path
				d="M43.2055 4.69658C47.2943 1.87027 52.7057 1.87027 56.7945 4.69658V4.69658C59.2008 6.35988 62.1336 7.08275 65.0373 6.72823V6.72823C69.9712 6.12583 74.7628 8.64065 77.0698 13.0434V13.0434C78.4275 15.6344 80.6884 17.6375 83.4242 18.6729V18.6729C88.073 20.4324 91.147 24.886 91.1437 29.8565V29.8565C91.1418 32.7817 92.2129 35.606 94.1541 37.7943V37.7943C97.4527 41.5126 98.105 46.8846 95.7921 51.2843V51.2843C94.431 53.8735 94.0669 56.8721 94.7688 59.7118V59.7118C95.9615 64.5371 94.0426 69.5969 89.9501 72.4178V72.4178C87.5416 74.0779 85.8257 76.5638 85.1275 79.4045V79.4045C83.9412 84.2314 79.8907 87.8198 74.9559 88.4157V88.4157C72.0518 88.7664 69.3772 90.1701 67.4389 92.3609V92.3609C64.1453 96.0836 58.8911 97.3787 54.2447 95.613V95.613C51.5103 94.5739 48.4897 94.5739 45.7553 95.613V95.613C41.1089 97.3787 35.8547 96.0836 32.5611 92.3609V92.3609C30.6228 90.1701 27.9482 88.7664 25.0441 88.4157V88.4157C20.1093 87.8198 16.0588 84.2314 14.8725 79.4045V79.4045C14.1743 76.5638 12.4584 74.0779 10.0499 72.4178V72.4178C5.95738 69.5969 4.03846 64.5371 5.23119 59.7118V59.7118C5.93312 56.8721 5.56902 53.8735 4.2079 51.2843V51.2843C1.89505 46.8846 2.54733 41.5126 5.84589 37.7943V37.7943C7.7871 35.606 8.85822 32.7817 8.85628 29.8565V29.8565C8.85299 24.886 11.927 20.4324 16.5758 18.6729V18.6729C19.3116 17.6375 21.5725 15.6344 22.9302 13.0434V13.0434C25.2372 8.64065 30.0288 6.12583 34.9627 6.72823V6.72823C37.8664 7.08275 40.7992 6.35988 43.2055 4.69658V4.69658Z"
				fill="#F8E99F"
				initial={{ rotate: 0, opacity: 0, scale: 0 }}
				animate={{ rotate: -360, opacity: 0.8, scale: 1 }}
				transition={{
					rotate: {
						delay: 1.8,
						duration: 12,
						repeat: Infinity,
						ease: 'linear',
					},
					opacity: {
						duration: 0.5,
					},
					scale: {
						duration: 0.15,
						type: 'tween',
					},
				}}
				style={shape}
			/>
			<motion.line
				x1="30"
				y1="22"
				x2="58"
				y2="83"
				fill="transparent"
				stroke="#C4BEB4"
				variants={draw}
				custom={4}
				style={shape}
			/>
			<motion.line
				x1="15"
				y1="51"
				x2="37"
				y2="59"
				fill="transparent"
				stroke="#C4BEB4"
				variants={draw}
				custom={1}
				style={shape}
			/>
			<motion.line
				x1="37"
				y1="59"
				x2="52"
				y2="40"
				fill="transparent"
				stroke="#C4BEB4"
				variants={draw}
				custom={2}
				style={shape}
			/>

			<motion.line
				x1="52"
				y1="40"
				x2="70"
				y2="78"
				fill="transparent"
				stroke="#C4BEB4"
				variants={draw}
				custom={3}
				style={shape}
			/>
			<motion.circle
				className="circle-path"
				cx="50"
				cy="50"
				r="35"
				fill="transparent"
				stroke="#C4BEB4"
				variants={draw}
				custom={5}
				style={shape}
			/>
		</motion.svg>
	);
};
const shape: React.CSSProperties = {
	strokeWidth: 4,
	strokeLinecap: 'round',
};
export default AnimateLogo;
