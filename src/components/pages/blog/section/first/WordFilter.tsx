import { useEffect, useState } from 'react'
// const
import { BLOG_INIT } from '../../../../../constant/blogInitialState'

// helpers
import { returnWord, selectColor } from '../../../../../helpers/switchBlog'

// interface
import { Blog } from '../../../../../interface/data'
import { FilterProps } from '../../../../../interface/props'

// styles
import * as style from '../../../../../styles/blog/section_first_blog'

export default function WordFilter({ blogPreview, nav }: FilterProps) {
  const [currentBlogs, setCurrentBlogs] = useState<Blog>(nav ?? BLOG_INIT)
  useEffect(() => {
    setCurrentBlogs(nav ?? BLOG_INIT)
  }, [blogPreview])
  return (
    <>
      {blogPreview.map((item, idx) => (
        <style.GroupContent key={idx}>
          <style.GroupContentLink to={item.id}></style.GroupContentLink>
          <style.SpanText className={selectColor(item.word)}>
            {'/* '} {returnWord(item.word, currentBlogs)} {' */'}
          </style.SpanText>
          <style.TitleBox>{item.title}</style.TitleBox>
          <style.TextBox>{item.description.substring(0, 200)}...</style.TextBox>
        </style.GroupContent>
      ))}
    </>
  )
}
