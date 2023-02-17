// styles
import {
  HamImage,
  HeaderStyleTheme,
  ListDesorder,
  ListHam,
  ListImageBox,
  ListLink,
  ListPoint,
  ListTheme,
  NavStyle,
  ThemeImage,
} from "../styles/navegator_styles";

// images
import ham from "../assets/icon/ham.svg";
import sun from "../assets/icon/sun.svg";
import moon from "../assets/icon/moon.svg"

import FetchContext from "../context/dataContext";
import { useContext } from "react";
import ThemeContext  from "../context/themeContext";
import LogoComponent from "./images/LogoComponent";
import { Theme } from "../enum/LanguageEnum";
function Navegator() {
  const dataContext = useContext(FetchContext);
  const themeContext = useContext(ThemeContext);
  function handleClik() {
    dataContext.handle_language();
  }
  function handleTheme(){
    themeContext.handle_theme()
  }
  return (
    <ThemeContext.Provider value={themeContext}>
      <FetchContext.Provider value={dataContext}>
        <HeaderStyleTheme className={themeContext.theme}>
          <NavStyle>
            <ListDesorder>
              <ListImageBox>
                <ListLink className="logo">
                  <LogoComponent/>
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
              <ListTheme onClick={handleTheme}>
                {themeContext.theme === Theme.light
                ? <ThemeImage src={sun} /> : <ThemeImage src={moon} />}
                
              </ListTheme>
              <ListHam aria-label="open menu">
                <HamImage src={ham} />
              </ListHam>
            </ListDesorder>
          </NavStyle>
        </HeaderStyleTheme>
      </FetchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Navegator;
