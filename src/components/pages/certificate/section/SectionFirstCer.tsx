import { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
import { BoxContain, SectionStylesCertTheme } from '../../../../styles/cert/section_first'
import IntroSection from './first/IntroSection'

export default function SectionFirstCer() {
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <SectionStylesCertTheme>
        <IntroSection cert={dataContext.certificate} />
        <BoxContain></BoxContain>
      </SectionStylesCertTheme>
    </DataContext.Provider>
  )
}
