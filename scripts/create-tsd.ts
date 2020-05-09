import path from 'path';
import fs from 'fs';
import { json2ts } from 'json-ts';

import { getContent } from './netlify-cms';

const contentPath = path.resolve('content');
const content = getContent(contentPath);
const ts = json2ts(JSON.stringify(content), {
    flow: false,
    rootName: 'NetlifyCMSContent',
    prefix: '',
});

fs.writeFileSync('./global.d.ts', ts, 'utf8');
