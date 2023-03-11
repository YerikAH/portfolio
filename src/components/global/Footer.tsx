import { useContext } from 'react'

// styles
import { FooterStylesTheme, TextLink, TextNormal } from '../../styles/global/footer_styles'

// context
import DataContext from '../../context/dataContext'
import ThemeContext from '../../context/themeContext'

export default function Footer() {
  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)

  return (
    <DataContext.Provider value={dataContext}>
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
    </DataContext.Provider>
  )
}
