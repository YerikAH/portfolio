import styled from "styled-components";

// enum
import { Theme } from "../../enum/LanguageEnum";

export const SvgAbout = styled.svg`
  transition: 0.3s;
  stroke: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
export const SvgProjects = styled.svg`
  transition: 0.3s;
  stroke: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
export const SvgIconsProjects = styled.svg`
  transition: 0.3s;
  stroke: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
