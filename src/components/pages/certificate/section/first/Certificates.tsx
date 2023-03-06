import { Language } from '../../../../../enum/LanguageEnum'
import { CertificateProps } from '../../../../../interface/certProps'
import {
  BackgroundCertificate,
  BoxCertificate,
  ButtonCertificate,
  ImageCertificate,
  ImageLogoCertificate,
  ImageSample,
  TextCertificate,
  TitleCertificate,
} from '../../../../../styles/cert/section_first'
import IconInfo from '../../../../../assets/icon/icon-info-cert.svg'
export default function Certificates({ cert, languageSelect }: CertificateProps) {
  return (
    <>
      {cert.certificates.map((item) => (
        <BoxCertificate key={item.id}>
          <TitleCertificate>{item.name}</TitleCertificate>
          <TextCertificate>{item.description}</TextCertificate>
          <BackgroundCertificate>
            <ImageCertificate src={item.image} />
            <ImageLogoCertificate src={item.logo} />
          </BackgroundCertificate>
          <ButtonCertificate>
            <ImageSample src={IconInfo}/>
            {(languageSelect ?? Language.es) === Language.es
              ? 'Detalles del certificado'
              : 'Certificate details'}
          </ButtonCertificate>
        </BoxCertificate>
      ))}
    </>
  )
}
