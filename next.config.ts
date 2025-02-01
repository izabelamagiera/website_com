import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ hostname: 'cdn.sanity.io' }],
	},
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
