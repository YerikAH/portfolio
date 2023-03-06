import {
  BackgroundCertificate,
  BoxCertificate,
  BoxContain,
  ButtonCertificate,
  ImageCertificate,
  ImageLogoCertificate,
  SectionStylesCertTheme,
  TextCertificate,
  TitleCertificate,
} from '../../../../../styles/cert/section_first'
export default function Certificates() {
  return (
    <>
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
    </>
  )
}
