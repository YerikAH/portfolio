import { Language } from '../enum/LanguageEnum'
import { Certificate } from './data'


export interface CertificateProps {
  cert: Certificate
  languageSelect?: Language
}

export interface CertificateModalProps{
  switchModalCertificate(e:  React.MouseEvent<HTMLButtonElement> | undefined): void
  imageCertificate : string
}