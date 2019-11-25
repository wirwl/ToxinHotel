const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const discardduplicates = require('postcss-discard-duplicates');
const flexbugsfixes = require('postcss-flexbugs-fixes');
var merge = require('webpack-merge');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

process.noDeprecation = true;
process.traceDeprecation = true;

module.exports = ((env, argv) => {

    var isDev = argv.mode === "development";
    var pathOutput = isDev ? 'Result/dev' : 'Result/prod';
    var dtValue = isDev ? 'source-map' : 'none';

    function AddHTMLPage(data) {
        let common_path = data.input_path.substring(data.input_path.indexOf('/') + 1);
        data.output_path = data.output_path ? data.output_path : common_path;
        let result = merge({}, common, {
            entry: "./" + data.input_path + "/" + data.common_filename + ".js",
            output: {
                path: path.resolve(__dirname, pathOutput),
                filename: data.output_path + '/' + data.common_filename + ".js",
                publicPath: data.publicPath || ''
            },
            plugins: [
                // new CleanWebpackPlugin(),
                new MiniCssExtractPlugin({ filename: data.output_path + '/' + data.common_filename + '.css' }),
                new HtmlWebpackPlugin({ filename: data.output_path + '/' + data.common_filename + '.html', template: data.input_path + '/' + data.common_filename + '.pug' }),
            ]
        })
        return result;
    }
    //------------common values for all configs--------------------------------
    var common = {
        devServer: {
            stats: 'errors-only',
        },
        devtool: dtValue,
        module: {
            rules: [
                {
                    // test: /\.pug$/,
                    // use: [
                    //     'html-loader?attrs=false',
                    //     `pug-html-loader?pretty=${isDev},cache=false`,
                    // ]
                    test: /\.pug$/,
                    use: ["pug-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: { sourceMap: true }
                        },
                        {
                            loader: "css-loader",
                            options: { sourceMap: true, url: true }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                "map": true,
                                plugins: [
                                    autoprefixer(),
                                    discardduplicates(),
                                    flexbugsfixes()
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: { sourceMap: true, implementation: require('sass') }
                        },
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    //include: /pages/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread'],
                            cacheDirectory: true,
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    include: /(components)/,
                    loader: 'file-loader',
                    options: {
                        context: 'SRC',
                        outputPath: 'images',
                        name: '[path][name].[ext]'
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    include: /(images)/,
                    exclude: /(components)/,
                    loader: 'file-loader',
                    options: {
                        context: 'SRC\\images',
                        outputPath: 'images',
                        name: '[path][name].[ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)$/,
                    include: /(node_modules)/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts', 
                        name: '[path]/[name].[ext]',
                    }
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
                    }
                },
            ]//rules
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new FriendlyErrorsWebpackPlugin(),
        ]
    };
    //---UI-KIT---------------
    var uikithfCFG = AddHTMLPage({ common_filename: 'hf', input_path: 'SRC/pages/ui-kit/hf', publicPath: '/' });
    var uikitctCFG = AddHTMLPage({ common_filename: 'ct', input_path: 'SRC/pages/ui-kit/ct', publicPath: '/' });
    var uikitfeCFG = AddHTMLPage({ common_filename: 'fe', input_path: 'SRC/pages/ui-kit/fe', publicPath: '/' });
    var uikitcardsCFG = AddHTMLPage({ common_filename: 'cards', input_path: 'SRC/pages/ui-kit/cards', publicPath: '/' });
    //---Site-Pages-----------
    var indexCFG = AddHTMLPage({ common_filename: 'index', input_path: 'SRC/pages/index', output_path: '.', is_clean: true });
    var searchroomCFG = AddHTMLPage({ common_filename: 'sr', input_path: 'SRC/pages/search-room', publicPath: '/' });
    var roomdetailsCFG = AddHTMLPage({ common_filename: 'rd', input_path: 'SRC/pages/room-details', publicPath: '/' })
    var signupCFG = AddHTMLPage({ common_filename: 'sign-up', input_path: 'SRC/pages/sign-up', publicPath: '/' })
    var signinCFG = AddHTMLPage({ common_filename: 'sign-in', input_path: 'SRC/pages/sign-in', publicPath: '/' })

    if (isDev) return [uikithfCFG, uikitctCFG, uikitfeCFG, uikitcardsCFG, indexCFG, searchroomCFG, roomdetailsCFG, signupCFG, signinCFG];
    return [indexCFG, searchroomCFG, roomdetailsCFG, signupCFG,];
})