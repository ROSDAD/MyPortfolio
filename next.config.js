const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

module.exports = withPlugins([nextImages], {
  images: {
    disableStaticImages: false,
  },
});
module.exports ={
  basePath: '/MyPortfolio',
  assetPrefix: '/MyPortfolio'
}
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     loader: "akamai",
//     path: "/MyPortfolio",
//   },
// };

// module.exports = nextConfig;
