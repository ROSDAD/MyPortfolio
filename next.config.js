// const withPlugins = require("next-compose-plugins");
// const nextImages = require("next-images");

// module.exports = withPlugins([nextImages], {
//   images: {
//     disableStaticImages: true,
//   },
// });
/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default = nextConfig;
