import { render } from '@testing-library/preact'
import { describe, expect, it } from 'vitest'
import Markdown from './Markdown'

describe('Markdown', () => {
  it('should render a given markdown as html', () => {
    const { getByText } = render(<Markdown markdown="# Hello World!" />)
    expect(
      getByText('Hello World!', {
        selector: 'h1',
      }),
    ).toBeDefined()
  })
})
