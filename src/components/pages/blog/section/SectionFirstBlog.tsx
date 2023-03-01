import { useContext, useEffect, useState } from 'react'
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

import { STYLES_BLOG } from '../../../../constant/stylesInitialState'
import { ScrollBlogStyle } from '../../../../interface/styles'
import { BLOG_WIDTH_CARD } from '../../../../constant/numberInit'
export default function SectionFirstBlog() {
  const dataContext = useContext(FetchContext)
  const themeContext = useContext(ThemeContext)
  const [filter, setFilter] = useState<TopicsEnum>(TopicsEnum.all)
  const [styleScroll, setStyleScroll] = useState<ScrollBlogStyle>(STYLES_BLOG)
  const [maxScroll, setMaxScroll] = useState(dataContext.blog.blog_preview.length * BLOG_WIDTH_CARD)
  const [stylCurrent, setStylCurrent] = useState({ right: '0' })
  function handleFilter(value: TopicsEnum) {
    setFilter(value)
  }
  function handleIncrement() {
    console.log(styleScroll)
    const styleScrollCurrent = parseInt(stylCurrent.right)
    if (styleScrollCurrent > maxScroll) {
      return
    } else {
      if (maxScroll > 810) {
        console.log('increment')
        const incrementScroll = styleScrollCurrent + BLOG_WIDTH_CARD * 3

        let newValue = {
          right: `${incrementScroll}px`,
        }
        setStylCurrent()
        setStyleScroll(stylCurrent)
      }
    }
  }
  function handleDecrement() {
    // const styleScrollCurrent = parseInt(styleScrollObj.right)
    // if (styleScrollCurrent > maxScroll) {
    //   if (maxScroll > 810) {
    //     const decrementScroll = styleScrollCurrent - BLOG_WIDTH_CARD * 3
    //     styleScroll.right = `${decrementScroll}px`
    //     setStyleScroll(styleScrollObj)
    //   }
    // }
  }

  function updateScroll(value: number) {
    setMaxScroll(value)
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
              <TitleBlog
                filter={filter}
                language={dataContext.language_current}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />
              <GroupBoxBlog
                nav={dataContext.blog}
                filter={filter}
                styleScroll={styleScroll}
                updateScroll={updateScroll}
              />
            </BoxGridTwo>
          </BoxGridBlog>
        </SectionStylesBlogTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  )
}
