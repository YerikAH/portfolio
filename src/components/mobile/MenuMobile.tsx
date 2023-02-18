import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DataContext from "../../context/dataContext";
import {
  ListHam,
  MenuMobileLink,
  MenuMobileList,
  MenuMobileStylesTheme,
  MenuMobileUlist,
} from "../../styles/menu_mobile_styles";
import CloseHamComponent from "../images/CloseHamComponent";
// props or interface
import { InterfaceStylesMenu, MenuMobileProps } from "../../interface/props";
import { STYLES_MENU } from "../../constant/appInitialState";
import ThemeContext from "../../context/themeContext";

export default function MenuMobile({ menu, handleMenu }: MenuMobileProps) {
  const menuHTML = document.getElementById("menu")!;
  const dataContext = useContext(DataContext);
  const themeContext = useContext(ThemeContext);
  const [stylesMenu, setStylesMenu] =
    useState<InterfaceStylesMenu>(STYLES_MENU);

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
            <MenuMobileList>
              <MenuMobileLink>
                {dataContext.language_static.nav.home}
              </MenuMobileLink>
            </MenuMobileList>
            <MenuMobileList>
              <MenuMobileLink>
                {dataContext.language_static.nav.about}
              </MenuMobileLink>
            </MenuMobileList>
            <MenuMobileList>
              <MenuMobileLink>
                {dataContext.language_static.nav.portfolio}
              </MenuMobileLink>
            </MenuMobileList>
            <MenuMobileList>
              <MenuMobileLink>
                {dataContext.language_static.nav.contact}
              </MenuMobileLink>
            </MenuMobileList>
            <MenuMobileList>
              <MenuMobileLink>
                {dataContext.language_static.nav.blog}
              </MenuMobileLink>
            </MenuMobileList>
          </MenuMobileUlist>
        </MenuMobileStylesTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>,
    menuHTML
  );
}
