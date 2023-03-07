import { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'
import { Language } from '../../../../enum/LanguageEnum'
import logo from '../../../../assets/static/photo-harvey.png'
import {
  AvatarCircle,
  BoxInfo,
  BoxWhoPublishTheme,
  TextBodyTwo,
  TextRich,
  TextLink,
} from '../../../../styles/blog/ui_styles'

export default function WhoPublished() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <BoxWhoPublishTheme className={themeContext.theme}>
          <AvatarCircle
            src={logo}
            alt='avatar'
          />
          <BoxInfo>
            <TextRich>
              {dataContext.language_current === Language.es ? 'por' : 'by'}
              <TextLink> Harvey Yerik</TextLink>
            </TextRich>
            <TextBodyTwo>
              {dataContext.language_current === Language.es
                ? 'Estudiante de ingeniería de software'
                : 'Software engineering student'}
            </TextBodyTwo>
          </BoxInfo>
        </BoxWhoPublishTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>
  )
}
