/**
 * Created by huangchengwen on 16/12/26.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/i,
				loader: 'style!css!sass?modules!autoprefixer'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=4192&name=images/[name]_[hash:8].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon:'./app/images/favicon.ico', //favicon路径
			template: __dirname + "/app/index.html"
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		// 引用模块单独打包（业务内容改变，还会重新打包，后期优化）
		new webpack.optimize.CommonsChunkPlugin({
			names: ['common'],
			chunks: ['main']
		}),
		// 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
		new webpack.optimize.OccurenceOrderPlugin(),
		// 压缩JS和CSS
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
}