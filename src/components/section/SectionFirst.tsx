// styles
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { InterfaceSectionScroll } from "../../interface/scrollspy";
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  SectionFirstStylesTheme,
} from "../../styles/section_first";

//components
import IconsPrincipal from "./first/IconsPrincipal";
import InfoPrincipal from "./first/InfoPrincipal";

function SectionFirst({ sectionRef }: InterfaceSectionScroll) {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SectionFirstStylesTheme
        className={themeContext.theme}
        ref={sectionRef}
        id="home"
      >
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
