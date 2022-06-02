const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const CompressionPlugin = require('compression-webpack-plugin');



const vendor_lib = [
    "bootstrap",
    "jquery",
    "popper.js",
    "wow.js"
]


module.exports = {
    entry: {
        bundleUser: './Controllers/indexUser.js',
        bundleAdmin: './Controllers/indexAdmin.js',
        bundleLogin: './Controllers/indexLogin.js',
        bundleRegister: './Controllers/indexRegister.js',
        bundleCourse: './Controllers/Course.js',
        bundleDetailCourse: './Controllers/detailCourse.js',
        bundleUserDetail: './Controllers/userDetail.js',
        vendors: vendor_lib
    },

    output: {
        path: path.join(__dirname, 'build'),
        publicPath : '/',
        filename: '[name].js',
        chunkFilename: '[id].js'
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
            chunks: ['bundleUser', 'vendors'],
            template: './Views/indexUser.html',
            filename: 'indexUser.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleAdmin','vendors'],
            template: './Views/indexAdmin.html',
            filename: 'indexAdmin.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleLogin', 'vendors'],
            template: './Views/login.html',
            filename: 'indexLogin.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleRegister', 'vendors'],
            template: './Views/register.html',
            filename: 'indexRegister.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleCourse', 'vendors'],
            template: './Views/Course.html',
            filename: 'indexCourse.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleDetailCourse', 'vendors'],
            template: './Views/detailCourse.html',
            filename: 'indexDetailCourse.ejs'
        }),
        new HtmlWebpackPlugin({
            chunks: ['bundleUserDetail', 'vendors'],
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