// styles
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  SectionFirstStyles,
} from "../../styles/section_first";

//components
import IconsPrincipal from "./first/IconsPrincipal";
import InfoPrincipal from "./first/InfoPrincipal";

function SectionFirst() {
  return (
    <SectionFirstStyles>
      <BoxGrid>
        <BoxGridOne>
          <IconsPrincipal />
        </BoxGridOne>
        <BoxGridTwo>
          <InfoPrincipal />
        </BoxGridTwo>
      </BoxGrid>
    </SectionFirstStyles>
  );
}

export default SectionFirst;
