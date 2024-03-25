const nextConfig = {
    reactStrictMode: false,
    swcMinify: false, 
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["127.0.0.1"], 
    },
  };
  
  export default nextConfig;