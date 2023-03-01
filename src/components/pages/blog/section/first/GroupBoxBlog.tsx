import { useEffect, useState } from 'react'

// interface and enum and props
import { BLOG_FILTER } from '../../../../../constant/blogInitialState'
import { TopicsEnum } from '../../../../../enum/LanguageEnum'
import { NavigationBlogProps } from '../../../../../interface/props'
import { BlogPreview } from '../../../../../interface/data'

// styles
import { GroupBox, GroupBoxMove } from '../../../../../styles/blog/section_first_blog'

// components
import WordFilter from './WordFilter'

import { BLOG_WIDTH_CARD } from '../../../../../constant/numberInit'

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
      <GroupBoxMove style={styleScroll}>
        <WordFilter blogPreview={BlogFilter} nav={nav} />
      </GroupBoxMove>
    </GroupBox>
  )
}
