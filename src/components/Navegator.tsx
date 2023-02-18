import { useContext, useState } from "react";

// styles
import {
  ImageButton,
  HamImage,
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
import ham from "../assets/icon/ham.svg";
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

// spy scroll

function Navegator() {
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
                <ListLink className="true">
                  {dataContext.language_static.nav.home}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink className="false">
                  {dataContext.language_static.nav.about}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink className="false">
                  {dataContext.language_static.nav.portfolio}
                </ListLink>
              </ListPoint>

              <ListPoint>
                <ListLink className="false">
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
