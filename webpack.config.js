let path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'www/dist'),
        filename: '[name].bundle.js?[hash]',
    },
    optimization: {
     runtimeChunk: 'single',
         splitChunks: {
           cacheGroups: {
                 vendor: {
                       test: /[\\/]node_modules[\\/]/,
                           name: 'vendors',
                           chunks: 'all'
                     }
               }
         }
    },
    mode: 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [

            {
                test: /\.vue$/,
                loader: 'vue-loader',

            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                query: {
                    compact: false
                    //presets: ['es2016', 'es2015'],
                    //comments: false,
                    //plugins: ['babel-plugin-transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                loader: "pug-plain-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new ExtractTextPlugin('[name]css/bundle.css?[hash]'),
        // new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            hash: true,
            filename: "index.html"
        })
    ],

}