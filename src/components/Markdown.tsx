import { render } from '@comark/html'
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

type Props = {
  markdown: string
}

const convertMarkdownToHtml = async (markdown: string): Promise<string> =>
  render(markdown)

const Markdown = ({ markdown }: Props): h.JSX.Element => {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    async function convert() {
      const html = await convertMarkdownToHtml(markdown)
      setHtml(html)
    }

    convert()
  }, [markdown])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Markdown
