const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CompressionPlugin = require('compression-webpack-plugin');

//
// mix.webpackConfig({
//     plugins: [
//         new BundleAnalyzerPlugin(),
//         new CompressionPlugin({
//             filename: "[path].gz[query]",
//             algorithm: "gzip",
//             test: /\.js$|\.css$|\.html$|\.svg$/,
//             threshold: 10240,
//             minRatio: 0.8
//         })
//     ],
//     output: {
//         chunkFilename: 'js/[name].[contenthash].js'
//     },
//     optimization: {
//         concatenateModules: false
//     }
// });


