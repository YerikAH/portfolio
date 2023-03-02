import styled from 'styled-components'

export const SectionStylesCert = styled.section`
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
export const BoxCircle = styled.div`
  width: 100%;
`

export const CircleDecoration = styled.div`
  border-radius: 25rem;
  max-width: 500px;
  width: 100%;
  height: 100%;
  max-height: 500px;
`
export const HeadlinePrincipal = styled.div`
  font: normal normal 700 2rem/2.5rem var(--font-lato);
  color: var(--white);
  @media (min-width: 720px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`
export const TextBody = styled.p`
  font: normal normal 400 0.8rem/1.2rem var(--font-lato);
  color: var(--white);
  opacity: 0.7;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
export const BoxContain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  @media (min-width: 720px) {
  }
`
export const BoxCertificate = styled.div`
  display: grid;
  padding: 1rem 2rem;
  filter: drop-shadow(0px 0px 4px rgba(37, 76, 152, 0.25));
  background-color: var(--white);
`

export const TitleCertificate = styled.h2`
  font: normal normal 600 1.25rem/1.5rem var(--font-lato);
  color: var(--black);
  margin-bottom: 0.5rem;
`

export const TextCertificate = styled.p`
  font: normal normal 600 1rem/1.2rem var(--font-lato);
  color: var(--black);
  opacity: 0.7;
  margin-bottom: 1.25rem;
`
export const ImageCertificate = styled.img`
  width: 100%;
`
export const BackgroundCertificate = styled.div``
export const ImageLogoCertificate = styled.img``
export const ButtonCertificate = styled.button`
  border: 1px solid var(--blue);
  color: var(--blue);
  width: 100%;
  padding: 0.5rem 0;
`
