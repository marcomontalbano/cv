import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import showdown from 'showdown'

type Props = {
  markdown: string
}

const converter = new showdown.Converter({
  simplifiedAutoLink: true,
  strikethrough: true,
  emoji: true,
  tables: true,
  tasklists: true,
  simpleLineBreaks: true,
})

const convertMarkdownToHtml = (markdown: string): string =>
  converter.makeHtml(markdown)

const Markdown = ({ markdown }: Props): h.JSX.Element => {
  const sanitizedMarkdown = markdown.replace(/\\$/gm, '')

  const [html, setHtml] = useState(() =>
    typeof window !== 'undefined'
      ? ''
      : convertMarkdownToHtml(sanitizedMarkdown),
  )

  useEffect(() => {
    setHtml(convertMarkdownToHtml(sanitizedMarkdown))
  }, [markdown])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Markdown
