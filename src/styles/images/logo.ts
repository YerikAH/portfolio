import styled from "styled-components";

export const SvgStyles = styled.svg``
export const PathStyles = styled.path`
    fill: ${props => props.className === "darkTheme" ? "var(--white)": "var(--black)"};
`