import { TopicsEnum } from '../enum/LanguageEnum'
import { Welcome } from '../interface/data'

export const DATA_INITIAL_STATE: Welcome = {
  language: {
    es: {
      static: {
        nav: {
          home: '',
          about: '',
          portfolio: '',
          language: '',
          contact: '',
          blog: '',
        },
        section_first: {
          headline: '',
          button_one: '',
          button_two: '',
          button_es_cv: '',
          button_en_cv: '',
        },
        section_second: {
          headline: '',
        },
        section_third: {
          headline: '',
          preview: '',
          code: '',
          info: '',
          button: '',
        },
        section_four: {
          headline: '',
          text: '',
          label_one: '',
          label_two: '',
          label_three: '',
          button: '',
        },
        footer: {
          text: '',
          text_link: '',
        },
      },
      dynamic: {
        description: '',
        portfolio: [
          {
            id: '',
            name: '',
            description: '',
            image_path: '',
            link_code: '',
            link_preview: '',
            lang: [],
          },
        ],
      },
      blog: {
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
      },
      certificate: {
        title: '',
        description: '',
        certificates: [
          {
            id: 1,
            name: '',
            description: '',
            image: '',
            logo: '',
          },
        ],
      },
    },
    en: {
      static: {
        nav: {
          home: '',
          about: '',
          portfolio: '',
          language: '',
          contact: '',
          blog: '',
        },
        section_first: {
          headline: '',
          button_one: '',
          button_two: '',
          button_es_cv: '',
          button_en_cv: '',
        },
        section_second: {
          headline: '',
        },
        section_third: {
          headline: '',
          preview: '',
          code: '',
          info: '',
          button: '',
        },
        section_four: {
          headline: '',
          text: '',
          label_one: '',
          label_two: '',
          label_three: '',
          button: '',
        },
        footer: {
          text: '',
          text_link: '',
        },
      },
      dynamic: {
        description: '',
        portfolio: [
          {
            id: '',
            name: '',
            description: '',
            image_path: '',
            link_code: '',
            link_preview: '',
            lang: [],
          },
        ],
      },
      blog: {
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
      },
      certificate: {
        title: '',
        description: '',
        certificates: [
          {
            id: 1,
            name: '',
            description: '',
            image: '',
            logo: '',
          },
        ],
      },
    },
  },

  photo_url: '',
  skills: [
    'JavaScript',
    'TypeScript',
    'HTML',
    'Python',
    'Dart',
    'C',
    'Bash',
    'Java',
    'SQL',
    'CSS',
    'SASS',
    'Pug',
    'styled-components',
    'TailwildCSS',
    'Bootstrap',
    'less',
    'React',
    'Vue.js',
    'Vite',
    'Flutter',
    'Git',
    'GitHub',
  ],
  social_media: [
    {
      name: '',
      icon: '',
      user: '',
      link: '',
    },
    {
      name: '',
      icon: '',
      user: '',
      link: '',
    },
    {
      name: '',
      icon: '',
      user: '',
      link: '',
    },
    {
      name: '',
      icon: '',
      user: '',
      link: '',
    },
  ],
}
