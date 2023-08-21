/**
 * Created by feichen on 2018/10/5.
 */
const path = require('path');
const paths = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离CSS

let prod = process.env.NODE_ENV;


let modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: "eslint-loader"
                }
            ]
        },
        {
            test: /\.(less$|css$)/,
            use: getLessModule(false)
        },
        {
            test: /\.(woff|svg|eot|ttf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: 'font/[name].[ext]',
                        limit: 1
                    }
                }
            ]
        },
        {
            test: /\.(jpg|png|jpeg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        limit: 1, //大小不超出时会打包为base64
                    }
                }
            ]
        }
    ]
};

function getLessModule(cssModule) {
    return [
        (prod === 'production' ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: './../'
            }
        } : 'style-loader'),
        {
            loader: 'css-loader',
            options: {
                modules: cssModule || false, //开启CSS Modules
            }
        },
        {
            loader: 'less-loader',
            options: {
                lessOptions: {
                    javascriptEnabled: true,
                    implementation: require('less'),
                }
            }
        },
        {
            loader: 'style-resources-loader',
            options: {
                patterns: [
                    path.resolve(__dirname, '../src/style/varible.less')
                ]
            }
        }
    ]
}

module.exports = modules;
