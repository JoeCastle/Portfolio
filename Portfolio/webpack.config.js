const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        entry: { 'main': './ClientApp/boot.tsx' },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                { test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
                //{ test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                //https://medium.com/@realfrancisyan/scss-autoprefixer-with-webpack-9f8456ae751b
                { test: /\.(s*)css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader'}, { loader: 'postcss-loader', options: { config: { path: 'postcss.config.js' } } }, { loader: 'sass-loader' }] },
                //{ test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //https://medium.com/a-beginners-guide-for-webpack-2/using-sass-9f52e447c5ae
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
                /*{
                    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name]-[hash:8].[ext]'
                            },
                        },
                    ]
                },*/
            ]
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('site.css')
        ])
    }];
};