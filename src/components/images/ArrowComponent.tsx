import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SvgGeneral } from "../../styles/images/icons";

export default function ArrowComponent() {
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
        stroke="#FFF"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
        <path d="M15 16l4 -4"></path>
        <path d="M15 8l4 4"></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  );
}
