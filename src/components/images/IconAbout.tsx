import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SvgGeneral } from "../../styles/images/icons";

export default function IconAbout() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgGeneral
        xmlns="http://www.w3.org/2000/svg"
        className={themeContext.theme}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#212121"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h1"></path>
        <path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
        <path d="M18.5 19.5l2.5 2.5"></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  );
}
