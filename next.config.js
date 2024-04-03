
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
          beforeFiles: [
            {
              source: '/some-page',
              destination: '/somewhere-else',
              has: [{ type: 'query', key: 'overrideMe' }],
            },
          ]
        }
      }
  }; 
