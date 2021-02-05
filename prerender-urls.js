const path = require('path');
const { getContent } = require('netlify-cms-json-exporter');

const configPath = path.resolve('src', 'static', 'admin', 'config.yml');
const contentPath = path.resolve('content');

module.exports = [
    {
        url: '/',
        title: 'Homepage',
        data: getContent(configPath, contentPath),
    },
];
