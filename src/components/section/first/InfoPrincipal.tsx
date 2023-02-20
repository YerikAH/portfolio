// hook
import { useContext } from "react";

//styles
import {
  BoxButtons,
  HeadlinePrincipal,
  TextButtonFill,
  TextButtonStroke,
} from "../../../styles/section_first";

// context
import FetchContext from "../../../context/dataContext";
import SelectLanguage from "../../buttons/SelectLanguage";

export default function InfoPrincipal() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <HeadlinePrincipal>
        {dataContext.language_static.section_first.headline}
      </HeadlinePrincipal>
      <BoxButtons>
        <TextButtonStroke>
          {dataContext.language_static.section_first.button_one}
        </TextButtonStroke>
        <TextButtonFill>
          {dataContext.language_static.section_first.button_two}

          <SelectLanguage />
        </TextButtonFill>
      </BoxButtons>
    </FetchContext.Provider>
  );
}
