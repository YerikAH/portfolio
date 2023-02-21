import styled from "styled-components";
import { Theme } from "../../enum/LanguageEnum";

export const SvgHam = styled.svg`
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  stroke: ${(props) =>
    props.className === Theme.dark ? "var(--white)" : "var(--black)"};
`;
