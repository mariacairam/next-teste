
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
      async rewrites() {
        return {
          afterFiles: [
            {
              source: '/some-page',
              destination: 'https://teste-cms-strapi-2-production.up.railway.app/admin',
              has: [{ type: 'query', key: 'overrideMe' }],
            },
          ]
        }
      }
  }; 
