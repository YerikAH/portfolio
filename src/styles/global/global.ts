import styled, { createGlobalStyle, css } from "styled-components";

// enum
import { Theme } from "../../enum/LanguageEnum";

export const sectionGlobal = css`
  width: 100%;
`;

// global HTML
export const GlobalStyles = createGlobalStyle`
  body {
    transition:  0.3s cubic-bezier(.25,.72,.37,1.18);
    background-color: ${(props) =>
      props.theme === Theme.dark ? "var(--black-blue)" : "var(--white)"};
  }
`;
