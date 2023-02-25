// props
import { NavigationBlogProps } from '../../../../../interface/props'

// styles
import * as style from '../../../../../styles/blog/section_first_blog'

// images
import logoGradient from '../../../../../assets/static/logo-gradient.svg'

export default function BannerBlog({ nav }: NavigationBlogProps) {
  return (
    <style.DecorationBox>
      <style.HeadlinePrincipal>{nav.banner.title}</style.HeadlinePrincipal>
      <style.SubtitleOne>{nav.banner.subtitle}</style.SubtitleOne>
      <style.DecorationImageBox>
        <style.DecorationImage src={logoGradient} />
      </style.DecorationImageBox>
    </style.DecorationBox>
  )
}
