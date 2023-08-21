/**
 * Created by chenfei on 2018/2/6.
 */

const webpack = require('webpack');
const path = require('path');
const paths = require('./config/paths');

module.exports = {
    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'redux-thunk',
            'reselect',
        ]
    },

    output: {
        filename: '[name].js',
        path: __dirname + paths.vendorPath,
        library: '[name]'
    },
    mode: 'production',  // development | production

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname + paths.vendorPath, 'manifest.json'),
            name: '[name]'
        })
    ]
};
