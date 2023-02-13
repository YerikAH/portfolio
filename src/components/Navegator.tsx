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
              <ListLink className="true">Home</ListLink>
            </ListPoint>

            <ListPoint>
              <ListLink className="false">Sobre mí</ListLink>
            </ListPoint>

            <ListPoint>
              <ListLink className="false">Portafolio</ListLink>
            </ListPoint>

            <ListPoint>
              <ListLink className="false">Contactame</ListLink>
            </ListPoint>

            <ListPoint>
              <ListLink className="false">Blog</ListLink>
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
