import { Dynamic, SocialMedia, Static } from "./data";

export interface ContextProps {
  children: JSX.Element;
}
export interface ContextInterface {
  language_static: Static;
  language_dynamic: Dynamic;
  photo: string;
  social_media: SocialMedia;
  skills: string[];
  handle_language: () => void;
}
export interface DataProps {}
