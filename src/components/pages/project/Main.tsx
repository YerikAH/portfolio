import { MainProjectTheme } from '../../../styles/home/project_page_style'
import ThemeContext from '../../../context/themeContext'
import { useContext } from 'react'
import DataContext from '../../../context/dataContext'
import ProjectInfo from './section/ProjectInfo'

export default function Main() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)

  return (
    <DataContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <MainProjectTheme className={themeContext.theme}>
          <ProjectInfo
            lang={dataContext.language_current}
            data_porfolio={dataContext.language_dynamic.portfolio}
            staticprop={dataContext.language_static}
          />
        </MainProjectTheme>
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}
