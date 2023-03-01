// enum and interface
import {
  BLOG_ALL_EN,
  BLOG_ALL_ES,
  BLOG_COD_EN,
  BLOG_COD_ES,
  BLOG_EXP_EN,
  BLOG_EXP_ES,
  BLOG_REV_EN,
  BLOG_REV_ES,
} from '../../../../../constant/TextInit'
import { Language, TopicsEnum } from '../../../../../enum/LanguageEnum'
import { TitlePropsBlog } from '../../../../../interface/props'

// styles
import {
  BoxButtons,
  BoxTitle,
  IconButton,
  SubtitleTwo,
} from '../../../../../styles/blog/section_first_blog'

// components
import ArrowComponent from '../../../../images/ArrowComponent'

function switchTitleBlog(value: TopicsEnum, language: Language) {
  const titleConfig = {
    all: { es: BLOG_ALL_ES, en: BLOG_ALL_EN },
    code: { es: BLOG_COD_ES, en: BLOG_COD_EN },
    exp: { es: BLOG_EXP_ES, en: BLOG_EXP_EN },
    review: { es: BLOG_REV_ES, en: BLOG_REV_EN },
  }

  const { es, en } = titleConfig[value] || titleConfig['all']
  return language === Language.es ? es : en
}
export default function TitleBlog({
  filter,
  language,
  handleDecrement,
  handleIncrement,
}: TitlePropsBlog) {
  return (
    <BoxTitle>
      <SubtitleTwo>{switchTitleBlog(filter, language)}</SubtitleTwo>
      <BoxButtons>
        <IconButton className='-180deg' onClick={() => handleDecrement()}>
          <ArrowComponent />
        </IconButton>
        <IconButton onClick={() => handleIncrement()}>
          <ArrowComponent />
        </IconButton>
      </BoxButtons>
    </BoxTitle>
  )
}
