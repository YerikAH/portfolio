import { useContext } from 'react'
import * as style from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import blogI from '../../../../../assets/blog/blogI.png'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ThemeContext from '../../../../../context/themeContext'
import DataContext from '../../../../../context/dataContext'
import { Language } from '../../../../../enum/LanguageEnum'
import BlogOneEs from './BlogOneEs'
import BlogOneEn from './BlogOneEn'
export default function BlogOneStr() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  const code =
    'function createChildren(style, useInlineStyles) {\n  letchildrenCount = 0;\n return children => {\n    childrenCount += 1;\n   return children.map((child, i) =>createElement({\nnode: child,\nstyle,\nuseInlineStyles,\nkey:`code-segment-${childrenCount}-${i}`\n}));\n}\n}\n'
  return (
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <style.BlogMain>
          <style.BlogSectionTheme className={themeContext.theme}>
            <style.BoxGrid>
              <style.BoxGridOne>
                {dataContext.language_current === Language.es ? (
                  <BlogOneEs atomOneDark={atomOneDark} blogI={blogI} code={code} />
                ) : (
                  <BlogOneEn atomOneDark={atomOneDark} blogI={blogI} code={code} />
                )}
              </style.BoxGridOne>
              <style.BoxGridTwo>
                <CardLast />
              </style.BoxGridTwo>
            </style.BoxGrid>
          </style.BlogSectionTheme>
        </style.BlogMain>
      </DataContext.Provider>
    </ThemeContext.Provider>
  )
}
