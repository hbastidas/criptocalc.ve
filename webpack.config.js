module.exports = {
    "mode": "production",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "[name].[chunkhash:8].js"
    }
}
