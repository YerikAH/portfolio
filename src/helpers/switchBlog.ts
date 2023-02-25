import { TopicsColorEnum, TopicsEnum } from '../enum/LanguageEnum'
import { Blog } from '../interface/data'

export function selectColor(value: TopicsEnum): TopicsColorEnum {
  switch (value) {
    case TopicsEnum.exp:
      return TopicsColorEnum.blue
    case TopicsEnum.review:
      return TopicsColorEnum.purple
    case TopicsEnum.code:
      return TopicsColorEnum.pink
    default:
      return TopicsColorEnum.blue
  }
}
export function returnWord(value: TopicsEnum, nav: Blog) {
  const wordTopics = nav.navigation_blog.topics.find((item) => item.word === value)
  if (wordTopics === undefined) {
    return 'Radio'
  }
  return wordTopics.name
}
