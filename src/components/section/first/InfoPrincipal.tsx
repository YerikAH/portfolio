//styles
import {
  BoxButtons,
  HeadlinePrincipal,
  TextButtonFill,
  TextButtonStroke,
} from "../../../styles/section_first";
import FetchContext from "../../../context/dataContext";
import { useContext } from "react";
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
        </TextButtonFill>
      </BoxButtons>
    </FetchContext.Provider>
  );
}
