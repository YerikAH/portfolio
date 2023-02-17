// styles
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  SectionFirstStylesTheme,
} from "../../styles/section_first";

//components
import IconsPrincipal from "./first/IconsPrincipal";
import InfoPrincipal from "./first/InfoPrincipal";

function SectionFirst() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SectionFirstStylesTheme className={themeContext.theme}>
        <BoxGrid>
          <BoxGridOne>
            <IconsPrincipal />
          </BoxGridOne>
          <BoxGridTwo>
            <InfoPrincipal />
          </BoxGridTwo>
        </BoxGrid>
      </SectionFirstStylesTheme>
    </ThemeContext.Provider>
  );
}

export default SectionFirst;
