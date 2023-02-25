import React, { useEffect, useState } from 'react'
import { BLOG_INIT } from '../../../../../../constant/blogInitialState'
import { returnWord, selectColor } from '../../../../../../helpers/switchBlog'
import { Blog } from '../../../../../../interface/data'
import { FilterProps } from '../../../../../../interface/props'
import {
  GroupContent,
  GroupContentLink,
  SpanText,
  TextBox,
  TitleBox,
} from '../../../../../../styles/blog/section_first_blog'

export default function WordFilter({ blogPreview, nav }: FilterProps) {
  const [navBlog, setNavBlog] = useState<Blog>(BLOG_INIT)

  useEffect(() => {
    if (nav !== undefined) {
      setNavBlog(nav)
    }
  }, [blogPreview])
  return (
    <>
      {blogPreview.map((item, i) => (
        <GroupContent key={i}>
          <GroupContentLink></GroupContentLink>
          <SpanText className={selectColor(item.word)}>
            {'/* '} {returnWord(item.word, navBlog)} {' */'}
          </SpanText>
          <TitleBox>{item.title}</TitleBox>
          <TextBox>{item.description}</TextBox>
        </GroupContent>
      ))}
    </>
  )
}
