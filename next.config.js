require('dotenv').config();
const withSass = require('@zeit/next-sass')
module.exports = withSass()
module.exports.exportPathMap = function (defaultPathMap) {
    return {
        '/': { page: '/' },
        '/newsfeed': { page: 'newsfeed' },
        '/overview': { page: 'overview' },
        '/characters': { page: 'characters' },
        '/world': { page: 'world' },
        '/fun-stuff': { page: 'fun-stuff' },
        '/article': { page: 'article' }
    }
}