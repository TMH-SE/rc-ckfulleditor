import * as webpack from 'webpack'
import * as path from 'path'
import * as fs from 'fs'

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
const TerserPlugin = require('terser-webpack-plugin')

const pkg = require('./package.json')
const { styles } = require('@ckeditor/ckeditor5-dev-utils')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath: string): string =>
  path.resolve(appDirectory, relativePath)

const moduleFileExtensions = ['ts', 'tsx']
const resolveModule = (
  resolveFn: (arg: string) => string,
  filePath: string
): string => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

const config: webpack.Configuration = {
  devtool: 'source-map',
  performance: { hints: false },
  entry: {
    'rc-ckfulleditor': resolveModule(resolvePath, 'src/index'),
    'rc-ckfulleditor.min': resolveModule(resolvePath, 'src/index'),
    ckeditor: resolveModule(resolvePath, 'src/ckeditor')
  },
  output: {
    library: pkg.name,
    path: resolvePath('_bundles'),
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            // Preserve CKEditor 5 license comments.
            comments: /^!/
          }
        },
        extractComments: false
      })
    ]
  },
  resolve: {
    modules: [resolvePath('src'), resolvePath('node_modules')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: resolvePath('src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            '@babel/preset-env'
          ]
        }
      },
      {
        test: /\.svg$/,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                },
                minify: true
              })
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        enabled: true,
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
  ]
}

export default config
