import { TopicsEnum } from '../enum/LanguageEnum'

export const BLOG_FILTER = [
  {
    id: '',
    word: TopicsEnum.all,
    title: '',
    description: '',
  },
]
export const BLOG_INIT = {
    navigation_blog: {
      title: [''],
      topics: [
        {
          name: '',
          word: TopicsEnum.exp,
        },
        {
          name: '',
          word: TopicsEnum.review,
        },
        {
          name: '',
          word: TopicsEnum.code,
        },
      ],
      project: '',
    },
    banner: {
      title: '',
      subtitle: '',
    },
    blog_preview: [
      {
        id: '',
        word: TopicsEnum.exp,
        title: '',
        description: '',
      },
      {
        id: '',
        word: TopicsEnum.exp,
        title: '',
        description: '',
      },
      {
        id: '',
        word: TopicsEnum.exp,
        title: '',
        description: '',
      },
    ],
  }
