import styled from "styled-components";

export const SelectLanguageBox = styled.div`
  position: absolute;
  z-index: 900;
  background-color: var(--white);
  box-shadow: 0px 0px 4px 4px var(--black-10);
  border-radius: 0.4rem;
  width: 18.5rem;
  margin-top: 2rem;
`;

export const ButtonLanguage = styled.button`
  padding: 1rem 0.5rem;
  display: flex;
  font: normal normal 400 0.8rem/1rem var(--font-lato);
  gap: 1em;
  background-color: transparent;
  justify-content: start;
  align-items: center;
  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;
export const ImageLanguage = styled.img`
  width: 12px;
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
