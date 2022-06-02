const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const CompressionPlugin = require('compression-webpack-plugin');



module.exports = {
    entry: {
        bundleUser: './Controllers/indexUser.js',
        bundleAdmin: './Controllers/indexAdmin.js',
        bundleLogin: './Controllers/indexLogin.js',
        bundleRegister: './Controllers/indexRegister.js',
        bundleCourse: './Controllers/Course.js',
        bundleDetailCourse: './Controllers/detailCourse.js',
        bundleUserDetail: './Controllers/userDetail.js',
    },

    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/',
                       }
                    }
                ],  
            },
            {
                test: /\.(woff(2)?|ttf|eot|wav|mp3|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                        }
                    }
                ],
            },
        ],
    },

    optimization: {
        // Cache vendor
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: 'single',
    },



    plugins: [


        // new CompressionPlugin({   
        //     filename: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),

        // parse template duoi khac thanh HTML
        new HtmlWebpackPlugin({
            chunks: ['bundleUser'],
            template: './Views/indexUser.html',
            filename: 'indexUser.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleAdmin'],
            template: './Views/indexAdmin.html',
            filename: 'indexAdmin.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleLogin'],
            template: './Views/login.html',
            filename: 'indexLogin.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleRegister'],
            template: './Views/register.html',
            filename: 'indexRegister.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleCourse'],
            template: './Views/Course.html',
            filename: 'indexCourse.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleDetailCourse'],
            template: './Views/detailCourse.html',
            filename: 'indexDetailCourse.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleUserDetail'],
            template: './Views/userDetail.html',
            filename: 'userDetail.ejs'
        }),
        // Extract CSS ra khoi bundle thanh file rieng
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[name].css",
        }),
        // Khai bao cu phap su dung cac thu vien
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
}