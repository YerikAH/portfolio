import { useContext } from "react";
import ReactDOM from "react-dom";
import DataContext from "../../context/dataContext";
import {
  ListHam,
  MenuMobileLink,
  MenuMobileList,
  MenuMobileStyles,
  MenuMobileUlist,
} from "../../styles/menu_mobile_styles";
import CloseHamComponent from "../images/CloseHamComponent";

export default function MenuMobile() {
  const menuHTML = document.getElementById("menu")!;
  const dataContext = useContext(DataContext);
  return ReactDOM.createPortal(
    <DataContext.Provider value={dataContext}>
      <MenuMobileStyles>
        <ListHam>
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
      </MenuMobileStyles>
    </DataContext.Provider>,
    menuHTML
  );
}
