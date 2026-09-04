/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/works", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
    ];
  },
};

export default nextConfig;
