import { TopicsEnum } from '../enum/LanguageEnum'

export interface Welcome {
  language: Language
  photo_url: string
  skills: string[]
  social_media: SocialMedia[]
}

export interface Language {
  es: En
  en: En
}

export interface En {
  static: Static
  dynamic: Dynamic
  blog: Blog
  certificate: Certificate
}
export interface Certificate {
  title: string
  description: string
  certificates: CertificateArr[]
}

export interface CertificateArr {
  id: number
  name: string
  description: string
  image: string
  logo: string
}

export interface Blog {
  navigation_blog: NavigationBlog
  banner: Banner
  blog_preview: BlogPreview[]
}

export interface Banner {
  title: string
  subtitle: string
}

export interface BlogPreview {
  id: string
  word: TopicsEnum
  title: string
  description: string
}

export interface NavigationBlog {
  title: string[]
  topics: Topic[]
  project: string
}

export interface Topic {
  name: string
  word: TopicsEnum
}

export interface Dynamic {
  description: string
  portfolio: Portfolio[]
}

export interface Portfolio {
  id: string
  name: string
  description: string
  image_path: string
  link_code: string
  link_preview: string
  lang: string[]
}

export interface Static {
  nav: Nav
  section_first: SectionFirst
  section_second: SectionSecond
  section_third: SectionThird
  section_four: SectionFour
  footer: Footer
}

export interface Footer {
  text: string
  text_link: string
}

export interface Nav {
  home: string
  about: string
  portfolio: string
  language: string
  contact: string
  blog: string
}

export interface SectionFirst {
  headline: string
  button_one: string
  button_two: string
  button_es_cv: string
  button_en_cv: string
}

export interface SectionFour {
  headline: string
  text: string
  label_one: string
  label_two: string
  label_three: string
  button: string
}

export interface SectionSecond {
  headline: string
}

export interface SectionThird {
  headline: string
  preview: string
  code: string
  info: string
  button: string
}

export interface SocialMedia {
  name: string
  icon: string
  user: string
  link: string
}
