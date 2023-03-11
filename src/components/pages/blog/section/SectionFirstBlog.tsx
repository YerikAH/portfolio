import { useContext, useEffect, useState } from 'react'
// styles
import {
  BoxGridBlog,
  BoxGridOne,
  BoxGridTwo,
  SectionStylesBlogTheme,
} from '../../../../styles/blog/section_first_blog'

// context
import DataContext from '../../../../context/dataContext'
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
import { BLOG_WIDTH_CARD, BLOG_WIDTH_PAGE_CARD } from '../../../../constant/numberInit'
export default function SectionFirstBlog() {
  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)
  const [filter, setFilter] = useState<TopicsEnum>(TopicsEnum.all)
  const [styleScroll, setStyleScroll] = useState<ScrollBlogStyle>(STYLES_BLOG)
  const [maxScroll, setMaxScroll] = useState(dataContext.blog.blog_preview.length * BLOG_WIDTH_CARD)
  const [stylCurrent, setStylCurrent] = useState({ right: '0' })
  function handleFilter(value: TopicsEnum) {
    setFilter(value)
  }
  function updateScroll(value: number) {
    setMaxScroll(value)
    setStyleScroll(STYLES_BLOG)
  }
  function handleIncrement() {
    const styleScrollCurrent = parseInt(stylCurrent.right)
    const incrementScroll = styleScrollCurrent + BLOG_WIDTH_CARD * 3

    const isIncrementValid =
      styleScrollCurrent < maxScroll &&
      maxScroll > BLOG_WIDTH_PAGE_CARD &&
      incrementScroll !== maxScroll &&
      incrementScroll < maxScroll

    if (isIncrementValid) {
      setStylCurrent({ right: `${incrementScroll}px` })
    }
  }

  function handleDecrement() {
    const styleScrollCurrent = parseInt(stylCurrent.right)
    const decrementScroll = styleScrollCurrent - BLOG_WIDTH_CARD * 3

    const isDecrementValid = styleScrollCurrent >= BLOG_WIDTH_PAGE_CARD

    if (isDecrementValid) {
      setStylCurrent({ right: `${decrementScroll}px` })
    }
  }

  useEffect(() => {
    setStyleScroll(stylCurrent)
  }, [stylCurrent])

  return (
    <DataContext.Provider value={dataContext}>
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
    </DataContext.Provider>
  )
}
