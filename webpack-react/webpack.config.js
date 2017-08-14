const path = require('path');//引用path模块
const webpack = require('webpack');//引用webpack模块
const options={
			  "libraryName": "antd",
			  "style": true,   // or 'css' 
			}
module.exports = {//模块输出
  	context: path.resolve(__dirname, './src')//开发环境路径
	,entry: {//入口配置
	    index: './index.js',								//主界面
	    // error: './error.js',								//错误页  
	    // 404: './404.js',
	     //main:'./main.js',									//404页面未发现
	//  app:['./home.js', './events.js', './vendor.js'],	//将多个文件打包成app.bundle.js
	}
	,output: {//出口配置
		path: path.resolve(__dirname, './dist'),			//出口路径
		publicPath: 'dist/',								//出口路径
		filename: '[name].bundle.js',						//出口文件名,[name]为entry的key
		//filename: 'bundle.js',								//出口文件
		chunkFilename: '[name].[chunkhash:7].chunk.js', 	//按需打包
	}
	,module: {
	  	rules: [
	  	
		{
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|\/dist/,
                loader: 'babel-loader'
       	},
       
//	  	{
//	  		test: /\.js$/,
//	  		include: [path.resolve(__dirname, 'src')],
//	  		exclude: /node_modules/,
//	  		loader: 'babel-loader',
//	  		options: {
//	  			presets: [
//	  				['es2015', {
//	  					"modules": false
//	  				}],
//	  				'react'
//	  			]
//	  		}
//	  	}
	  	
	  	{
	  		test: /\.(scss|css)$/,
	  		loaders: ['style-loader', 'css-loader', 'sass-loader']
	  	},
	  	{
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
	  	//webpack2会自动插入这一条
//	  	, {
//	  		test: /\.json/,
//	  		// exclude: /node_modules/,
//	  		loader: 'json-loader'
//	  	}
	  	 {
	  		test: /\.(png|jpg)$/,
	  		loader: 'url-loader'
	  	}, {
	  		test: /\.html$/,
	  		loader: 'html-loader'
	  	}, {
	  		test: /\.txt$/,
	  		loader: 'text-loader'
	  	}, {
	  		test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
	  		loader: 'url-loader?limit=10000&mimetype=application/font-woff'
	  	}, {
	  		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	  		loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
	  	}, {
	  		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	  		loader: 'file-loader'
	  	}, {
	  		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	  		loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
	  	}]
  	}
	,devServer: {//热启动配置
	//	contentBase: "dist/",
		open: false,	//运行服务直接打开窗口
//		devtool: 'eval',
	//	port: 9898,	//端口
		hot:true,	//热启动
	//	host: 'localhost', //Change to '0.0.0.0' for external facing server
	//	quiet:true,
	//	inline: true,	//监控代码
	//	historyApiFallback: true,
	//	progress: true,
		historyApiFallback: true, //路由刷新问题
//	    proxy: {
//	      '^\/users|sitters|bookings': {
//	        target: 'http://127.0.0.1:3001',
//	        rewrite: function(req) {
//	          req.url = req.url.replace(/^\/api/, '');
//	        }
//	      }
//	    }
	}
	,plugins: [
		new webpack.HotModuleReplacementPlugin(), //热启动插件
//      new webpack.optimize.UglifyJsPlugin({ //生产去掉comments和warnings
//      	output: {
//      		comments: true,
//      	},
//      	compress: {
//			    warnings: false,		//去掉warning
//			    drop_debugger: true, 	//去掉debug
//			    drop_console: true		//去掉console
//      	}
//      }),
        new webpack.ProvidePlugin({ //设置jquery自动起作用
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //["import", options]
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
    ]
};

//if (process.env.NODE_ENV !== 'production') {
//  const production_plugins=[
//      new webpack.DefinePlugin({
//          'process.env': {
//              NODE_ENV: JSON.stringify('production')
//          }
//      }),
//      new webpack.optimize.UglifyJsPlugin({ //生产去掉comments和warnings
//      	output: {
//      		comments: false,
//      	},
//      	compress: {
//      		warnings: false
//      	}
//      })
//  ];
//  module.exports.plugins.push(production_plugins);
//}

console.log("运行webpack.config.js");