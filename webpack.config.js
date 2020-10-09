const config = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: './app.bundle.js',
    },
    devServer: {
        watchContentBase: true,
    },
};

module.exports = config;
