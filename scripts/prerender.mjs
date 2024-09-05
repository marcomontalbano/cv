// @ts-check

import { writeFileSync } from 'fs'
import path from 'path'
import { getContent } from 'netlify-cms-json-exporter'

const configPath = path.resolve('src', 'static', 'admin', 'config.yml')
const contentPath = path.resolve('content')

writeFileSync(
  'data.json',
  JSON.stringify(getContent(configPath, contentPath), undefined, 2),
)
