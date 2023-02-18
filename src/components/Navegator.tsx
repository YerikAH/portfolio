import { useContext, useState } from "react";

// styles
import {
  ImageButton,
  HeaderStyleTheme,
  ListDesorder,
  ListHam,
  ListImageBox,
  ListLink,
  ListPoint,
  ListTheme,
  NavStyle,
} from "../styles/navegator_styles";

// context
import FetchContext from "../context/dataContext";
import ThemeContext from "../context/themeContext";

// component
import LogoComponent from "./images/LogoComponent";
import HamComponents from "./images/HamComponents";

// enum
import { Language, Theme } from "../enum/LanguageEnum";
import MenuMobile from "./mobile/MenuMobile";
import { InterfaceNavScroll } from "../interface/scrollspy";
import LanguageButton from "./buttons/LanguageButton";
import ThemeButton from "./buttons/ThemeButton";

// spy scroll

function Navegator({ activeSection }: InterfaceNavScroll) {
  const dataContext = useContext(FetchContext);
  const themeContext = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  function handleLanguage() {
    dataContext.handle_language();
  }
  function handleTheme() {
    themeContext.handle_theme();
  }
  function handleMenu() {
    setMenu(menu ? false : true);
  }
  return (
    <ThemeContext.Provider value={themeContext}>
      <FetchContext.Provider value={dataContext}>
        <HeaderStyleTheme className={themeContext.theme}>
          <NavStyle>
            <ListDesorder>
              <ListImageBox>
                <ListLink className="logo">
                  <LogoComponent />
                </ListLink>
              </ListImageBox>

              <ListPoint>
                <ListLink
                  className={activeSection === 0 ? "true" : "false"}
                  href="#home"
                >
                  {dataContext.language_static.nav.home}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink
                  className={activeSection === 1 ? "true" : "false"}
                  href="#about"
                >
                  {dataContext.language_static.nav.about}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink
                  className={activeSection === 2 ? "true" : "false"}
                  href="#projects"
                >
                  {dataContext.language_static.nav.portfolio}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink
                  className={activeSection === 3 ? "true" : "false"}
                  href="#contact"
                >
                  {dataContext.language_static.nav.contact}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink className="false">
                  {dataContext.language_static.nav.blog}
                </ListLink>
              </ListPoint>
            </ListDesorder>
            <ListDesorder>
              <LanguageButton
                languageCurrent={dataContext.language_current}
                handleLanguageProps={handleLanguage}
              />

              <ThemeButton
                handleThemeProps={handleTheme}
                languageCurrent={dataContext.language_current}
                themeCurrent={themeContext.theme}
              />
              <ListHam aria-label="open menu" onClick={handleMenu}>
                <HamComponents />
              </ListHam>
            </ListDesorder>
          </NavStyle>
        </HeaderStyleTheme>

        <MenuMobile menu={menu} handleMenu={handleMenu} />
      </FetchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Navegator;
