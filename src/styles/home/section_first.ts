import { Link } from 'react-router-dom'
import styled from 'styled-components'

// enum
import { Theme } from '../../enum/LanguageEnum'
import { ButtonLanguage, SelectLanguageBox } from './select_language'

const SectionFirstStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 8.5rem;
  @media (min-width: 720px) {
    padding-top: 10.9875rem;
  }
`
export const BoxGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 0 2rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-areas: 'box_two box_one';
  }
`
export const BoxGridOne = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  @media (min-width: 720px) {
    grid-area: box_one;
  }
`
export const BoxGridTwo = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  @media (min-width: 720px) {
    grid-area: box_two;
  }
`

export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1.8rem/2.5rem var(--font-lato);
  color: var(--black);
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    text-align: left;
    max-width: 25rem;
    font: normal normal 600 2.3rem/3.4rem var(--font-lato);
  }
`
export const BoxButtons = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  @media (min-width: 720px) {
    justify-content: start;
    grid-template-columns: auto auto;
  }
`
export const TextButtonStroke = styled(Link)`
  color: var(--blue);
  display: block;
  font: normal normal 700 0.8rem/0.7rem var(--font-lato);
  background-color: transparent;
  border: 1px solid var(--blue);
  padding: 0.8rem;
  border-radius: 0.8rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  text-align: center;
  @media (min-width: 720px) {
    font: normal normal 600 1rem/0.9rem var(--font-lato);
    padding: 0.8rem 2rem;
  }
`
export const ButtonBoxFill = styled.div`
  width: 100%;
`
export const TextButtonFill = styled.button`
  color: var(--white);
  width: 100%;
  background-color: var(--blue);
  font: normal normal 700 0.8rem/0.7rem var(--font-lato);
  padding: 0.8rem;
  border-radius: 0.8rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    padding: 0.8rem 2rem;
    font: normal normal 600 1rem/0.9rem var(--font-lato);
  }
`

export const BoxImages = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 2rem;
  @media (min-width: 720px) {
    padding: 0;
  }
`

export const IconImage = styled.img`
  position: relative;
  width: 75%;
  height: 75%;
  max-width: 6.25rem;
  object-fit: contain;
  @media (min-width: 720px) {
    bottom: ${(props) => (props.className === 'icon_side' ? '50px' : '-50px')};
  }
`
export const SectionFirstStylesTheme = styled(SectionFirstStyles)`
  & ${TextButtonFill} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)')};
    &:hover {
      background-color: transparent;
      color: var(--blue);
      border: 1px solid var(--blue);
    }
    &:focus {
      background-color: transparent;
      color: var(--blue);
      border: 1px solid var(--blue);
    }
  }
  & ${HeadlinePrincipal} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextButtonStroke} {
    &:hover {
      background-color: var(--blue);
      color: ${(props) => (props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)')};
    }
    &:focus {
      background-color: var(--blue);
      color: ${(props) => (props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)')};
    }
  }
  ${SelectLanguageBox} {
    background-color: ${(props) =>
      props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)'};
    box-shadow: ${(props) =>
      props.className === Theme.dark
        ? ' 0px 0px 4px 0px var(--white-10)'
        : ' 0px 0px 4px 0px var(--black-10)'};
  }
  ${ButtonLanguage} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
    &:hover {
      background-color: ${(props) =>
        props.className === Theme.dark ? 'var(--white-10)' : 'var(--black-10)'};
    }
    &:focus {
      background-color: ${(props) =>
        props.className === Theme.dark ? 'var(--white-10)' : 'var(--black-10)'};
    }
  }
`
