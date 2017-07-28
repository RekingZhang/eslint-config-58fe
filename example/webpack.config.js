const path = require('path');
const config = {
	entry: path.join(__dirname, 'main.js'),
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
module.exports = config;

