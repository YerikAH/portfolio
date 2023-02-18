import { Language } from "../enum/LanguageEnum";

export function getTooltipText(
  languageCurrent: Language,
  textEs: string,
  textEn: string
): string {
  return languageCurrent === Language.es ? textEs : textEn;
}
