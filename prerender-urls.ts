import path from 'path';
import { getContent } from './scripts/netlify-cms';

const contentPath = path.resolve('content');

module.exports = [
    {
        url: '/',
        title: 'Homepage',
        data: getContent(contentPath),
    },
];
