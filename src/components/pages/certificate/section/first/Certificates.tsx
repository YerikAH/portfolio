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
import { useState } from 'react'
import DetailCertificate from './DetailCertificate'
export default function Certificates({ cert, languageSelect }: CertificateProps) {
  const [modalCert, setModalCert] = useState(false)
  const [image, setImage] = useState('')
  function switchModalCertificate(e: React.MouseEvent<HTMLButtonElement> | undefined) {
    setModalCert(!modalCert)
    if(e !== undefined){
      const convertHTMLEvent = e.target as HTMLButtonElement
      setImage(convertHTMLEvent.value)
    }
  }
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
          <ButtonCertificate onClick={(e)=>switchModalCertificate(e)} value={item.image}>
            <ImageSample src={IconInfo} />
            {(languageSelect ?? Language.es) === Language.es
              ? 'Detalles del certificado'
              : 'Certificate details'}
          </ButtonCertificate>
        </BoxCertificate>
      ))}
      {modalCert && <DetailCertificate imageCertificate={image} switchModalCertificate={switchModalCertificate}/>}
    </>
  )
}
