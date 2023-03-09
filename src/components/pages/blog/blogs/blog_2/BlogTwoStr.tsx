import { useContext } from 'react'
import * as style from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import ThemeContext from '../../../../../context/themeContext'
import DataContext from '../../../../../context/dataContext'
import { Language } from '../../../../../enum/LanguageEnum'
import BlogTwoEs from './BlogTwoEs'
import BlogTwoEn from './BlogTwoEn'
import blogII from '../../../../../assets/blog/blogII.png'

export default function BlogTwoStr() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <style.BlogMain>
          <style.BlogSectionTheme className={themeContext.theme}>
            <style.BoxGrid>
              <style.BoxGridOne>
                {dataContext.language_current === Language.es ? (
                  <BlogTwoEs blogI={blogII} />
                ) : (
                  <BlogTwoEn blogI={blogII} />
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
