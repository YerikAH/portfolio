import styled from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'

const MainProject = styled.main`
  padding: 0 1rem;
`
export const SectionProject = styled.section`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8.5rem 0;
  gap: 2rem;
  @media (min-width: 1000px) {
    padding: 10.9875rem 0;
    grid-template-areas: 'one two';
    grid-template-columns: repeat(2, 50%);
  }
`
export const BoxGridOne = styled.div`
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    grid-area: two;
  }
`
export const BoxGridTwo = styled.div`
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    grid-area: one;
    place-items: start;
  }
`
export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1.8rem/2.5rem var(--font-lato);
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 1000px) {
    text-align: left;
    font: normal normal 600 2.3rem/3.4rem var(--font-lato);
  }
`
export const TextBodyOne = styled.p`
  margin: 1rem 0 2rem 0;
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  opacity: 0.6;
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 1000px) {
    text-align: left;
  }
`

export const ListLabelSkills = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem 0 2rem 0;
  gap: 0.5rem;
`
export const ListLabel = styled.li`
  background-color: var(--blue);
  padding: 0.1rem 0.5rem;
  border-radius: 0.4rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  font: normal normal 400 0.9rem/1rem var(--font-lato);
`
export const HeadLineTwo = styled.h2`
  font: normal normal 600 1.25rem/1.5rem var(--font-lato);
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 1000px) {
    text-align: left;
  }
`
export const BoxButtons = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem 0 2rem 0;
`
export const ButtonClasic = styled.a`
  border-radius: 10px;
  color: var(--black);
  font: normal normal 500 14px/10px var(--font-lato);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`
export const ImageResponsive = styled.div`
  width: 100%;
  max-width: 37.5rem;
`
export const ImageProject = styled.img`
  width: 100%;
  border-radius: 1rem;
`
export const MainProjectTheme = styled(MainProject)`
  ${HeadlinePrincipal} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextBodyOne} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${HeadLineTwo} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${ListLabel} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--black)' : 'var(--white)')};
  }
  ${ButtonClasic} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
    background-color: ${(props) =>
      props.className === Theme.dark ? 'var(--white-20)' : 'var(--black-10)'};
    &:hover {
      background-color: ${(props) =>
        props.className === Theme.dark ? 'var(--white-30)' : 'var(--black-30)'};
    }
  }
`
