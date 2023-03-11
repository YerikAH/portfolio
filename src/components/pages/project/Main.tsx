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
                <ImageProject src={aaaw} />
              </ImageResponsive>
            </BoxGridOne>
            <BoxGridTwo>
              <HeadlinePrincipal>Aplicación de productividad</HeadlinePrincipal>
              <TextBodyOne>
                Esta aplicación de productividad cuenta con una funcionalidad de pomodoro para
                ayudar a aumentar la eficiencia y productividad. Además, permite la adición de
                tareas para llevar un registro organizado de las tareas pendientes. La aplicación
                también cuenta con opciones de configuración para personalizarla según las
                preferencias del usuario. Este proyecto fue un reto significativo en mi camino de
                aprendizaje de JavaScript Vanilla y estoy muy orgulloso del resultado logrado.
              </TextBodyOne>
              <HeadLineTwo>Tecnologías utilizadas en el desarrollo del proyecto</HeadLineTwo>
              <ListLabelSkills>
                <ListLabel>HTML</ListLabel>
                <ListLabel>CSS</ListLabel>
                <ListLabel>JavaScript</ListLabel>
                <ListLabel>React</ListLabel>
              </ListLabelSkills>
              <HeadLineTwo>Enlaces</HeadLineTwo>
              <BoxButtons>
                <ButtonClasic>
                  <GithubComponent />
                  Ver codigo
                </ButtonClasic>
                <ButtonClasic>
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
