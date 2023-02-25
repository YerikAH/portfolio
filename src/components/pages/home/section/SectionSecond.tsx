// hook
import { useContext } from 'react'

// styles
import {
  TitleBox,
  SubtitleOne,
  SectionScondStylesTheme,
} from '../../../../styles/home/section_second'
// components
import ListLabel from './second/ListLabel'
import InfoComponent from './second/InfoComponent'

// hook
import FetchContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'
import IconAbout from '../../../images/IconAbout'
import { InterfaceSectionScroll } from '../../../../interface/scrollspy'

function SectionSecond({ sectionRef }: InterfaceSectionScroll) {
  const dataContext = useContext(FetchContext)
  const themeContext = useContext(ThemeContext)
  return (
    <FetchContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionScondStylesTheme className={themeContext.theme} ref={sectionRef} id='about'>
          <TitleBox>
            <IconAbout />
            <SubtitleOne>{dataContext.language_static.section_second.headline}</SubtitleOne>
          </TitleBox>
          <InfoComponent />
          <ListLabel />
        </SectionScondStylesTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  )
}

export default SectionSecond
