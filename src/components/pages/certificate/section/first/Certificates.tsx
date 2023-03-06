import { CertificateProps } from '../../../../../interface/certProps'
import {
  BackgroundCertificate,
  BoxCertificate,
  ButtonCertificate,
  ImageCertificate,
  ImageLogoCertificate,
  TextCertificate,
  TitleCertificate,
} from '../../../../../styles/cert/section_first'
export default function Certificates({ cert }: CertificateProps) {
  return (
    <>
      {cert.certificates.map((item) => (
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
