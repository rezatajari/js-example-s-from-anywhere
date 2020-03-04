const path = require('path');

module.exports = {
    entry: {
        admin: './src/admin.js',
        home: './src/home.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
}