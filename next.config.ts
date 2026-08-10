import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.usekultra.com",
          },
        ],
        destination: "https://usekultra.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
