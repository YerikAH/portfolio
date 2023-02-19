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
import LinksNav from "./nav/LinksNav";

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
            <LinksNav activeSection={activeSection} navText={dataContext.language_static.nav} changeSection={changeSection}/>
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
