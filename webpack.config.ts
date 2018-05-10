import * as webpack from 'webpack'
// xxximport { InjectManifest } from 'workbox-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    filename: 'interactive-partition-layout.js',
    library: ['interactive-partition-layout'],
    libraryTarget: 'umd',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  }
}

export default config
