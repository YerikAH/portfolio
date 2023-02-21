import styled from "styled-components";

export const SectionStylesBlog = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8.5rem;
  @media (min-width: 720px) {
    padding-top: 10.9875rem;
  }

`;
export const BoxGridBlog = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  gap: 8%;
  padding: 0 1rem;
  @media (min-width: 720px) {
    grid-template-columns: 26% 66%;
  }
`;
export const BoxGridOne = styled.div``;
export const BoxGridTwo = styled.div``;

export const DecorationBox = styled.div`  
  border-radius: 1rem;
  padding: 2rem ;
  background: linear-gradient(93.89deg, #2472CE 15.64%, #2449CE 90.51%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  flex-direction: column;
  @media (min-widh: 720px) {
    padding: 2rem 2.5rem 2rem 4rem;
  }
`;
export const HeadlinePrincipal = styled.h1`
  color: var(--white);
  margin: 0;
  font: normal normal 700 2rem/2.5rem var(--font-lato)
`
export const SubtitleOne = styled.h4`
  color: var(--white);
  font: normal normal 500 1rem/1.2rem var(--font-lato)
`
export const DecorationImage = styled.img``

export const SubtitleTwo = styled.h2`
  color: var(--black);
  font: normal normal 700 2rem/2.5rem var(--font-lato)

`
export const GroupBox = styled.div`
  display: grid;
`
export const GroupContent = styled.div``
export const SpanText = styled.span``
export const TitleBox = styled.h6``
export const TextBox = styled.p``



export const NavigationBox = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0;
`


export const NavigationGeneral = styled.div`
  height: 0;
  overflow: hidden;
  @media (min-widh: 720px) {
    height: auto;
    overflow: auto;
  }
`
export const NavigationTitleButton = styled.button`
  background-color: var(--black-10);
  border-radius: 8px;
  padding:  1rem;
  color: var(--blue);
  font: normal normal 700 1.1rem/1.2rem var(--font-lato);
  text-align: left;
`

export const NavigationTitle = styled.h3`
color: var(--black);
  font: normal normal 600 1.2rem/1.2rem var(--font-lato);
  text-align: left;
  padding: 1rem;

`
export const NavigationSubtitleButton = styled.button`

  background-color: transparent;
  border-radius: 8px;
  padding: 1rem;
  color: var(--black-pale);
  font: normal normal 400 1rem/1.2rem var(--font-lato);
  text-align: left;
  opacity: 0.8;
  &:hover{
    background-color: var(--black-10);
  }

`

export const Separate = styled.div`
  width: 100%;
  height: 0.5px;
  opacity: 0.5;
  background-color: var(--black);
`

export const TextDecoration = styled.p``