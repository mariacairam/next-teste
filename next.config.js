
const url = new URL(process.env.CMS_IMAGE_PATTERN);

/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: url.protocol.replace(':', ''),
          hostname: url.hostname,
          port: url.port,
          pathname: url.pathname,
        },
      ],
    },
    /*async redirects() {
      return [
        {
          source: '/strapi-admin',
          destination: 'https://teste-cms-strapi-2-production.up.railway.app/admin',
          permanent: false,
        },
      ]
    },*/
  }; 
