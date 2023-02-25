import { TopicsEnum } from '../../../../../enum/LanguageEnum'
import { NavigationBlogProps } from '../../../../../interface/props'
import * as style from '../../../../../styles/blog/section_first_blog'

export default function NavigationBlog({ nav, handleFilterProp }: NavigationBlogProps) {
  const { title: [title1, title2], topics, project } = nav.navigation_blog
  return (
    <>
      <style.NavigationBox>
        <style.NavigationTitleButton onClick={() => handleFilterProp?.(TopicsEnum.all)}>{title1}</style.NavigationTitleButton>
      </style.NavigationBox>
      <style.NavigationGeneral>
        <style.Separate />
        <style.NavigationBox>
          <style.NavigationTitle>{title2}</style.NavigationTitle>
          {topics.map((item, i) => (
            <style.NavigationSubtitleButton key={i} onClick={() => handleFilterProp?.(item.word)}>
              {item.name}
            </style.NavigationSubtitleButton>
          ))}
        </style.NavigationBox>
        <style.Separate />
        <style.NavigationBox>
          <style.TextDecoration>{project}</style.TextDecoration>
        </style.NavigationBox>
      </style.NavigationGeneral>
    </>
  )
}
