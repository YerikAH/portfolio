import { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  MenuMobileLinkRouter,
  MenuMobileList,
  MenuMobileStylesTheme,
  MenuMobileUlist,
} from '../../../styles/global/menu_mobile_styles'
// props or interface or init state
import { InterfaceStylesMenu } from '../../../interface/styles'
import { MenuMobileProps } from '../../../interface/props'
import { STYLES_MENU } from '../../../constant/stylesInitialState'

// context
import ThemeContext from '../../../context/themeContext'
import DataContext from '../../../context/dataContext'

// react router
import { useLocation } from 'react-router-dom'

// components
import HomeMenuMobile from './HomeMenuMobile'
import BlogMenuMobile from './BlogMenuMobile'
import IconGlobal from '../../images/IconGlobal'

export default function MenuMobile({ menu, handleMenu, changeSection }: MenuMobileProps) {
  
  let menuHTML = document.getElementById('menu');
  if (menuHTML === null) {
    const menuDom: HTMLElement = document.createElement('div')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bodyElement = document.querySelector('body')!
    menuDom.setAttribute('id','menu')
    bodyElement.appendChild(menuDom)

    menuHTML = menuDom as HTMLElement
  }else{
    menuHTML = document.getElementById('menu') as HTMLElement
  }

  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)

  const [stylesMenu, setStylesMenu] = useState<InterfaceStylesMenu>(STYLES_MENU)

  const location = useLocation()

  function handleSwitch() {
    handleMenu()
  }

  useEffect(() => {
    const stylesNormal: InterfaceStylesMenu = {
      right: '0',
    }
    if (!menu) {
      stylesNormal.right = '-100vw'
    }
    setStylesMenu(stylesNormal)
  }, [menu])

  return ReactDOM.createPortal(
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <MenuMobileStylesTheme style={stylesMenu} className={themeContext.theme}>
          <MenuMobileUlist>
            {location.pathname === '/' ? (
              <HomeMenuMobile
                handleSwitch={handleSwitch}
                navText={dataContext.language_static.nav}
              />
            ) : (
              <BlogMenuMobile
                changeSection={changeSection}
                navText={dataContext.language_static.nav}
              />
            )}

            <MenuMobileList>
              <MenuMobileLinkRouter to='/blog'>
                <IconGlobal/>
                {dataContext.language_static.nav.blog}
              </MenuMobileLinkRouter>
            </MenuMobileList>
          </MenuMobileUlist>
        </MenuMobileStylesTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>,
    menuHTML,
  )
}
