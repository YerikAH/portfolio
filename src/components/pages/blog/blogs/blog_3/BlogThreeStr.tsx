import { useContext } from 'react'
import * as style from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import ThemeContext from '../../../../../context/themeContext'
import DataContext from '../../../../../context/dataContext'
import { Language } from '../../../../../enum/LanguageEnum'
import BlogThreeEs from './BlogThreeEs'
import BlogThreeEn from './BlogThreeEn'
import banner from '../../../../../assets/blog/blogIII/banner.png'
import imageI from '../../../../../assets/blog/blogIII/imageI.png'
import imageIEn from '../../../../../assets/blog/blogIII/imageIEn.png'

export default function BlogThreeStr() {
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
                  <BlogThreeEs banner={banner} imageI={imageI} />
                ) : (
                  <BlogThreeEn banner={banner} imageI={imageIEn} />
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
