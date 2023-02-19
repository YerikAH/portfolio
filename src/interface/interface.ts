import { Sections } from "../enum/LanguageEnum";

export interface InterfaceForm {
  name: string;
  email: string;
  message: string;
}
export interface InterfaceFormVerify {
  name: boolean;
  email: boolean;
  message: boolean;
}
export interface InterfaceApp{
  section: Sections;
  handleChange(section: Sections): void
}