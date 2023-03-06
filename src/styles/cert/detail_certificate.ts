import styled from 'styled-components'

export const DetailCertificateStyles = styled.div`
    position: fixed;
    z-index: 3000;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    left: 0;
    top: 0;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
export const ButtonClose = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconClose = styled.img``

export const BoxContent = styled.div`
    max-width: 700px;
    width: 100%;
    display: grid;
    gap: 2rem;
`
export const ImageSample = styled.img`
    width: 100%;
    height: auto;
` 