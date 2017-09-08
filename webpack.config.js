const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]
    }
};