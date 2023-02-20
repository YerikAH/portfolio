// hook
import { useContext, useState } from "react";

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
  const [languageOptions, setLanguageOptions] = useState(false)

  function handleLanguage(){
    setLanguageOptions(languageOptions ? false : true)
  }

  return (
    <FetchContext.Provider value={dataContext}>
      <HeadlinePrincipal>
        {dataContext.language_static.section_first.headline}
      </HeadlinePrincipal>
      <BoxButtons>
        <TextButtonStroke>
          {dataContext.language_static.section_first.button_one}
        </TextButtonStroke>
        <TextButtonFill onClick={handleLanguage}>
          {dataContext.language_static.section_first.button_two}
          <SelectLanguage languageOptions={languageOptions} sectionFirst={dataContext.language_static.section_first}/>
        </TextButtonFill>
      </BoxButtons>
    </FetchContext.Provider>
  );
}
