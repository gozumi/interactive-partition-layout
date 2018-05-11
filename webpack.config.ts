/*tslint:disable:object-literal-sort-keys*/

import * as CopyPlugin from 'copy-webpack-plugin'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    library: ['interactive-partition-layout'],
    libraryTarget: 'umd',
    path: `${__dirname}/lib`
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: './src/index.d.ts' }
    ])
  ]
}

export default config
