import { InterfaceForm, InterfaceFormVerify } from "../interface/interface";
import { InterfaceStylesMenu } from "../interface/props";

export const FORM_INITIAL_STATE: InterfaceForm = {
  name: "",
  email: "",
  message: "",
};
export const FORM_VERIFY: InterfaceFormVerify = {
  name: false,
  email: false,
  message: false,
};

export const STYLES_MENU: InterfaceStylesMenu = {
  right: "-100vw",
};
