


module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS() 
module.exports = {
  distDir: 'build',
}
// next.config.js
const withOffline = require('next-offline')



module.exports = withOffline({ dontAutoRegisterSw: true })
