import styled from "styled-components";

// enum
import { Theme } from "../enum/LanguageEnum";

const FooterStyles = styled.footer`
  width: 100%;
  margin: 5rem 0;
  padding: 0 2rem;
  display: grid;
  place-items: center;
`;
export const TextNormal = styled.p`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`;
export const TextLink = styled.a`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--blue);
  text-decoration: underline;
`;
export const FooterStylesTheme = styled(FooterStyles)`
  & ${TextNormal} {
    color: ${(props) =>
      props.className === Theme.dark ? "var(--white)" : "var(--black)"};
  }
`;
