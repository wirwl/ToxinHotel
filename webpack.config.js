const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const discardduplicates = require('postcss-discard-duplicates');
const flexbugsfixes = require('postcss-flexbugs-fixes');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require('sass');

let devServer;
process.noDeprecation = true;
process.traceDeprecation = true;

module.exports = ((env, argv) => {
  const isDev = argv.mode === 'development';
  const dtValue = isDev ? 'source-map' : 'none';

  // ------------common values for all configs--------------------------------
  const common = {
    devServer: {
      stats: 'errors-only',
      before(app, server) {
        devServer = server;
      },
    },
    performance: { hints: false },
    devtool: dtValue,
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                // attrs: ['img:src'],
                attrs: false,
                cache: true,
              },
            },
            `pug-html-loader?pretty=${isDev}`,
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { sourceMap: true, publicPath: '../', ignoreOrder: true },
            },

            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                map: true,
                plugins: [
                  autoprefixer(),
                  flexbugsfixes(),
                  pxtorem({
                    rootValue: 14,
                    unitPrecision: 6,
                    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
                    selectorBlackList: ['html'],
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 0,
                  }),
                  discardduplicates(),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true, implementation: sass },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, 'SRC/common.scss')],
              },
            },
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          include: /(components|pages)/,
          loader: 'file-loader',
          options: {
            context: 'SRC',
            outputPath: 'images',
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          include: /(images)/,
          exclude: /(components)/,
          loader: 'file-loader',
          options: {
            context: 'SRC\\images',
            outputPath: 'images',
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          include: /(node_modules)/,
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
            name: '[path]/[name].[ext]',
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          include: /(fonts)/,
          exclude: /(node_modules)/,
          loader: 'file-loader',
          options: {
            context: 'SRC\\fonts',
            outputPath: 'fonts',
            name: '[path]/[name].[ext]',
          },
        },
      ], // rules
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
            minSize: 0,
          },
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new FriendlyErrorsWebpackPlugin(),
    ],
  };

  return merge({}, common, {
    entry: {
      index: './SRC/pages/index/index.js',
      landing: './SRC/pages/landing/landing.js',
      'room-details': './SRC/pages/room-details/room-details.js',
      'search-room': './SRC/pages/search-room/search-room.js',
      'sign-in': './SRC/pages/sign-in/sign-in.js',
      'sign-up': './SRC/pages/sign-up/sign-up.js',
      cards: './SRC/pages/ui-kit/cards/cards.js',
      'colors-type': './SRC/pages/ui-kit/colors-type/colors-type.js',
      'form-elements': './SRC/pages/ui-kit/form-elements/form-elements.js',
      'headers-footers': './SRC/pages/ui-kit/headers-footers/headers-footers.js',
    },
    output: {
      path: path.resolve(__dirname, 'Result'),
      filename: 'js/[name].js',
    },
    plugins: [

      new MiniCssExtractPlugin({ filename: 'css/[name].css' }),

      new HtmlWebpackPlugin({
        template: './SRC/pages/index/index.pug', filename: 'index.html', chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/landing/landing.pug', filename: 'pages/landing.html', chunks: ['landing'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/room-details/room-details.pug', filename: 'pages/room-details.html', chunks: ['room-details'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/search-room/search-room.pug', filename: 'pages/search-room.html', chunks: ['search-room'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/sign-in/sign-in.pug', filename: 'pages/sign-in.html', chunks: ['sign-in'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/sign-up/sign-up.pug', filename: 'pages/sign-up.html', chunks: ['sign-up'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/ui-kit/cards/cards.pug', filename: 'pages/ui-kit/cards.html', chunks: ['cards'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/ui-kit/colors-type/colors-type.pug', filename: 'pages/ui-kit/colors-type.html', chunks: ['colors-type'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/ui-kit/form-elements/form-elements.pug', filename: 'pages/ui-kit/form-elements.html', chunks: ['form-elements'],
      }),
      new HtmlWebpackPlugin({
        template: './SRC/pages/ui-kit/headers-footers/headers-footers.pug', filename: 'pages/ui-kit/headers-footers.html', chunks: ['headers-footers'],
      }),
    ],
  });
});
