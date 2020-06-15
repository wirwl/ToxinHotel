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

  function reloadHtml() {
    const cache = {};
    const plugin = { name: 'CustomHtmlReloadPlugin' };
    this.hooks.compilation.tap(plugin, (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, (data) => {
        const orig = cache[data.outputName];
        const html = data.html.source();
        // plugin seems to emit on any unrelated change?
        if (orig && orig !== html) {
          devServer.sockWrite(devServer.sockets, 'content-changed');
        }
        cache[data.outputName] = html;
      });
    });
  }

  // ------------common values for all configs--------------------------------
  let common = {
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
                attrs: ['img:src'],
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
              options: { sourceMap: true },
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
                    mediaQuery: true,
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
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new FriendlyErrorsWebpackPlugin(),
    ],
  };

  function AddHTMLPage(data) {
    const commonPath = data.input_path.substring(data.input_path.indexOf('/') + 1);
    const newOutputPath = data.output_path ? data.output_path : commonPath;

    if (data.isNeedClean) {
      common = merge(common, { plugins: [new CleanWebpackPlugin()] });
    }

    const result = merge({}, common, {
      entry: `./${data.input_path}/${data.common_filename}.js`,
      output: {
        path: path.resolve(__dirname, 'Result'),
        filename: `${newOutputPath}/${data.common_filename}.js`,
        publicPath: data.publicPath || '',
      },
      plugins: [
        new MiniCssExtractPlugin({ filename: `${newOutputPath}/${data.common_filename}.css` }),
        new HtmlWebpackPlugin({ filename: `${newOutputPath}/${data.common_filename}.html`, template: `${data.input_path}/${data.common_filename}.pug`, inject: false }),
        reloadHtml,
      ],
    });


    return result;
  }
  // --UI - KIT---------------
  const uikithfCFG = AddHTMLPage({ common_filename: 'headers-footers', input_path: 'SRC/pages/ui-kit/headers-footers', publicPath: '../../../' });
  const uikitctCFG = AddHTMLPage({ common_filename: 'colors-type', input_path: 'SRC/pages/ui-kit/colors-type', publicPath: '../../../' });
  const uikitfeCFG = AddHTMLPage({ common_filename: 'form-elements', input_path: 'SRC/pages/ui-kit/form-elements', publicPath: '../../../' });
  const uikitcardsCFG = AddHTMLPage({ common_filename: 'cards', input_path: 'SRC/pages/ui-kit/cards', publicPath: '../../../' });
  // ---Site-Pages-----------
  const landingpageCFG = AddHTMLPage({ common_filename: 'landing', input_path: 'SRC/pages/landing', publicPath: '../../' });
  const searchroomCFG = AddHTMLPage({ common_filename: 'search-room', input_path: 'SRC/pages/search-room', publicPath: '../../' });
  const roomdetailsCFG = AddHTMLPage({ common_filename: 'room-details', input_path: 'SRC/pages/room-details', publicPath: '../../' });
  const signupCFG = AddHTMLPage({ common_filename: 'sign-up', input_path: 'SRC/pages/sign-up', publicPath: '../../' });
  const signinCFG = AddHTMLPage({ common_filename: 'sign-in', input_path: 'SRC/pages/sign-in', publicPath: '../../' });
  const indexCFG = AddHTMLPage({
    common_filename: 'index', input_path: 'SRC/pages/index', output_path: '.', isNeedClean: true,
  });

  return [indexCFG, landingpageCFG, searchroomCFG, roomdetailsCFG,
    signupCFG, signinCFG, uikithfCFG, uikitctCFG, uikitfeCFG, uikitcardsCFG];
});
