import {
  BoxButtons,
  BoxGridOne,
  BoxGridTwo,
  ButtonClasic,
  HeadlinePrincipal,
  HeadLineTwo,
  ImageProject,
  ImageResponsive,
  ListLabel,
  ListLabelSkills,
  MainProjectTheme,
  SectionProject,
  TextBodyOne,
} from '../../../styles/home/project_page_style'
import GithubComponent from '../../images/GithubComponent'
import LinkComponent from '../../images/LinkComponent'
import ThemeContext from '../../../context/themeContext'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../../../context/dataContext'
import { Language } from '../../../enum/LanguageEnum'
import {
  TITLE_LINK_EN,
  TITLE_LINK_ES,
  TITLE_TECH_EN,
  TITLE_TECH_ES,
} from '../../../constant/TextInit'
import { PROJECT_LOCALSTORAGE } from '../../../constant/localStorageName'
export default function Main() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  const [numberIndex, setNumberIndex] = useState(0)

  useEffect(() => {
    const dataSave = localStorage.getItem(PROJECT_LOCALSTORAGE)
  }, [])

  return (
    <DataContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <MainProjectTheme className={themeContext.theme}>
          <SectionProject>
            <BoxGridOne>
              <ImageResponsive>
                <ImageProject
                  src={dataContext.language_dynamic.portfolio[numberIndex].image_path}
                />
              </ImageResponsive>
            </BoxGridOne>
            <BoxGridTwo>
              <HeadlinePrincipal>
                {dataContext.language_dynamic.portfolio[numberIndex].name}
              </HeadlinePrincipal>
              <TextBodyOne>
                {dataContext.language_dynamic.portfolio[numberIndex].description}
              </TextBodyOne>
              <HeadLineTwo>
                {' '}
                {dataContext.language_current === Language.es ? TITLE_TECH_ES : TITLE_TECH_EN}
              </HeadLineTwo>
              <ListLabelSkills>
                {dataContext.language_dynamic.portfolio[numberIndex].lang.map((item) => (
                  <ListLabel key={item}>{item}</ListLabel>
                ))}
              </ListLabelSkills>
              <HeadLineTwo>
                {dataContext.language_current === Language.es ? TITLE_LINK_ES : TITLE_LINK_EN}
              </HeadLineTwo>
              <BoxButtons>
                <ButtonClasic href={dataContext.language_dynamic.portfolio[numberIndex].link_code}>
                  <GithubComponent />
                  {dataContext.language_static.section_third.code}
                </ButtonClasic>
                <ButtonClasic
                  href={dataContext.language_dynamic.portfolio[numberIndex].link_preview}
                >
                  <LinkComponent />
                  {dataContext.language_static.section_third.preview}
                </ButtonClasic>
              </BoxButtons>
            </BoxGridTwo>
          </SectionProject>
        </MainProjectTheme>
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}
