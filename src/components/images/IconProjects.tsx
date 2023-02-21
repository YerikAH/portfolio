import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SvgGeneral } from "../../styles/images/icons";

export default function IconProjects() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgGeneral
        xmlns="http://www.w3.org/2000/svg"
        className={themeContext.theme}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#212121"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
        <path d="M12 12l0 .01"></path>
        <path d="M3 13a20 20 0 0 0 18 0"></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  );
}
