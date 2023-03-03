import styled, { css } from 'styled-components'

export const SectionStylesCert = styled.section`
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

export const CircleDecoration = css`
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
  background-color: #1b59a4;
  left: 21rem;
  top: -1rem;
`
export const CircleTwo = styled.div`
  ${CircleDecoration}
  background-color: #2472ce;
  left: 7rem;
  top: -2rem;
`
export const CircleThree = styled.div`
  ${CircleDecoration}
  background-color: #3994ff;
  left: -7rem;
  top: 2rem;
`
export const CircleFour = styled.div`
  ${CircleDecoration}
  background-color: #53a2ff;
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
  border-bottom: 1px solid var(--black-10);
  grid-template-columns: repeat(auto-fill, 300px);
  width: 100%;
  gap: 3rem;
  place-content: center;
  place-items: center;
  @media (min-width: 720px) {
  }
`
export const BoxCertificate = styled.div`
  display: grid;
  padding: 2rem 1rem;
  filter: drop-shadow(0px 0px 4px rgba(37, 76, 152, 0.25));
  background-color: var(--white);
  border-radius: 1rem;
  overflow: hidden;
`

export const TitleCertificate = styled.h2`
  font: normal normal 600 1.25rem/1.5rem var(--font-lato);
  color: var(--black);
  margin-bottom: 0.5rem;
`

export const TextCertificate = styled.p`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  opacity: 0.7;
  margin-bottom: 1.25rem;
`
export const ImageCertificate = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  max-height: 200px;
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
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--sky);
  background-color: transparent;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.3rem 0;
`
