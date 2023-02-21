import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SvgGeneral } from "../../styles/images/icons";

export default function InfoComponent() {
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
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M12 8l.01 0"></path>
        <path d="M11 12l1 0l0 4l1 0"></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  );
}
