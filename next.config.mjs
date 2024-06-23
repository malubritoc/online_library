/** @type {import('next').NextConfig} */

const session = true; 

const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: session ? '/inicio' : '/signin',
          permanent: false, 
        },
      ];
    },
  };
  
  export default nextConfig;
  