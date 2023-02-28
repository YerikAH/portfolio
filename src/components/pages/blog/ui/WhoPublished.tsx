import { useContext } from 'react'
import ThemeContext from '../../../../context/themeContext'
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
  return (
    <ThemeContext.Provider value={themeContext}>
      <BoxWhoPublishTheme className={themeContext.theme}>
        <AvatarCircle src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png' />
        <BoxInfo>
          <TextRich>
            por
            <TextLink> Harvey Yerik</TextLink>
          </TextRich>
          <TextBodyTwo>Ingeniero de software y desarrollador web</TextBodyTwo>
        </BoxInfo>
      </BoxWhoPublishTheme>
    </ThemeContext.Provider>
  )
}
