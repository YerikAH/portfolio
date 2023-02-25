import {
  BoxGridBlog,
  BoxGridOne,
  BoxGridTwo,
  SectionStylesBlogTheme,
} from '../../../../styles/blog/section_first_blog'

import { useContext } from 'react'
import FetchContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'
import NavigationBlog from './first/NavigationBlog'
import BannerBlog from './first/BannerBlog'
import TitleBlog from './first/TitleBlog'
import GroupBoxBlog from './first/GroupBoxBlog'

export default function SectionFirstBlog() {
  const dataContext = useContext(FetchContext)
  const themeContext = useContext(ThemeContext)
  console.log(dataContext.blog.navigation_blog.topics)
  return (
    <FetchContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionStylesBlogTheme className={themeContext.theme}>
          <BoxGridBlog>
            <BoxGridOne>
              <NavigationBlog nav={dataContext.blog} />
            </BoxGridOne>
            <BoxGridTwo>
              <BannerBlog nav={dataContext.blog} />
              <TitleBlog />
              <GroupBoxBlog nav={dataContext.blog} />
            </BoxGridTwo>
          </BoxGridBlog>
        </SectionStylesBlogTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  )
}
