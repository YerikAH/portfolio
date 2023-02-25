import { useEffect, useState } from 'react'
import { BLOG_FILTER } from '../../../../../constant/blogInitialState'
import { TopicsEnum } from '../../../../../enum/LanguageEnum'
import { BlogPreview } from '../../../../../interface/data'
import { NavigationBlogProps } from '../../../../../interface/props'
import {
  GroupBox,
} from '../../../../../styles/blog/section_first_blog'
import WordFilter from './WordFilter'

export default function GroupBoxBlog({ nav, filter }: NavigationBlogProps) {
  const [BlogFilter, setBlogFilter] = useState<BlogPreview[]>(BLOG_FILTER)
  useEffect(() => {
    const newBlogFilter = nav.blog_preview.filter(item=>item.word === filter)
    setBlogFilter(filter === TopicsEnum.all ? nav.blog_preview : newBlogFilter)
  }, [filter, nav])
  return (
    <GroupBox>
      <WordFilter blogPreview={BlogFilter} nav={nav}/>
    </GroupBox>
  )
}
