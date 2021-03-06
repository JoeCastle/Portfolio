const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//module.exports = (env) => {
//    const isDevBuild = !(env && env.prod);
//    return [{
//        stats: { modules: false },
//        entry: { 'main': './ClientApp/boot.tsx' },
//        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
//        output: {
//            path: path.join(__dirname, bundleOutputDir),
//            filename: '[name].js',
//            publicPath: '/dist/'
//        },
//        module: {
//            rules: [
//                { test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
//                { test: /\.(s*)css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader'}, { loader: 'postcss-loader', options: { config: { path: 'postcss.config.js' } } }, { loader: 'sass-loader' }] },
//                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
//            ]
//        },
//        plugins: [
//            new CheckerPlugin(),
//            new webpack.DllReferencePlugin({
//                context: __dirname,
//                manifest: require('./wwwroot/dist/vendor-manifest.json')
//            })
//        ].concat(isDevBuild ? [
//            // Plugins that apply in development builds only
//            new webpack.SourceMapDevToolPlugin({
//                filename: '[file].map', // Remove this line if you prefer inline source maps
//                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
//            })
//        ] : [
//            // Plugins that apply in production builds only
//            new webpack.optimize.UglifyJsPlugin(),
//            new ExtractTextPlugin('site.css')
//        ])
//    }];
//};


module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    //const extractSiteSass = new ExtractTextPlugin('main.css');
    cache: false;
    watch: true;
        //watchOptions: {
        //    ignored: /node_modules/;
        //};
    watchOptions: {
        aggregateTimeout: 300;
        poll: true;
    }
    let sharedConfig = {
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        //output: {
        //    filename: '[name].js',
        //    publicPath: '/dist/'
        //},
        module: {
            rules: [
                { test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            //options: {
                            //    hmr: process.env.NODE_ENV === 'development',
                            //},
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options:
                            {
                                config:
                                {
                                    path: 'postcss.config.js'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                { test: /\.(png|jpg|JPG|jpeg|gif|svg)$/, use: 'url-loader' }
            ]
        },
        plugins: [
            //extractSiteSass,
            new CheckerPlugin(), // `CheckerPlugin` is optional. Use it if you want async error reporting.
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: isDevBuild ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevBuild ? '[id].css' : '[id].[hash].css',
            }),
        ]
    };

    const clientConfig = merge(sharedConfig, {
        //client properties
        entry: { 'main': './ClientApp/boot.tsx' },
        module: {
            rules: [
                //{ test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader, 'css-loader'] },
                
                //{
                //    test: /\.scss$/,
                //    use: [
                //        {
                //            loader: MiniCssExtractPlugin.loader,
                //            options: {
                //                hmr: process.env.NODE_ENV === 'development',
                //            },
                //        },
                //        { loader: 'css-loader' }, { loader: 'postcss-loader', options: { config: { path: 'postcss.config.js' } } }, { loader: 'sass-loader' }
                //    ],
                //},
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: '/dist/',
            globalObject: 'this'
        },
        //output: {
        //    path: path.join(__dirname, bundleOutputDir),
        //    publicPath: '/dist/',
        //    filename: '[name].js',
        //    library: '[name]_[hash]',
        //},
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
                //new ExtractTextPlugin('main.css')
            ])
    });

    const serverConfig = merge(sharedConfig, {
        //server properties
        resolve: { mainFields: ["main"] },
        entry: { "main-server": "./ClientApp/boot-server.tsx" },
        //output: {
        //    libraryTarget: "commonjs",
        //    path: path.join(__dirname, "./wwwroot/dist"),
        //    globalObject: 'this'
        //},
        output: {
            libraryTarget: "commonjs",
            path: path.join(__dirname, bundleOutputDir),
            //publicPath: '/dist/',
            globalObject: 'this'
        },
        target: "node",
        externals: ["react-helmet"]
    });

    return [clientConfig, serverConfig];
};