const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

module.exports = withPlugins([nextImages], {
  images: {
    disableStaticImages: true,
  },
});
//for github pages
// module.exports ={
//   basePath: '/MyPortfolio',
//   assetPrefix: '/MyPortfolio'
// }

//for github pages


