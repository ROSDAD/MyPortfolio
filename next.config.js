const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

module.exports = withPlugins([nextImages], {
  images: {
    disableStaticImages: true,
  },
});
module.exports ={
  basePath:'',
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
