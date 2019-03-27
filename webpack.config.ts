import * as path from "path";
import * as webpack from "webpack";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import * as VueLoaderPlugin from "vue-loader/lib/plugin";

const env = require("./env.config.json");

const config: webpack.Configuration = {
    entry: {
        app: [
            "./src/bootstrap.ts"
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".vue"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@rocket": path.resolve(__dirname, "src/rocket"),
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        host: "0.0.0.0",
        contentBase: path.join(__dirname, "/dist"),
        watchContentBase: true,
        port: 8080,
        before: (app) => {
            app.get('/', function(req, res) {
                res.sendFile(path.join(__dirname, "public/index.html"));
            });
        }
    },
    mode: <any>process.env.NODE_ENV,
    devtool: "cheap-module-source-map",
    module: {
        rules: [{
            test: /\.tsx$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@vue/babel-preset-jsx"]
                }
            }, {
                loader: "ts-loader"
            }]
        }, {
            test: /\.ts$/,
            loader: "ts-loader"
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: (<any>ExtractTextPlugin).extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.scss$/,
            use: (<any>ExtractTextPlugin).extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {}  
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    caseSensitive: true
                }
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1
                }
            }]
        }, {
            test: /\.font\.(js|json)$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: { url: false }
                }, {
                    loader: "webfonts-loader",
                    options : { publicPath: './' }
                }]
            })
        }]
    },
    plugins: <any>[
        new ExtractTextPlugin('[name].styles.css'),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify({
                ...env,
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            })
        })
    ]
};

export default config;