import { useContext } from 'react'

// styles
import { FooterStylesTheme, TextLink, TextNormal } from '../../styles/global/footer_styles'

// context
import FetchContext from '../../context/dataContext'
import ThemeContext from '../../context/themeContext'

export default function Footer() {
  const dataContext = useContext(FetchContext)
  const themeContext = useContext(ThemeContext)

  return (
    <FetchContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <FooterStylesTheme className={themeContext.theme}>
          <TextNormal>
            {dataContext.language_static.footer.text}
            <TextLink href='https://github.com/YerikAH' target='_blank'>
              {dataContext.language_static.footer.text_link}
            </TextLink>
          </TextNormal>
        </FooterStylesTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  )
}
