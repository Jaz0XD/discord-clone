/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ensure this configuration is only applied for server builds
    if (isServer) {
      config.externals.push({
        "utf-8-validate": "commonjs utf-8-validate",
        bufferutil: "commonjs bufferutil",
      });
    }

    return config;
  },
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
};

export default nextConfig;
