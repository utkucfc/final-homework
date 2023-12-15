/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
};

module.exports = nextConfig;
