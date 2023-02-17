import { createContext, useEffect, useState } from "react";
import { THEME_CONTEXT_INITIAL_STATE } from "../constant/contextInitialState";
import { Theme } from "../enum/LanguageEnum";
/* interface and init state */
import { ContextProps, ContextThemeInterface } from "../interface/props";

const ThemeContext = createContext<ContextThemeInterface>(
  THEME_CONTEXT_INITIAL_STATE
);

const ThemeProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<ContextThemeInterface>(
    THEME_CONTEXT_INITIAL_STATE
  );
  const [theme, setTheme] = useState<Theme>(Theme.light);
  function handleTheme() {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  }

  useEffect(() => {
    setData({
      handle_theme: handleTheme,
      theme: theme,
    });
  }, [theme]);

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };
