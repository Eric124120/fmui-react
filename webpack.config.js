/**
 * Created by huangchengwen on 16/12/26.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	 devtool: 'source-map', //debug时将包里的js对应到源码
	entry: {
		main: __dirname + "/app/main.js",
		common: __dirname + "/packages/index.js",
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].[hash:8].js",
		chunkFilename: '[name].[chunkhash:8].chunk.js'
	},
	/*
	 * Loaders配置
	 * test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
	 * loader：loader的名称（必须）
	 * include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
	 * query：为loaders提供额外的设置选项（可选）
	 */
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/i,
				loader: 'style!css!sass?modules!postcss-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=4192&name=images/[name]_[hash:8].[ext]'
			}
		]
	},
	//externals 指定的依赖不会被webpack解析,但会成为bundle里的依赖
	externals: {
		"react": 'React',
        "react-dom": 'ReactDOM',
        "react-router": 'ReactRouter',
        "redux": 'Redux',
        "react-redux": 'ReactRedux'
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon:'./app/images/favicon.ico', //favicon路径
			template: __dirname + "/app/index.html"
		})
	],

	/*
	 * devserver配置选项
	 * contentBase: 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
	 * port: 设置默认监听端口，如果省略，默认为”8080“
	 * inline: 设置为true，当源文件改变时会自动刷新页面
	 * colors: 设置为true，使终端输出的文件为彩色的
	 * historyApiFallback: 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	 */
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        host: '0.0.0.0',
        // 代理接口（用于mock或express）
        proxy: {
            '*': {
                target: 'http://127.0.0.1:3031',
                secure: false
            }
        }
    },
}