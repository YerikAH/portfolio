import {
  Blog,
  Dynamic,
  Nav,
  Portfolio,
  SectionFirst,
  SocialMedia,
  Static,
} from "./data";
import { Language, Sections, Theme } from "../enum/LanguageEnum";
// context
export interface ContextProps {
  children: JSX.Element;
}
export interface ContextInterface {
  language_static: Static;
  language_dynamic: Dynamic;
  photo: string;
  social_media: SocialMedia[];
  skills: string[];
  language_current: Language;
  handle_language: () => void;
  blog: Blog;
}
export interface ContextThemeInterface {
  theme: Theme;
  handle_theme: () => void;
}

// portfolio - sectionThird.tsx
export interface PortfolioProps {
  data: Portfolio;
}

// social media - sectionSecond.tsx
export interface SocialMediaProps {
  data: SocialMedia;
}

// menu mobile - menuMobile.tsx
export interface MenuMobileProps {
  menu: boolean;
  handleMenu: () => void;
  changeSection(section: Sections): void;
}

export interface HomeNavProps {
  navText: Nav;
  handleSwitch(): void;
}
export interface BlogNavProps {
  navText: Nav;
  changeSection: (section: Sections) => void;
}

// App.tsx
export interface HomeBlogProps {
  section: Sections;
  handleChange(section: Sections): void;
}

// dir - nav

export interface LinksNavsProps {
  navText: Nav;
  activeSection: number;
  changeSection(section: Sections): void;
}
export interface ButtonNavProps {
  languageCurrent: Language;
  themeCurrent: Theme;
  handleLanguage(): void;
  handleTheme(): void;
  handleMenu(): void;
  menu: boolean;
}

// dir - section first

export interface LanguageOptionsProps {
  languageOptions: boolean;
  sectionFirst: SectionFirst;
}

// blog

export interface NavigationBlogProps {
  nav: Blog;
}
