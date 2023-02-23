import { Language, Theme } from "../enum/LanguageEnum";
import { ContextInterface, ContextThemeInterface } from "../interface/props";

export const CONTEXT_INITIAL_STATE: ContextInterface = {
  language_static: {
    nav: {
      home: "",
      about: "",
      portfolio: "",
      language: "",
      contact: "",
      blog: "",
    },
    section_first: {
      headline: "",
      button_one: "",
      button_two: "",
      button_es_cv: "",
      button_en_cv:""
    },
    section_second: {
      headline: "",
    },
    section_third: {
      headline: "",
      code: "",
      info: "",
      preview: "",
      button: "",
    },
    section_four: {
      headline: "",
      text: "",
      label_one: "",
      label_two: "",
      label_three: "",
      button: "",
    },
    footer: {
      text: "",
      text_link: "",
    },
  },
  language_dynamic: {
    description: "",
    portfolio: [
      {
        id: "",
        name: "",
        description: "",
        image_path: "",
        link_code: "",
        link_preview: "",
      },
    ],
  },
  photo: "",
  social_media: [
    {
      name:"",
      icon:"",
      user: "",
      link: "",
    },
    {
      name:"",
      icon:"",
      user: "",
      link: "",
    },
    {
      name:"",
      icon:"",
      user: "",
      link: "",
    },
    {
      name:"",
      icon:"",
      user: "",
      link: "",
    },
    

  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "Python",
    "Dart",
    "C",
    "Bash",
    "Java",
    "SQL",
    "CSS",
    "SASS",
    "Pug",
    "styled-components",
    "TailwildCSS",
    "Bootstrap",
    "less",
    "React",
    "Vue.js",
    "Vite",
    "Flutter",
    "Git",
    "GitHub",
  ],
  handle_language: () => {},
  language_current: Language.es,
  blog:{
    navigation_blog:{
      title: [""],
      topics: [
        {
          name:"",
          word: ""
        },
        {
          name:"",
          word: ""
        },
        {
          name:"",
          word: ""
        },
      ],
      project : ""
    },
    banner: {
      title: "",
      subtitle: ""
    },
    blog_preview:[
      {
        id: "",
        word:"",
        title: "",
        description: ""
      },
      {
        id: "",
        word:"",
        title: "",
        description: ""
      },
      {
        id: "",
        word:"",
        title: "",
        description: ""
      }
    ]
  }
};
export const THEME_CONTEXT_INITIAL_STATE: ContextThemeInterface = {
  theme: Theme.light,
  handle_theme: ()=>{}
}