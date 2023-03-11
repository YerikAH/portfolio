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
import aaaw from '../../../../public/images/projects/task_app.png'
import GithubComponent from '../../images/GithubComponent'
import LinkComponent from '../../images/LinkComponent'
import ThemeContext from '../../../context/themeContext'
import { useContext } from 'react'
import DataContext from '../../../context/dataContext'
export default function Main() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <MainProjectTheme className={themeContext.theme}>
          <SectionProject>
            <BoxGridOne>
              <ImageResponsive>
                <ImageProject src={dataContext.language_dynamic.portfolio[0].image_path} />
              </ImageResponsive>
            </BoxGridOne>
            <BoxGridTwo>
              <HeadlinePrincipal>
                {dataContext.language_dynamic.portfolio[0].name}
              </HeadlinePrincipal>
              <TextBodyOne>{dataContext.language_dynamic.portfolio[0].description}</TextBodyOne>
              <HeadLineTwo>Tecnologías utilizadas en el desarrollo del proyecto</HeadLineTwo>
              <ListLabelSkills>
                <ListLabel>HTML</ListLabel>
                <ListLabel>CSS</ListLabel>
                <ListLabel>JavaScript</ListLabel>
                <ListLabel>React</ListLabel>
              </ListLabelSkills>
              <HeadLineTwo>Enlaces</HeadLineTwo>
              <BoxButtons>
                <ButtonClasic href={dataContext.language_dynamic.portfolio[0].link_code}>
                  <GithubComponent />
                  Ver codigo
                </ButtonClasic>
                <ButtonClasic href={dataContext.language_dynamic.portfolio[0].link_preview}>
                  <LinkComponent />
                  Ver aplicación
                </ButtonClasic>
              </BoxButtons>
            </BoxGridTwo>
          </SectionProject>
        </MainProjectTheme>
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}
