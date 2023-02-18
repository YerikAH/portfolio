import { useContext, useState } from "react";
import { Tooltip } from "react-tooltip";

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

// images
import sun from "../assets/icon/sun.svg";
import moon from "../assets/icon/moon.svg";
import flagEs from "../assets/static/es.png";
import flagEn from "../assets/static/en.png";

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
              <ListTheme onClick={handleLanguage} title="">
                {dataContext.language_current === Language.es ? (
                  <ImageButton src={flagEn} />
                ) : (
                  <ImageButton src={flagEs} />
                )}
              </ListTheme>
              <ListTheme onClick={handleTheme} title="">
                {themeContext.theme === Theme.light ? (
                  <ImageButton src={sun} />
                ) : (
                  <ImageButton src={moon} />
                )}
              </ListTheme>
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
