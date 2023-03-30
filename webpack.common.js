const path = require('path')
const fs = require('fs')
const tsConfig = require('./tsconfig.json')
//const DotenvPlugin = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

console.log('Aliases :\n', defineAliases())
console.log('\n')
console.log('Entries :\n', generateEntryObject())
console.log('\n')
console.log('\n')

module.exports = {
  entry: generateEntryObject(),
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: defineAliases()
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    //new DotenvPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'tsx'],
      overrideConfigFile: path.resolve(__dirname, '.eslintrc')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }]
    })
  ]
}

function defineAliases() {
  let aliasObject = {}
  Object.entries(tsConfig.compilerOptions.paths).forEach(([key, value]) => {
    aliasObject = {
      ...aliasObject,
      [key.replace(/(\/|\*)/g, '')]: path.resolve(
        __dirname,
        value[0].replace('*', '')
      )
    }
  })
  return aliasObject
}

function generateEntryObject() {
  let entryObj = {}
  const srcFiles = fs.readdirSync('./src')
  const entryFiles = srcFiles.filter((file) => file.match(/\.((t|j)s)x?/gm))
  entryFiles.forEach(
    (entry) =>
      (entryObj = { ...entryObj, [entry.split('.')[0]]: `./src/${entry}` })
  )
  return entryObj
}
