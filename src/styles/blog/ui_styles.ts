import styled from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'

const BoxWhoPublish = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0;
  gap: 1rem;
  margin-top: 1rem;
`

export const AvatarCircle = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 15rem;
`

export const BoxInfo = styled.div`
  display: grid;
  gap: 0.5rem;
`
export const TextRich = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-lato);
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`
export const TextLink = styled.a`
  font: normal normal 400 0.8rem/1rem var(--font-lato);
  color: var(--sky);
  text-decoration: underline;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`
export const TextBodyTwo = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-lato);
  opacity: 0.7;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`
// DARK MODE

export const BoxWhoPublishTheme = styled(BoxWhoPublish)`
  ${TextRich} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextBodyTwo} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
`
