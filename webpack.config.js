const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true, 
        port: 3000, 
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            },
        ],      
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
        }),
    ],
    mode: 'development',
};
