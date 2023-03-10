// hook
import { useContext, useEffect, useState } from 'react'

// styles
import {
  BoxGrid,
  SectionThirdStylesTheme,
  SubtitleOne,
  TextButtonStroke,
  TitleBox,
} from '../../../../styles/home/section_third'

// context
import DataContext from '../../../../context/dataContext'
import ProjectsComponent from './third/ProjectsComponent'
import ThemeContext from '../../../../context/themeContext'
import IconProjects from '../../../images/IconProjects'
import { InterfaceSectionScroll } from '../../../../interface/scrollspy'

export default function SectionThird({ sectionRef }: InterfaceSectionScroll) {
  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)

  const [offset, setOffset] = useState(6)
  const [thereProjects, setThereProjects] = useState(true)

  useEffect(() => {
    const numberProjects = dataContext.language_dynamic.portfolio.length
    if (offset >= numberProjects) {
      setOffset(offset)
      setThereProjects(false)
    } else {
      setThereProjects(true)
    }
  }, [offset, dataContext.language_dynamic.portfolio.length])

  return (
    <DataContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionThirdStylesTheme className={themeContext.theme} ref={sectionRef} id='projects'>
          <TitleBox>
            <IconProjects />
            <SubtitleOne>{dataContext.language_static.section_third.headline}</SubtitleOne>
          </TitleBox>
          <BoxGrid>
            {dataContext.language_dynamic.portfolio.slice(0, offset).map((item) => (
              <ProjectsComponent data={item} key={item.id} />
            ))}
          </BoxGrid>
          {thereProjects && (
            <TextButtonStroke onClick={() => setOffset(offset + 6)}>
              {dataContext.language_static.section_third.button}
            </TextButtonStroke>
          )}
        </SectionThirdStylesTheme>
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}
