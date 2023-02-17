import styled, { createGlobalStyle, css } from "styled-components";
import { Theme } from "../enum/LanguageEnum";

export const sectionGlobal = css`
  width: 100%;
`;

// Crear estilos globales para el body
export const GlobalStyles = createGlobalStyle`
  body {
    transition: 0.3s;
    background-color: ${(props) =>
      props.theme === Theme.dark ? "var(--black-blue)" : "var(--white)"};
  }
`;
