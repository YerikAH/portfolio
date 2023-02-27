import styled from 'styled-components'

export const BoxContent = styled.div`
  background-color: var(--white);
  border-radius: 1rem;
  border: 1px solid #bdbdbd;
  padding: 0.5rem 1rem;
`

export const TitleBox = styled.h2`
  font: normal normal 500 1.5rem/500 var(--font-lato);
  color: var(--black);
`

export const ListTile = styled.div`
  display: grid;
  gap: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
`

export const ContainerRow = styled.div`
  display: flex;
  gap: 1rem;
`

export const ImageRow = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`

export const SubtitleRow = styled.h5`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  opacity: 0.7;
`
