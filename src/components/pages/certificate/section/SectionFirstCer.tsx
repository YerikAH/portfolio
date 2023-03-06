import { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
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
} from '../../../../styles/cert/section_first'
import IntroSection from './first/IntroSection'

export default function SectionFirstCer() {
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <SectionStylesCertTheme>
        <IntroSection cert={dataContext.certificate} />
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
