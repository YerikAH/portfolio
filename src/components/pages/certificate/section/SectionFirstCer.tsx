import React, { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
import {
  BackgroundCertificate,
  BoxCertificate,
  BoxCircle,
  BoxContain,
  BoxInfo,
  ButtonCertificate,
  CircleFour,
  CircleOne,
  CircleThree,
  CircleTwo,
  HeadlinePrincipal,
  ImageCertificate,
  ImageLogoCertificate,
  SectionStylesCertTheme,
  TextBody,
  TextCertificate,
  TitleCertificate,
} from '../../../../styles/cert/section_first'

export default function SectionFirstCer() {
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <SectionStylesCertTheme>
        <BoxCircle>
          <CircleOne></CircleOne>
          <CircleTwo></CircleTwo>
          <CircleThree></CircleThree>
          <CircleFour></CircleFour>
          <BoxInfo>
            <HeadlinePrincipal>{dataContext.certificate.title}</HeadlinePrincipal>
            <TextBody>{dataContext.certificate.description}</TextBody>
          </BoxInfo>
        </BoxCircle>
        <BoxContain>
          <BoxCertificate>
            <TitleCertificate>Certificado de HTML y CSS</TitleCertificate>
            <TextCertificate>
              En el curso aprendi a conceptos avanzados en HTML y CSS, con los conocimientos
              adquiridos pude desarrollar páginas web responsivas y como unos estilos más avanzados
              como animaciones y efectos visuales.
            </TextCertificate>
            <BackgroundCertificate>
              <ImageCertificate src='https://static.platzi.com/media/user_upload/diploma-excel_page-0001-65606338-9a09-46e5-ad27-150a8329186a.jpg' />
              <ImageLogoCertificate src='https://static.platzi.com/static/images/footer/logo.png' />
            </BackgroundCertificate>
            <ButtonCertificate>Detalles del certificado</ButtonCertificate>
          </BoxCertificate>
        </BoxContain>
      </SectionStylesCertTheme>
    </DataContext.Provider>
  )
}
