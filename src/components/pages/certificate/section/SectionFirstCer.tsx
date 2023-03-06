import { useContext } from 'react'
import ThemeContext  from '../../../../context/themeContext'
import DataContext from '../../../../context/dataContext'
import { BoxContain, SectionStylesCertTheme } from '../../../../styles/cert/section_first'
import Certificates from './first/Certificates'
import IntroSection from './first/IntroSection'

export default function SectionFirstCer() {
  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)
  return (
    <DataContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionStylesCertTheme className={themeContext.theme}>
          <IntroSection cert={dataContext.certificate} />
          <BoxContain>
            <Certificates cert={dataContext.certificate} languageSelect={dataContext.language_current} />
          </BoxContain>
        </SectionStylesCertTheme>
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}
