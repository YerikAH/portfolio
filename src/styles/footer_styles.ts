import styled from "styled-components";

export const FooterStyles = styled.footer`
    width: 100%;
    margin: 5rem 0;
    padding: 0 2rem;
    display: grid;
    place-items: center;
`
export const TextNormal = styled.p`
    font: normal normal 400 1rem/1.5rem var(--font-lato);
    color: var(--black);
    text-align: center;
`
export const TextLink = styled.a`
    font: normal normal 400 1rem/1.5rem var(--font-lato);
    color: var(--blue);
    text-decoration: underline;
`