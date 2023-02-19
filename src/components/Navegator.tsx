import { useContext, useState } from "react";

// styles
import { HeaderStyleTheme, NavStyle } from "../styles/navegator_styles";

// context
import FetchContext from "../context/dataContext";
import ThemeContext from "../context/themeContext";

// component
import MenuMobile from "./mobile/MenuMobile";
import LinksNav from "./nav/LinksNav";
import ButtonsNav from "./nav/ButtonsNav";

// enum or interface
import { InterfaceNavScroll } from "../interface/scrollspy";
import { Sections } from "../enum/LanguageEnum";

function Navegator({ activeSection, handleChange }: InterfaceNavScroll) {
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
            <LinksNav
              activeSection={activeSection}
              navText={dataContext.language_static.nav}
              changeSection={changeSection}
            />
            <ButtonsNav
              handleLanguage={handleLanguage}
              handleTheme={handleTheme}
              handleMenu={handleMenu}
              languageCurrent={dataContext.language_current}
              themeCurrent={themeContext.theme}
            />
          </NavStyle>
        </HeaderStyleTheme>
        <MenuMobile
          menu={menu}
          handleMenu={handleMenu}
          changeSection={changeSection}
        />
      </FetchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Navegator;
