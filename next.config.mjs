/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.cloud.google.com',
                pathname: '/gb_project_images/blog/**',
            },
        ],
    },
};

export default nextConfig;
