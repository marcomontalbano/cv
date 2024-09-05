import { h, render } from 'preact'
import App from './components/App'

import './style.scss'

import data from '../data.json'

render(
  <App url="/" data={data} />,
  document.getElementById('app') as HTMLElement,
)
