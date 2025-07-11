import fs from "fs";
/** @type {import('next').NextConfig} */

const nextConfig = {
//   experimental: {
//     https: {
//       key: fs.readFileSync("./localhost+2-key.pem"),
//       cert: fs.readFileSync("./localhost+2.pem"),
//     },
//   },
typescript: {
    ignoreBuildErrors: true, // ⚠️ Dangerous in production!
  },
};

export default nextConfig;
