import { Language, Theme } from "../enum/LanguageEnum";

export interface InterfaceLangButton {
  handleLanguageProps(): void;
  languageCurrent: Language;
}
export interface InterfaceTheButton {
  languageCurrent: Language;
  themeCurrent: Theme;
  handleThemeProps(): void;
}
