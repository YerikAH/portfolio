import styled from "styled-components";
import { Theme } from "../enum/LanguageEnum";

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
  @media (min-width:720px){
    grid-template-columns: repeat(2, 50%);
    grid-template-areas: "box_two box_one"
  }
`;
export const BoxGridOne = styled.div`
  display:grid;
  height: 100%;
  width:100%;
  @media (min-width:720px){
    grid-area: box_one
  }
`;
export const BoxGridTwo = styled.div`
  display:grid;
  height: 100%;
  width:100%;
  @media (min-width:720px){
    grid-area: box_two
  }
`;

export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1.8rem/2.5rem var(--font-lato);
  color: var(--black);
  text-align: center;
  @media (min-width:720px){
    text-align: left;
    max-width: 25rem;
    font: normal normal 600 2.3rem/3.4rem var(--font-lato);
  }
`
export const BoxButtons = styled.div`
  width: 100%;
  display:grid;
  gap: 1rem;
  margin-top: 2rem;
  @media (min-width: 720px){
    justify-content: start;
    grid-template-columns: auto auto;
  }
      
`
export const TextButtonStroke = styled.button`
  color:var(--blue);
  font: normal normal 700 0.8rem/0.7rem var(--font-lato);
  background-color: transparent;
  border: 1px solid var(--blue);
  padding: 0.8rem;
  border-radius: 0.8rem;
  @media (min-width:720px){
    font: normal normal 600 1rem/0.9rem var(--font-lato);
    padding: 0.8rem 2rem;
  }
`;
export const TextButtonFill = styled.button`
  color: var(--white);
  background-color: var(--blue);
  font: normal normal 700 0.8rem/0.7rem var(--font-lato);
  padding: 0.8rem;
  border-radius: 0.8rem;
  @media (min-width:720px){
    padding: 0.8rem 2rem;
    font: normal normal 600 1rem/0.9rem var(--font-lato);
  }
`;

export const BoxImages = styled.div`
  width:100%;
  height: 100%;
  position: relative;
  padding: 0  0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 2rem;
  

@media (min-width: 720px){
	padding: 0
}

`	

export const IconImage = styled.img`
  position: relative;
  width: 75%;
  height: 75%;
  max-width: 6.25rem;
  object-fit: contain;
  @media (min-width: 720px){
    bottom: ${props => props.className === "icon_side" ? "50px":"-50px"}
  }

`
export const SectionFirstStylesTheme = styled(SectionFirstStyles)`
  & ${TextButtonFill}{
    color: ${props => props.className === Theme.dark ? "var(--black-pale)": "var(--white)"};
  }
  & ${HeadlinePrincipal} {
    color: ${props => props.className === Theme.dark ? "var(--white)": "var(--black)"};
  }
`