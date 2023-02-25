import { NavigationBlogProps } from '../../../../../interface/props'
import {
  DecorationBox,
  DecorationImage,
  DecorationImageBox,
  HeadlinePrincipal,
  SubtitleOne,
} from '../../../../../styles/blog/section_first_blog'

import logoGradient from '../../../../../assets/static/logo-gradient.svg'
export default function BannerBlog({ nav }: NavigationBlogProps) {
  return (
    <DecorationBox>
      <HeadlinePrincipal>{nav.banner.title}</HeadlinePrincipal>
      <SubtitleOne>{nav.banner.subtitle}</SubtitleOne>
      <DecorationImageBox>
        <DecorationImage src={logoGradient} />
      </DecorationImageBox>
    </DecorationBox>
  )
}
