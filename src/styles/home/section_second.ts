import styled from 'styled-components'

// enum
import { Theme } from '../../enum/LanguageEnum'

const SectionScondStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  margin-top: 5rem;
  padding: 5rem 0;
`

export const BoxGrid = styled.div`
  max-width: 720px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 0 2rem;
  margin-top: 3.625rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, auto);
    grid-template-areas: 'box_two box_one';
    gap: 3.5rem;
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
  height: 0%;
  width: 0%;
  place-items: center;
  @media (min-width: 720px) {
    grid-area: box_two;
    height: 100%;
    width: 100%;
  }
`

export const TitleBox = styled.div`
  display: grid;
  place-items: center;
`
export const SubtitleOne = styled.h2`
  font: normal normal 700 1.5rem/1.5rem var(--font-lato);
  color: var(--black);
  margin-top: 1.25rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`

export const TextBodyOne = styled.p`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  opacity: 0.6;
  text-align: center;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    text-align: left;
  }
`
export const CircleAvatar = styled.img`
  border-radius: 15rem;
  max-width: 7.8125rem;
  max-height: 7.8125rem;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  @media (min-width: 720px) {
    opacity: 1;
    height: 100%;
    visibility: visible;
  }
`
export const ListSkills = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  margin-top: 3.5rem;
  flex-wrap: wrap;
  padding: 0 2rem;
  @media (min-width: 720px) {
    justify-content: start;
  }
`

export const LabelSkills = styled.p`
  background-color: var(--blue);
  color: var(--white);
  padding: 0.1rem 0.5rem;
  border-radius: 0.4rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  font: normal normal 400 0.9rem/1rem var(--font-lato);
`
export const SectionScondStylesTheme = styled(SectionScondStyles)`
  background-color: ${(props) =>
    props.className === Theme.dark ? 'var(--black-blue-pale)' : 'var(--white-pale)'};
  & ${SubtitleOne} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  & ${TextBodyOne} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  & ${LabelSkills} {
    color: ${(props) =>
      props.className === Theme.dark ? 'var(--black-blue-pale)' : 'var(--white)'};
  }
`
