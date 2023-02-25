import { Language, TopicsEnum } from '../../../../../enum/LanguageEnum'
import { TitlePropsBlog } from '../../../../../interface/props'
import {
  BoxButtons,
  BoxTitle,
  IconButton,
  SubtitleTwo,
} from '../../../../../styles/blog/section_first_blog'
import ArrowComponent from '../../../../images/ArrowComponent'

function switchTitleBlog(value: TopicsEnum, language: Language) {
  const titleConfig = {
    all: { es: 'Lo último de mi blog', en: 'The last of my blog' },
    code: { es: 'Código', en: 'Code' },
    exp: { es: 'Experiencias', en: 'Experiences' },
    review: { es: 'Reseñas', en: 'Reviews' },
  }

  const { es, en } = titleConfig[value] || titleConfig['all']
  return language === Language.es ? es : en
}
export default function TitleBlog({filter,language}:TitlePropsBlog) {
  return (
    <BoxTitle>
      <SubtitleTwo>{switchTitleBlog(filter, language)}</SubtitleTwo>
      <BoxButtons>
        <IconButton className='-180deg'>
          <ArrowComponent />
        </IconButton>
        <IconButton>
          <ArrowComponent />
        </IconButton>
      </BoxButtons>
    </BoxTitle>
  )
}
