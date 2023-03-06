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
          {dataContext.certificate.certificates.map((item) => (
            <BoxCertificate>
              <TitleCertificate>{item.name}</TitleCertificate>
              <TextCertificate>{item.description}</TextCertificate>
              <BackgroundCertificate>
                <ImageCertificate src={item.image} />
                <ImageLogoCertificate src='https://static.platzi.com/static/images/footer/logo.png' />
              </BackgroundCertificate>
              <ButtonCertificate>Detalles del certificado</ButtonCertificate>
            </BoxCertificate>
          ))}
        </BoxContain>
      </SectionStylesCertTheme>
    </DataContext.Provider>
  )
}
