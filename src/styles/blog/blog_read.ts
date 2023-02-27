import styled from 'styled-components'

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
  border-bottom: 1px solid var(--black-10);
  @media (min-width: 720px) {
    grid-template-columns: 66% 30%;
    gap: 4%;
  }
`
export const BoxGridOne = styled.div`

`
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

export const ImageBlog = styled.img`
  width: 100%;
  height: 15.625rem;
  border-radius: 2rem;
  object-fit: cover;
  margin-top: 3rem;
  margin-bottom: 2rem;
`

export const HeadlineTwo = styled.h2`
  font: normal normal 600 1.7rem/3rem var(--font-lato);
  color: var(--black);
`
export const HeadlineThree = styled.h3`
  font: normal normal 600 1.5rem/2.5em var(--font-lato);
  color: var(--black);
`
export const HeadlineFour = styled.h4`
  font: normal normal 600 1.2rem/2.2rem var(--font-lato);
  color: var(--black);
`
export const TextBodyOne = styled.p`
  font: normal normal 400 1rem/2rem var(--font-lato);
  color: var(--black);
  opacity: 0.7;
`
export const TextBodyTwo = styled.p``
export const TextLink = styled.a`
  font: normal normal 500 1rem/1.5rem var(--font-lato);
  color: var(--sky);
`
export const TextListBoxOrder = styled.ol`
  padding: 2rem 0 2rem 3rem;
`
export const TextListBoxDesorder = styled.ul`
  padding: 2rem 0 2rem 3rem;
`
export const TextList = styled.li`
  list-style: initial;
  font: normal normal 400 1rem/2rem var(--font-lato);
  color: var(--black);
  opacity: 0.7;
`
