module.exports = {
	target: 'webworker',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'esbuild-loader',
				options: {
					target: 'node14',
				},
			},
		],
	},
}
