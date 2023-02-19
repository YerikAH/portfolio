import { Dynamic, Portfolio, SocialMedia, Static } from "./data";
import { Language, Theme } from "../enum/LanguageEnum";
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

export interface PortfolioProps {
  data: Portfolio;
}
export interface SocialMediaProps {
  data: SocialMedia;
}
export interface MenuMobileProps {
  menu: boolean;
  handleMenu: () => void;
}
export interface InterfaceStylesMenu {
  right: string;
}
export interface NavLinkProps {
  path: string,
  activeSection: number,
  
}