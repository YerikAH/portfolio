import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DataContext from "../../context/dataContext";
import {
  ListHam,
  MenuMobileLinkRouter,
  MenuMobileList,
  MenuMobileStylesTheme,
  MenuMobileUlist,
} from "../../styles/menu_mobile_styles";
import CloseHamComponent from "../images/CloseHamComponent";
// props or interface
import { InterfaceStylesMenu, MenuMobileProps } from "../../interface/props";
import { STYLES_MENU } from "../../constant/appInitialState";
import ThemeContext from "../../context/themeContext";
import { useLocation } from "react-router-dom";
import { Sections } from "../../enum/LanguageEnum";
import HomeMenuMobile from "./HomeMenuMobile";
import BlogMenuMobile from "./BlogMenuMobile";

export default function MenuMobile({
  menu,
  handleMenu,
  changeSection,
}: MenuMobileProps) {
  const menuHTML = document.getElementById("menu")!;
  const dataContext = useContext(DataContext);
  const themeContext = useContext(ThemeContext);
  const [stylesMenu, setStylesMenu] =
    useState<InterfaceStylesMenu>(STYLES_MENU);

  let location = useLocation();

  function handleSwitch() {
    handleMenu();
  }

  useEffect(() => {
    let stylesNormal: InterfaceStylesMenu = {
      right: "0",
    };
    if (menu) {
      setStylesMenu(stylesNormal);
    } else {
      stylesNormal.right = "-100vw";
      setStylesMenu(stylesNormal);
    }
  }, [menu]);

  return ReactDOM.createPortal(
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <MenuMobileStylesTheme
          style={stylesMenu}
          className={themeContext.theme}
        >
          <ListHam onClick={handleSwitch}>
            <CloseHamComponent />
          </ListHam>
          <MenuMobileUlist>
            {location.pathname === "/" ? (
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
              <MenuMobileLinkRouter to="/blog">
                {dataContext.language_static.nav.blog}
              </MenuMobileLinkRouter>
            </MenuMobileList>
          </MenuMobileUlist>
        </MenuMobileStylesTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>,
    menuHTML
  );
}
