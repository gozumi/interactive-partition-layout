/*tslint:disable:object-literal-sort-keys*/

import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    filename: 'interactive-partition-layout.js',
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
  }
}

export default config
