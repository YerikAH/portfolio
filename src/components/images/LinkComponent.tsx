import ThemeContext from "../../context/themeContext";
import { useContext } from "react";
import { SvgIconsProjects } from "../../styles/images/icons";
export default function LinkComponent() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgIconsProjects
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
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
      </SvgIconsProjects>
    </ThemeContext.Provider>
  );
}
