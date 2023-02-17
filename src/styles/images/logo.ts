import styled from "styled-components";

// enum
import { Theme } from "../../enum/LanguageEnum";

export const SvgStyles = styled.svg``;
export const PathStyles = styled.path`
  transition: 0.3s;
  fill: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
