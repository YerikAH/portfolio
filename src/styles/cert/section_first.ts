import styled, { css } from 'styled-components'
import { Theme } from '../../enum/LanguageEnum'

const SectionStylesCert = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 8.5rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 720px) {
    padding-top: 10.9875rem;
  }
`
export const BoxCircle = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
`

const CircleDecoration = css`
  border-radius: 25rem;
  width: 300px;
  height: 300px;
  position: relative;
  @media (min-width: 720px) {
    width: 500px;
    height: 500px;
  }
`

export const CircleOne = styled.div`
  ${CircleDecoration}
  background-color: var(--blue-100);
  left: 21rem;
  top: -1rem;
`
export const CircleTwo = styled.div`
  ${CircleDecoration}
  background-color: var(--blue-75);
  left: 7rem;
  top: -2rem;
`
export const CircleThree = styled.div`
  ${CircleDecoration}
  background-color: var(--blue-50);
  left: -7rem;
  top: 2rem;
`
export const CircleFour = styled.div`
  ${CircleDecoration}
  background-color: var(--blue-25);
  left: -21rem;
  top: 1rem;
`

export const BoxInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 720px) {
    max-width: 500px;
  }
`
export const HeadlinePrincipal = styled.h1`
  font: normal normal 700 2rem/2.5rem var(--font-lato);
  color: var(--white);
  text-align: center;
  @media (min-width: 720px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`
export const TextBody = styled.p`
  font: normal normal 400 0.8rem/1.2rem var(--font-lato);
  color: var(--white);
  opacity: 0.7;
  text-align: center;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
export const BoxContain = styled.div`
  display: grid;
  
  margin-top: 8rem;
  padding-bottom: 4rem;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  gap: 3rem;
  place-content: center;
  place-items: center;
  justify-content: center;
  align-items: start;
  @media (min-width: 720px) {
    grid-auto-rows: minmax(0, auto);
    grid-template-rows: minmax(0, auto);
      grid-template-columns: repeat(auto-fill, 350px);
  }
`
export const BoxCertificate = styled.div`
  display: grid;
  padding: 2rem 1rem;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  background-color: var(--white);
  border-radius: 1rem;
  overflow: hidden;
`

export const TitleCertificate = styled.h2`
  font: normal normal 600 1.2rem/1.5rem var(--font-lato);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.055em;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`

export const TextCertificate = styled.p`
  font: normal normal 400 0.9rem/1.7rem var(--font-lato);
  opacity: 0.5;
  margin-bottom: 1.25rem;
  text-align: justify;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
`
export const ImageCertificate = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  max-height: 270px;
  height: 100%;
  object-fit: cover;
`
export const BackgroundCertificate = styled.div`
  background-color: #212531;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
`
export const ImageLogoCertificate = styled.img`
  max-width: 100px;
  width: 100%;
  height: auto;
`
export const ButtonCertificate = styled.button`
  border: 1px solid var(--sky);
  font: normal normal 400 0.9rem/1.5rem var(--font-lato);
  color: var(--sky);
  background-color: transparent;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.3rem 0;
  transition: 0.3s cubic-bezier(0.25, 0.72, 0.37, 1.18);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.54rem;
`
export const ImageSample = styled.img``
export const SectionStylesCertTheme = styled(SectionStylesCert)`
  ${BoxContain} {
    border-bottom: ${(props) =>
      props.className === Theme.dark ? ' 1px solid var(--white-10)' : ' 1px solid var(--black-10)'};
  }
  ${BoxCertificate} {
    background-color: ${(props) =>
      props.className === Theme.dark ? 'var(--black-pale)' : 'var(--white)'};
        filter: ${(props) =>
      props.className === Theme.dark ? 'drop-shadow(0px 0px 2px rgba(208, 224, 255, 0.34))' : 'drop-shadow(0px 0px 4px rgba(37, 76, 152, 0.25))'};
  }
  ${TitleCertificate} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
  ${TextCertificate} {
    color: ${(props) => (props.className === Theme.dark ? 'var(--white)' : 'var(--black)')};
  }
`
