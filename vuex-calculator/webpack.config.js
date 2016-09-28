module.exports = {
    entry: [
        'style!css!./node_modules/bootstrap/dist/css/bootstrap.min.css',
        './app/main'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)/,
                loader: 'url?limit=100000'
            }
        ]
    }
};