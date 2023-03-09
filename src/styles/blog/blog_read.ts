import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'

export const BlogMain = styled.main``

const BlogSection = styled.section`
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

  @media (min-width: 1000px) {
    grid-template-columns: 66% 30%;
    gap: 4%;
  }
`
export const BoxGridOne = styled.div``
export const BoxGridTwo = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  @media (min-width: 1000px) {
    height: auto;
    opacity: 1;
    visibility: visible;
    overflow: auto;
  }
`

export const SpanText = styled.span`
  font: normal normal 700 1rem/1.5rem var(--font-mono);
  color: var(--pink-brig);
  text-align: left;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`
export const HeadlinePrincipal = styled.h1`
  font: normal normal 600 1.5rem/2rem var(--font-lato);
  text-align: left;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
`
export const SpanTextTwo = styled.span`
  font: normal normal 500 0.8rem/1.2rem var(--font-lato);
  text-align: left;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`

export const ImageBlog = styled.img`
  width: 100%;
  height: 15.625rem;
  border-radius: 2rem;
  object-fit: cover;
  margin-top: 3rem;
  object-position: left;
  margin-bottom: 2rem;
`

export const HeadlineTwo = styled.h2`
  margin-top: 1.5rem;
  font: normal normal 600 1.3rem/1.7rem var(--font-lato);
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 1.7rem;
    line-height: 3rem;
  }
`
export const HeadlineThree = styled.h3`
  margin-top: 1.5rem;
  font: normal normal 600 1.2rem/1.5em var(--font-lato);
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`
export const HeadlineFour = styled.h4`
  margin-top: 1.5rem;
  font: normal normal 600 1rem/1.2rem var(--font-lato);
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  @media (min-width: 720px) {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`
export const TextBodyOne = styled.p`
  font: normal normal 400 0.8em/1.5rem var(--font-lato);
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  opacity: 0.7;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`
export const TextBodyTwo = styled.p``
export const TextLink = styled.a`
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  font: normal normal 500 0.8rem/1.5rem var(--font-lato);
  color: var(--sky);
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`
export const TextListBoxOrder = styled.ol`
  padding: 2rem 0 2rem 3rem;
`
export const TextListBoxDesorder = styled.ul`
  padding: 2rem 0 2rem 3rem;
`
export const TextList = styled.li`
  list-style: initial;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  font: normal normal 400 0.8rem/1.5rem var(--font-lato);
  opacity: 0.7;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`
export const CodeSyntax = styled(SyntaxHighlighter)`
  margin: 2rem 0;

  border-radius: 1rem;
  code {
    white-space: break-spaces !important;
  }
  span {
    font: normal normal 500 0.8rem/2rem var(--font-mono-two);
  }
`

export const Frame = styled.div``
export const VideoiFrame = styled.iframe`
  width: 100%;
`

/* DARK MODE */

export const BlogSectionTheme = styled(BlogSection)`
  ${BoxGrid} {
    border-bottom: ${(props) =>
      props.className === Theme.dark ? '1px solid var(--white-10)' : '1px solid var(--black-10)'};
  }
  ${HeadlinePrincipal} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${SpanTextTwo} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${HeadlineTwo} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${HeadlineThree} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${HeadlineFour} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextBodyOne} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextBodyTwo} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextList} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
`
