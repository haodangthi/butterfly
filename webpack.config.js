const path = require("path");
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:9000
    },
    plugins:[
        new htmlWebpackPlugin({
        template:'./src/index.html'
    })
],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test:/\.html$/,
                use: [
                    {loader: 'html-loader'}
                    
                ]
            },
            {
                test:/\.(png|jpg|jpeg|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options:{
                        name:"[name].[hash].[ext]"
                    }
                }]
            },

           
        ]
    }
}