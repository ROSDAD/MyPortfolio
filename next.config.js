const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

module.exports = withPlugins([nextImages], {
  images: {
    disableStaticImages: true,
  },
});
// module.exports ={
//   basePath: '/MyPortfolio',
//   assetPrefix: '/MyPortfolio'
// }
// /**
//    * @type {import('next').NextConfig}
//    */
// const nextConfig   = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: './',
// };

// export default = nextConfig;
