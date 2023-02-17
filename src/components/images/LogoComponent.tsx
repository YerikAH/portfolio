import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { PathStyles, SvgStyles } from "../../styles/images/logo";

export default function LogoComponent() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgStyles
        width="18"
        height="26"
        viewBox="0 0 18 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyles
        className={themeContext.theme}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 2.7992V22.9508C1.47932 22.5474 2.85967 22.8979 5.66129 23.8788V15.3939H13.3548V26C15.4884 25.5807 16.5943 25.2593 18 24.1439V3.06435C18 3.06435 16.1336 1.48603 13.3548 0.594834V10.7538H5.66129V0.55516C2.38111 1.37441 0 2.7992 0 2.7992Z"
          fill="#212121"
        />
      </SvgStyles>
    </ThemeContext.Provider>
  );
}
