import { render, waitFor } from '@testing-library/preact'
import { describe, expect, it } from 'vitest'
import Markdown from './Markdown'

describe('Markdown', () => {
  it('should render a given markdown as html', async () => {
    const { getByText } = render(<Markdown markdown="# Hello World!" />)
    const h1 = await waitFor(() =>
      getByText('Hello World!', { selector: 'h1' })
    )
    expect(h1).toBeDefined()
  })
})
