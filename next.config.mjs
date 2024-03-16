/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'qph.cf2.quoracdn.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
