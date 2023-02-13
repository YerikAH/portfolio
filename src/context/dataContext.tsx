import { createContext, useEffect, useState } from "react";

/* hook */
import { useFetch } from "../hook/useFetch";

/* interface and init state */
import { ContextInterface, ContextProps } from "../interface/props";
import { CONTEXT_INITIAL_STATE } from "../constant/contextInitialState";

const DataContext = createContext<ContextInterface>(CONTEXT_INITIAL_STATE);

const DataProvider = ({ children }: ContextProps) => {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const { dataJson, load } = useFetch(envUrl);
  const [dataValueAll, setDataValueAll] = useState<ContextInterface>(
    CONTEXT_INITIAL_STATE
  );
  const [language, setLanguage] = useState<string>("es");

  function handleLanguage() {
    if (dataJson !== null) {
      if (language === "es") {
        setLanguage("en");
      } else {
        setLanguage("es");
      }
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
        handle_language: handleLanguage,
      };
      setDataValueAll(dataValue);
    }
    console.log("Me");
  }, [load]);

  useEffect(() => {
    if (dataJson !== null) {
      const lang = language === "es" ? "es" : "en";
      if (language === "es") {
        const dataValue: ContextInterface = {
          language_static: dataJson.language["en"].static,
          language_dynamic: dataJson.language["en"].dynamic,
          photo: dataJson.photo_url,
          social_media: dataJson.social_media,
          skills: dataJson.skills,
          handle_language: handleLanguage,
        };
        setDataValueAll(dataValue);
      } else {
        const dataValue: ContextInterface = {
          language_static: dataJson.language["es"].static,
          language_dynamic: dataJson.language["es"].dynamic,
          photo: dataJson.photo_url,
          social_media: dataJson.social_media,
          skills: dataJson.skills,
          handle_language: handleLanguage,
        };
        setDataValueAll(dataValue);
      }
    }
  }, [language]);

  return (
    <DataContext.Provider value={dataValueAll}>{children}</DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
