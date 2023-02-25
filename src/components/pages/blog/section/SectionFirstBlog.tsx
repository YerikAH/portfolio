import { useContext, useState } from 'react'
// styles
import {
  BoxGridBlog,
  BoxGridOne,
  BoxGridTwo,
  SectionStylesBlogTheme,
} from '../../../../styles/blog/section_first_blog'

// context
import FetchContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'

// components
import NavigationBlog from './first/NavigationBlog'
import BannerBlog from './first/BannerBlog'
import TitleBlog from './first/TitleBlog'
import GroupBoxBlog from './first/GroupBoxBlog'

// enum
import { TopicsEnum } from '../../../../enum/LanguageEnum'

export default function SectionFirstBlog() {
  const dataContext = useContext(FetchContext)
  const themeContext = useContext(ThemeContext)
  const [filter, setFilter] = useState<TopicsEnum>(TopicsEnum.all)

  function handleFilter(value: TopicsEnum) {
    setFilter(value)
  }
  return (
    <FetchContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionStylesBlogTheme className={themeContext.theme}>
          <BoxGridBlog>
            <BoxGridOne>
              <NavigationBlog nav={dataContext.blog} handleFilterProp={handleFilter} />
            </BoxGridOne>
            <BoxGridTwo>
              <BannerBlog nav={dataContext.blog} />
              <TitleBlog filter={filter} language={dataContext.language_current} />
              <GroupBoxBlog nav={dataContext.blog} filter={filter} />
            </BoxGridTwo>
          </BoxGridBlog>
        </SectionStylesBlogTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  )
}
