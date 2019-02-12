let path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'www/dist'),
        filename: "main.js"
    },
    mode: 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }

        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new ExtractTextPlugin('style.css')
    ],

}