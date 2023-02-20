// styles
import { ListDesorder, ListHam } from "../../styles/navegator_styles";

// props
import { ButtonNavProps } from "../../interface/props";

// components
import LanguageButton from "../buttons/LanguageButton";
import ThemeButton from "../buttons/ThemeButton";
import HamComponents from "../images/HamComponents";
import CloseHamComponent from "../images/CloseHamComponent";

export default function ButtonsNav({
  languageCurrent,
  themeCurrent,
  handleLanguage,
  handleTheme,
  handleMenu,
  menu
}: ButtonNavProps) {
  return (
    <ListDesorder>
      <LanguageButton
        languageCurrent={languageCurrent}
        themeCurrent={themeCurrent}
        handleFunction={handleLanguage}
      />
      <ThemeButton
        handleFunction={handleTheme}
        languageCurrent={languageCurrent}
        themeCurrent={themeCurrent}
      />
      <ListHam aria-label="open menu" onClick={handleMenu}>
        {!menu ?<HamComponents />: <CloseHamComponent/> }
        
      </ListHam>
    </ListDesorder>
  );
}
