import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'
const MobileLink = css`
  display: flex;
  font: normal normal 400 1rem/1.2rem var(--font-lato);
  width: 100%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  & svg{
    width: 20px;
    height: 20px;
  }
`
const MenuMobileStyles = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  right: -100vw;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  z-index: 500;
  overflow: auto;
  @media (min-width: 720px) {
    display: none;
  }
`

export const MenuMobileUlist = styled.ul`
  margin-top: 5rem;
  display: grid;
  place-items: start;
  width: 100%;
`
export const MenuMobileList = styled.li``

export const MenuMobileLink = styled.a`
  ${MobileLink}
`
export const MenuMobileLinkRouter = styled(Link)`
  ${MobileLink}
`

export const MenuMobileStylesTheme = styled(MenuMobileStyles)`
  background-color: ${(props) =>
    props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)'};
  & ${MenuMobileLink} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  & ${MenuMobileLinkRouter} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
`
