import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'

const BoxContent = styled.div`
  border-radius: 1rem;
  padding: 2rem 1rem;
`

export const TitleBox = styled.h2`
  font: normal normal 500 1.5rem/4rem var(--font-lato);
  margin-bottom: 1rem;
`

export const ListTile = styled.div`
  display: grid;
  gap: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
`

export const ContainerRow = styled(Link)`
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`

export const ImageRow = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  object-fit: cover;
`

export const SubtitleRow = styled.h5`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  opacity: 0.7;
  line-break: anywhere;
`

export const BoxContentTheme = styled(BoxContent)`
  background-color: ${(props) =>
    props.className === Theme.dark ? 'var(--black)' : 'var(--white)'};
  border: ${(props) =>
    props.className === Theme.dark ? '1px solid var(--white-10)' : '1px solid var(--black-10)'};
  ${TitleBox} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
    border-bottom: ${(props) =>
      props.className === Theme.dark ? '1px solid var(--white)' : '1px solid var(--black)'};
  }
  ${SubtitleRow} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${ContainerRow} {
    &:hover {
      background: ${(props) =>
        props.className === Theme.dark ? 'var(--white-10)' : 'var(--black-10)'};
    }
  }
`
