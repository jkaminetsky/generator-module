module.exports = {
    entry: './src/generators/app/index.js',
    output: {
        path: './generators/app',
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
