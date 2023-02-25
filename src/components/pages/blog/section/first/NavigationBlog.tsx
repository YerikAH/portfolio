import { NavigationBlogProps } from '../../../../../interface/props'
import {
  NavigationBox,
  NavigationGeneral,
  NavigationSubtitleButton,
  NavigationTitle,
  NavigationTitleButton,
  Separate,
  TextDecoration,
} from '../../../../../styles/blog/section_first_blog'

export default function NavigationBlog({ nav }: NavigationBlogProps) {
  return (
    <>
      <NavigationBox>
        <NavigationTitleButton>{nav.navigation_blog.title[0]}</NavigationTitleButton>
      </NavigationBox>
      <NavigationGeneral>
        <Separate />
        <NavigationBox>
          <NavigationTitle>{nav.navigation_blog.title[1]}</NavigationTitle>
          {nav.navigation_blog.topics.map((item, i) => (
            <NavigationSubtitleButton key={i}>{item.name}</NavigationSubtitleButton>
          ))}
        </NavigationBox>
        <Separate />
        <NavigationBox>
          <TextDecoration>{nav.navigation_blog.project}</TextDecoration>
        </NavigationBox>
      </NavigationGeneral>
    </>
  )
}
