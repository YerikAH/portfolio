import styled from "styled-components";

export const SelectLanguageBox = styled.div`
  position: absolute;
  z-index: 400;
  border-radius: 0.4rem;
  width: 18.5rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  left: 0;
  right: 0;
  margin: 2rem auto 0;
  @media (min-width: 720px) {
    left: auto;
    right: auto;
  }
`;

export const ButtonLanguage = styled.button`
  padding: 1rem 0.5rem;
  display: flex;
  font: normal normal 400 0.8rem/1rem var(--font-lato);
  gap: 1em;
  background-color: transparent;
  justify-content: start;
  align-items: center;
  width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;
export const ImageLanguage = styled.img`
  width: 1rem;
  @media (min-width: 720px) {
    width: 1.5rem;
  }
`;
export const Separator = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: var(--black);
  opacity: 0.3;
`;
