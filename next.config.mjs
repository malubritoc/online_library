/** @type {import('next').NextConfig} */

const session = true; 

const nextConfig = {

  reactStrictMode: true,
  images: {
      domains: ["https://firebasestorage.googleapis.com/"],
      formats: ["image/webp", "image/avif"],
  },


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
  