import { Language } from '../enum/LanguageEnum'
import { Certificate } from './data'


export interface CertificateProps {
  cert: Certificate
  languageSelect?: Language
}
