import { useContext,  useState } from "react";

// styles
import {
  HeaderStyleTheme,
  ListDesorder,
  ListHam,
  ListImageBox,
  ListLink,
  ListPoint,
  NavStyle,
  ListLinkRouter,
} from "../styles/navegator_styles";

// context
import FetchContext from "../context/dataContext";
import ThemeContext from "../context/themeContext";

// component
import LogoComponent from "./images/LogoComponent";
import HamComponents from "./images/HamComponents";
import LanguageButton from "./buttons/LanguageButton";
import ThemeButton from "./buttons/ThemeButton";
import MenuMobile from "./mobile/MenuMobile";

// enum or interface
import { InterfaceNavScroll } from "../interface/scrollspy";
import { useLocation } from "react-router-dom";
import { Sections } from "../enum/LanguageEnum";

// spy scroll

function Navegator({ activeSection, handleChange }: InterfaceNavScroll) {
  const dataContext = useContext(FetchContext);
  const themeContext = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  let location = useLocation();

  function handleLanguage() {
    dataContext.handle_language();
  }
  function handleTheme() {
    themeContext.handle_theme();
  }
  function handleMenu() {
    setMenu(menu ? false : true);
  }

  function changeSection(section: Sections) {
    if (handleChange !== undefined) {
      handleChange(section);
    }
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

              {location.pathname === "/" ? (
                <>
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
                </>
              ) : (
                <>
                  <ListPoint>
                    <ListLinkRouter to="/" onClick={()=>changeSection(Sections.home)}> 
                      {dataContext.language_static.nav.home}
                    </ListLinkRouter>
                  </ListPoint>
                  <ListPoint>
                    <ListLinkRouter to="/#about" onClick={()=>changeSection(Sections.about)} >
                      {dataContext.language_static.nav.about}
                    </ListLinkRouter>
                  </ListPoint>
                  <ListPoint>
                    <ListLinkRouter to="/#projects" onClick={()=>changeSection(Sections.projects)}>
                      {dataContext.language_static.nav.portfolio}
                    </ListLinkRouter>
                  </ListPoint>
                  <ListPoint>
                    <ListLinkRouter to="/#contact" onClick={()=>changeSection(Sections.contact)}>
                      {dataContext.language_static.nav.contact}
                    </ListLinkRouter>
                  </ListPoint>
                </>
              )}

              <ListPoint>
                <ListLinkRouter
                  to="/blog"
                  className={activeSection === 4 ? "true" : "false"}
                >
                  {dataContext.language_static.nav.blog}
                </ListLinkRouter>
              </ListPoint>
            </ListDesorder>
            <ListDesorder>
              <LanguageButton
                languageCurrent={dataContext.language_current}
                themeCurrent={themeContext.theme}
                handleFunction={handleLanguage}
              />

              <ThemeButton
                handleFunction={handleTheme}
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
