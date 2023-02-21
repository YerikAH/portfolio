import styled from "styled-components";

// enum
import { Theme } from "../../enum/LanguageEnum";

export const SvgStyles = styled.svg``;
export const PathStyles = styled.path`
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  fill: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
