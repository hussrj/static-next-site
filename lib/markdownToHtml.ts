import {unified} from 'unified'
import remParse from 'remark-parse'
import remHtml from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remParse)
    .use(remHtml)
    .process(markdown)
  return result.toString()
}
