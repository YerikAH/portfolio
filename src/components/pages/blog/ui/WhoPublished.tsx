import { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'
import { Language } from '../../../../enum/LanguageEnum'
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
            src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png'
            alt='avatar'
          />
          <BoxInfo>
            <TextRich>
              {dataContext.language_current === Language.es ? 'por' : 'by'}
              <TextLink> Harvey Yerik</TextLink>
            </TextRich>
            <TextBodyTwo>
              {dataContext.language_current === Language.es
                ? 'Ingeniero de software y desarrollador web'
                : 'Software engineer and web developer'}
            </TextBodyTwo>
          </BoxInfo>
        </BoxWhoPublishTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>
  )
}
