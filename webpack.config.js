const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
//const StyleLintPlugin = require('stylelint-webpack-plugin');
var merge = require('webpack-merge');
//const CssUrlRelativePlugin = require('css-url-relative-plugin');

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

// smp.wrap({ })
// module.exports = (env, argv) => {}

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";
    //var isDev = "development";

    //var mode = argv.mode === "development" ? 'Result\/dev' : 'Result\/prod';
    var pathOutput = isDev ? 'Result/dev' : 'Result/prod';
    var dtValue = isDev ? 'source-map' : 'none';

    //------------common values for all configs--------------------------------
    var common = {
        devtool: dtValue,
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        'html-loader?attrs=false',
                        `pug-html-loader?pretty=${isDev}`,
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    ///\.scss$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            /* publicPath: (resourcePath, context) => {                                
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }, */
                            sourceMap: true
                        },
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    },
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread'],
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test: /\.m?js$/,
                    //include: path.resolve(__dirname, 'src/jquery'),
                    include: /jquery/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                            const relativePath = path.relative(context+'\\SRC', resourcePath);
                            //console.log('url: '+url);                            
                            //console.log('resourcePath: '+resourcePath);                            
                            //console.log('context: '+context+'\\SRC');
                            //console.log('result: '+relativePath);
                            //console.log('---------------');
                            return relativePath;
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    include: /components/,
                    loader: 'file-loader',
                    options: { outputPath: 'images', name: '[name].[ext]' }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)$/,
                    include: /fonts/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts', name: '[folder]/[name].[ext]',
                        //publicPath: './'                        
                    }
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
              })
        ]
    };
    //------config for index.html file(main page)------------------------------------------------------------------------    

    var indexCFG = merge(common, {
        entry: "./SRC/index.js",
        output: {
            path: path.resolve(__dirname, pathOutput),
            filename: "index.js"
        },
        plugins: [
            //new StyleLintPlugin({ syntax: "scss", fix: true }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: 'index.css' }),
            new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/index.pug', inject: true }),
        ]
    });
    //------config for ui-kit/hf/hf.html file--------------------------------------------------------------------
    var uikithfCFG = merge(common, {
        entry: "./SRC/pages/ui-kit/hf/hf.js",
        output: {
            path: path.resolve(__dirname, pathOutput),
            filename: "pages/ui-kit/hf/hf.js",
            publicPath: '../../../'
        },
        plugins: [
            //new StyleLintPlugin({ syntax: "scss", fix: true }),
            //new CssUrlRelativePlugin(),
            new MiniCssExtractPlugin({ filename: 'pages/ui-kit/hf/hf.css' }),
            new HtmlWebpackPlugin({ filename: 'pages/ui-kit/hf/hf.html', template: 'src/pages/ui-kit/hf/hf.pug', inject: true }),


        ]
    });
    var uikitctCFG = merge(common, {
        entry: "./SRC/pages/ui-kit/ct/ct.js",
        output: {
            path: path.resolve(__dirname, pathOutput),
            filename: "pages/ui-kit/ct/ct.js",
            publicPath: '../../../'
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: 'pages/ui-kit/ct/ct.css' }),
            new HtmlWebpackPlugin({ filename: 'pages/ui-kit/ct/ct.html', template: 'src/pages/ui-kit/ct/ct.pug', inject: true }),
        ]
    });
    var uikitfeCFG = merge(common, {
        entry: "./SRC/pages/ui-kit/fe/fe.js",
        output: {
            path: path.resolve(__dirname, pathOutput),
            filename: "pages/ui-kit/fe/fe.js",
            publicPath: '../../../'
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: 'pages/ui-kit/fe/fe.css' }),
            new HtmlWebpackPlugin({ filename: 'pages/ui-kit/fe/fe.html', template: 'src/pages/ui-kit/fe/fe.pug', inject: true }),
        ]
    });
    //console.log('---------------------');a
    //console.log(uikithfCFG.isOnlyDev);
    //console.log(indexCFG.isOnlyDev);
    //var cfgsForDev = [indexCFG, uikithfCFG];
    //var cfgsForProd = [indexCFG,uikithfCFG];
    //console.log("-----------------------------");
    //console.log(isDev);
    //return isDev ? cfgsForDev : cfgsForProd;
    if (isDev) return [indexCFG, uikithfCFG, uikitctCFG, uikitfeCFG];
    return [indexCFG];
}

// filename: `[name]${mode === 'production' ? '.min' : ''}.js`,