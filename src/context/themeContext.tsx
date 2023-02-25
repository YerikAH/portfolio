// hook
import { createContext, useEffect, useState } from 'react'

// interface and init state
import { THEME_CONTEXT_INITIAL_STATE } from '../constant/contextInitialState'
import { ContextProps, ContextThemeInterface } from '../interface/props'

// enum
import { Theme } from '../enum/LanguageEnum'
import { THEME_LOCALSTORAGE } from '../constant/localStorageName'

const ThemeContext = createContext<ContextThemeInterface>(THEME_CONTEXT_INITIAL_STATE)

const ThemeProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<ContextThemeInterface>(THEME_CONTEXT_INITIAL_STATE)
  const [theme, setTheme] = useState<Theme>(Theme.light)
  function handleTheme() {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
    localStorage.setItem(THEME_LOCALSTORAGE, theme)
  }

  useEffect(() => {
    setData({
      handle_theme: handleTheme,
      theme: theme,
    })
  }, [theme])

  // SAVE LOCALSTORAGE
  useEffect(() => {
    const theme = localStorage.getItem(THEME_LOCALSTORAGE)
    if (typeof theme === 'string') {
      const themeChange = theme as Theme
      setTheme(themeChange === Theme.light ? Theme.dark : Theme.light)
    }
  }, [])

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext
export { ThemeProvider }
