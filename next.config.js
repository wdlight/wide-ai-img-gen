/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["wideaiimggen209d6b0.blob.core.windows.net",
              "openaicom.imgix.net", 
              "th.bing.com", 
    ],
  },
};

module.exports = nextConfig;
