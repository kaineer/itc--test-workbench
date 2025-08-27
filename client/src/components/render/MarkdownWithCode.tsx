import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  markdown: string;
}

export const MarkdownWithCode = ({ markdown }: Props) => {
  return (
    <Markdown
      children={markdown}
      components={{
        code(props) {
          const {children, className, node, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={ghcolors}
            />
          ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
        }
      }}
    />
  )
}
