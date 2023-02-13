export interface Welcome {
  language: Language;
  photo_url: string;
  skills: string[];
  social_media: SocialMedia;
}

export interface Language {
  es: En;
  en: En;
}

export interface En {
  static: Static;
  dynamic: Dynamic;
}

export interface Dynamic {
  portfolio: Portfolio[];
}

export interface Portfolio {
  id: string;
  name: string;
  description: string;
  image_path: string;
  link_code: string;
  link_preview: string;
}

export interface Static {
  nav: Nav;
  section_first: SectionFirst;
  section_second: SectionSecond;
  section_third: SectionThird;
  section_four: SectionFour;
  footer: Footer;
}

export interface Footer {
  text: string;
  text_link: string;
}

export interface Nav {
  home: string;
  about: string;
  portfolio: string;
  language: string;
  contact: string;
  blog: string;
}

export interface SectionFirst {
  headline: string;
  button_one: string;
  button_two: string;
}

export interface SectionFour {
  headline: string;
  text: string;
  label_one: string;
  label_two: string;
  label_three: string;
  button: string;
}

export interface SectionSecond {
  headline: string;
}

export interface SectionThird {
  headline: string;
  button: string;
}

export interface SocialMedia {
  linkedin: Email;
  github: Email;
  twitter: Email;
  email: Email;
}

export interface Email {
  user: string;
  link: string;
}
