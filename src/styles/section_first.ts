import styled from "styled-components";

export const SectionFirstStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BoxGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items:center;
  padding: 0 2rem;
`;
export const BoxGridOne = styled.div`
  display:grid;
`;
export const BoxGridTwo = styled.div`
  display:grid;
`;

export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1.5rem/2rem var(--font-lato);
  color: var(--black);
  @media (min-width:720px){
    font: normal normal 600 2rem/3rem var(--font-lato);
  }
`
export const BoxButtons = styled.div`
  width: 100%;
  display:grid;
  @media (min-width: 720px){
    grid-template-columns: 50% 50%;
  }
      
`
export const TextButtonStroke = styled.button`
  color:var(--blue);
  font: normal normal 700 1rem/0.9rem var(--font-lato);
  background-color: transparent;
  border: 1px solid var(--blue);
`;
export const TextButtonFill = styled.button`
  color: var(--white);
  background-color: var(--blue);
  font: normal normal 700 1rem/0.9rem var(--font-lato);
`;

export const BoxImages = styled.div`
  width:100%;
  height: 100%;
  position: relative;
`
