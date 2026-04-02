/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'source.unsplash.com', 'ui-avatars.com', 'api.dicebear.com', 'avatars.dicebear.com'],
  },
}

module.exports = nextConfig