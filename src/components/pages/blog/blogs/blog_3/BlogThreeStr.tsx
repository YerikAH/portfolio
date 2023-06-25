import { useContext } from 'react'
import * as style from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import ThemeContext from '../../../../../context/themeContext'
import DataContext from '../../../../../context/dataContext'
import { Language } from '../../../../../enum/LanguageEnum'
import BlogThreeEs from './BlogThreeEs'
import BlogThreeEn from './BlogThreeEn'
import blogII from '../../../../../assets/blog/blogII.png'

export default function BlogThreeStr() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  console.log('HOl,a mud o')
  return (
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <style.BlogMain>
          <style.BlogSectionTheme className={themeContext.theme}>
            <style.BoxGrid>
              <style.BoxGridOne>
                {dataContext.language_current === Language.es ? (
                  <BlogThreeEs blogI={blogII} />
                ) : (
                  <BlogThreeEn blogI={blogII} />
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
