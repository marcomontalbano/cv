const path = require('path');
const { getContent } = require('netlify-cms-json-exporter');

module.exports = function () {
    const configPath = path.resolve('src', 'static', 'admin', 'config.yml');
    const contentPath = path.resolve('content');

    return [
        {
            url: '/',
            title: 'home',
            data: getContent(configPath, contentPath),
        },
    ];
};
