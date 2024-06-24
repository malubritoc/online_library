/** @type {import('next').NextConfig} */

const nextConfig = {
async redirects() {
      return [
        {
          source: '/',
          destination: '/inicio',
          permanent: false, 
        },
      ];
    },
  };
  
  export default nextConfig;
  