// styles
import {
  HamImage,
  HeaderStyle,
  ListDesorder,
  ListHam,
  ListImageBox,
  ListLink,
  ListLogo,
  ListPoint,
  ListTheme,
  NavStyle,
  ThemeImage,
} from "../styles/navegator_styles";

// images
import logo from "../assets/icon/logo.svg";
import ham from "../assets/icon/ham.svg";
import sun from "../assets/icon/sun.svg";
import FetchContext from "../context/dataContext";
import { useContext, useState } from "react";
function Navegator() {
  const dataContext = useContext(FetchContext);
  console.log(dataContext);

  function handleClik() {
    dataContext.handle_language();
  }
  return (
    <FetchContext.Provider value={dataContext}>
      <HeaderStyle>
        <NavStyle>
          <ListDesorder>
            <ListImageBox>
              <ListLink className="logo">
                <ListLogo src={logo} />
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
              <ListLink className="false" onClick={handleClik}>
                {dataContext.language_static.nav.language}
              </ListLink>
            </ListPoint>

            <ListPoint>
              <ListLink className="false">
                {dataContext.language_static.nav.blog}
              </ListLink>
            </ListPoint>
          </ListDesorder>
          <ListDesorder>
            <ListTheme>
              <ThemeImage src={sun} />
            </ListTheme>
            <ListHam aria-label="open menu">
              <HamImage src={ham} />
            </ListHam>
          </ListDesorder>
        </NavStyle>
      </HeaderStyle>
    </FetchContext.Provider>
  );
}

export default Navegator;
