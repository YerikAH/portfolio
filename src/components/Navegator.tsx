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
function Navegator() {
  return (
    <>
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
    </>
  );
}

export default Navegator;
