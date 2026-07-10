// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "kuldeep-travel.local",
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "kuldeep-travel.local",
//       },
//       {
//         protocol: "https",
//         hostname: "kuldeep-travel.local",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;