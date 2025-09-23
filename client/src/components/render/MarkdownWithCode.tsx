import clsx from 'clsx';
import classes from './MarkdownWithCode.module.css'
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  markdown: string;
  inline?: boolean;
}

export const MarkdownWithoutCode = ({ markdown }: Omit<Props, 'inline'>) => {
  return (
    <div className={clsx(classes.markdownInline, classes.inline)}>
      <Markdown children={markdown} />
    </div>
  )
}

export const MarkdownWithCode = ({ markdown, inline = false }: Props) => {
  return (
    <div className={clsx(classes.markdown, {[classes.inline]: inline })}>
      <Markdown
        children={markdown}
        components={{
          code(props) {
            const {children, className, ...rest} = props
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
    </div>
  )
}
