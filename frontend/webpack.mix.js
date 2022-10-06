const mix = require('laravel-mix');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var LiveReloadPlugin = require('webpack-livereload-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('./resources/assets/js/*.js', './dist/assets/js/')
.sass('./resources/style.scss', './dist/style.css')
.copy('./dist/style.css', '../wordpress/wp-content/themes/themename/style.css')
.copy('./resources/*.html', './dist/')
.copy('./resources/assets/', './dist/assets/')
.copy('./resources/assets/', '../wordpress/wp-content/themes/themename/assets/')    
.webpackConfig({
    stats: {
        children: true,
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                files: ['./dist/*.html'],
                server: { baseDir: ['dist'] }
            }
        ),
        new LiveReloadPlugin()
    ]
});
