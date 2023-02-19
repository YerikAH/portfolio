import { Dynamic, Nav, Portfolio, SocialMedia, Static } from "./data";
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
}
export interface InterfaceStylesMenu {
  right: string;
}

// App.tsx
export interface HomeBlogProps{
  section: Sections;
  handleChange(section: Sections): void
}


// LinksNav.tsx

export interface LinksNavsProps{
  navText : Nav;
  activeSection: number;
  changeSection(section: Sections): void
}