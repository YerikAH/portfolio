import { Dynamic, Portfolio, SocialMedia, Static } from "./data";
import { Language } from "../enum/LanguageEnum";
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
  theme: string;
  handle_theme: () => void;
}

export interface PortfolioProps {
  data: Portfolio;
}
export interface SocialMediaProps {
  data: SocialMedia;
}
