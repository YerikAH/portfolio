import { createContext, useEffect, useState } from "react";

/* hook */
import { useFetch } from "../hook/useFetch";

/* interface and init state */
import { ContextInterface, ContextProps } from "../interface/props";
import { CONTEXT_INITIAL_STATE } from "../constant/contextInitialState";
import { Language } from "../enum/LanguageEnum";

const DataContext = createContext<ContextInterface>(CONTEXT_INITIAL_STATE);

const DataProvider = ({ children }: ContextProps) => {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const { dataJson, load } = useFetch(envUrl);
  const [dataValueAll, setDataValueAll] = useState<ContextInterface>(
    CONTEXT_INITIAL_STATE
  );
  const [language, setLanguage] = useState<Language>(Language.es);
  function handleLanguage() {
    if (dataJson !== null) {
      setLanguage(language === Language.es ? Language.en : Language.es);
    }
  }
  


  useEffect(() => {
    if (dataJson !== null) {
      const dataValue: ContextInterface = {
        language_static: dataJson.language["es"].static,
        language_dynamic: dataJson.language["es"].dynamic,
        photo: dataJson.photo_url,
        social_media: dataJson.social_media,
        skills: dataJson.skills,
        language_current: language,
        handle_language: handleLanguage,
      };
      setDataValueAll(dataValue);
    }
  }, [load]);

  useEffect(() => {
    if (dataJson !== null) {
      const dataValue: ContextInterface = {
        language_static: dataJson.language[language].static,
        language_dynamic: dataJson.language[language].dynamic,
        photo: dataJson.photo_url,
        language_current: language,
        social_media: dataJson.social_media,
        skills: dataJson.skills,
        handle_language: handleLanguage,
      };
      setDataValueAll(dataValue);
    }
  }, [language, dataJson]);

  return (
    <DataContext.Provider value={dataValueAll}>{children}</DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
