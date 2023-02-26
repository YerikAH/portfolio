import styled from 'styled-components';


export const BlogMain = styled.main``

export const BlogSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8.5rem;
  @media (min-width: 720px) {
    padding-top: 10.9875rem;
  }
`

export const BoxGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  padding: 0 1rem 8.5rem 1rem;

  @media (min-width: 720px) {
    grid-template-columns: 68% 28%;
    gap: 4%;
  }
`
export const BoxGridOne = styled.div``
export const BoxGridTwo = styled.div``

export const SpanText = styled.span`
    font: normal normal 700 1.5rem/2rem var(--font-mono);
    color: var(--pink-brig); 
    text-align: left;
`
export const HeadlinePrincipal = styled.h1`
    font: normal normal 600 2.5rem/3.5rem var(--font-lato);
    color: var(--black);
    text-align: left;
`
export const SpanTextTwo = styled.span`
    font: normal normal 500 1rem/2rem var(--font-lato);
    color: var(--black); 
    text-align: left;

`