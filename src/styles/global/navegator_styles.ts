import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// enum
import { Theme } from '../../enum/LanguageEnum'

// mixin

const LinkGeneral = css`
  font: normal normal 400 1rem/1.9rem var(--font-lato);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`

const HeaderStyle = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`
export const NavStyle = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;

  @media (min-width: 720px) {
    padding: 1.5rem 2rem;
  }
`

export const ListDesorder = styled.ul`
  gap: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListPoint = styled.li`
  display: none;
  @media (min-width: 720px) {
    display: block;
  }
`

export const ListLink = styled.a`
  ${LinkGeneral}
  &::after {
    content: '';
    width: 100%;
    height: 1.5px;
    transform: ${(props) => (props.className === 'true' ? 'scale(1)' : 'scaleX(0)')};
    background-color: var(--black);
    opacity: ${(props) => props.className === 'false' && '0.5'};
    bottom: -0.2rem;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  }
  &:focus::after {
    transform: ${(props) => props.className !== 'logo' && 'scale(1)'};
  }
  &:hover::after {
    transform: ${(props) => props.className !== 'logo' && 'scale(1)'};
  }
`
export const ListLinkRouter = styled(Link)`
  ${LinkGeneral}
  &::after {
    content: '';
    width: 100%;
    height: 1.5px;
    transform: ${(props) => (props.className === 'true' ? 'scale(1)' : 'scaleX(0)')};
    background-color: var(--black);
    opacity: ${(props) => props.className === 'false' && '0.5'};
    bottom: -0.2rem;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  }
  &:focus::after {
    transform: ${(props) => props.className !== 'logo' && 'scale(1)'};
  }
  &:hover::after {
    transform: ${(props) => props.className !== 'logo' && 'scale(1)'};
  }
`

export const ListImageBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 720px) {
    margin-right: 2rem;
  }
`

export const ListLogo = styled.img`
  width: 100%;
  height: auto;
`

export const ListHam = styled.button`
  background-color: transparent;
  @media (min-width: 720px) {
    display: none;
  }
`
export const ListTheme = styled.button`
  border-radius: 15rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageButton = styled.img`
  width: 1rem;
  @media (min-width: 720px) {
    width: 1.5rem;
  }
`

export const BackButton = styled(Link)`
  ${LinkGeneral}
  gap: 0.5rem;
  &:hover {
    opacity: 0.8;
  }
`
// DARK MODE

export const HeaderStyleTheme = styled(HeaderStyle)`
  background-color: ${(props) =>
    props.className === Theme.dark ? 'var(--black-blue)' : 'var(--white)'};

  box-shadow: ${(props) =>
    props.className === Theme.dark ? '0px 0px 1.5px 1px #FFF2' : '0px 0px 1.5px 1px #0002'};
  & ${ListLink} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
    &::after {
      background-color: ${(props) =>
        props.className === Theme.dark ? 'var(--white)' : 'var(--black)'};
    }
  }
  & ${ListLinkRouter} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
    &::after {
      background-color: ${(props) =>
        props.className === Theme.dark ? 'var(--white)' : 'var(--black)'};
    }
  }
  & ${BackButton} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  & ${ListTheme} {
    background-color: ${(props) =>
      props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)'};
  }
`
