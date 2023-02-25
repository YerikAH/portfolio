import { Language, Theme } from '../enum/LanguageEnum';

export interface InterfaceButton {
  languageCurrent: Language;
  themeCurrent: Theme;
  handleFunction(): void;
}
