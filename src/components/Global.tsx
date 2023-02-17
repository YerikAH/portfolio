import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { GlobalStyles } from "../styles/global";

export default function Global() {
  const themeContext = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={themeContext}>
      <GlobalStyles theme={themeContext.theme} />
    </ThemeContext.Provider>
  );
}
