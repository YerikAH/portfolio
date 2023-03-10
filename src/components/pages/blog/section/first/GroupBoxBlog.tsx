import { useEffect, useState } from 'react'

// interface and enum and props
import { BLOG_FILTER } from '../../../../../constant/blogInitialState'
import { TopicsEnum } from '../../../../../enum/LanguageEnum'
import { NavigationBlogProps } from '../../../../../interface/props'
import { BlogPreview } from '../../../../../interface/data'

// styles
import {
  BoxError,
  GroupBox,
  GroupBoxMove,
  TextBox,
} from '../../../../../styles/blog/section_first_blog'

// components
import WordFilter from './WordFilter'

import { BLOG_WIDTH_CARD } from '../../../../../constant/numberInit'
import CodeIcon from '../../../../images/CodeIcon'

export default function GroupBoxBlog({
  nav,
  filter,
  styleScroll,
  updateScroll,
}: NavigationBlogProps) {
  const [BlogFilter, setBlogFilter] = useState<BlogPreview[]>(BLOG_FILTER)
  useEffect(() => {
    const newBlogFilter = nav.blog_preview.filter((item) => item.word === filter)
    setBlogFilter(filter === TopicsEnum.all ? nav.blog_preview : newBlogFilter)
  }, [filter, nav])

  useEffect(() => {
    const newWidth = BlogFilter.length * BLOG_WIDTH_CARD
    updateScroll?.(newWidth)
  }, [BlogFilter])
  return (
    <GroupBox>
      {BlogFilter.length !== 0 ? (
        <>
          <GroupBoxMove style={styleScroll}>
            <WordFilter blogPreview={BlogFilter} nav={nav} />
          </GroupBoxMove>
        </>
      ) : (
        <BoxError>
          <CodeIcon />
          <TextBox>Error </TextBox>
        </BoxError>
      )}
    </GroupBox>
  )
}
