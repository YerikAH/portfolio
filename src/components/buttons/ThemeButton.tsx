// interface and enum
import { Language, Theme } from "../../enum/LanguageEnum";
import { InterfaceButton } from "../../interface/buttons";

// styles
import { ImageButton, ListTheme } from "../../styles/navegator_styles";

// images
import sun from "../../assets/icon/sun.svg";
import moon from "../../assets/icon/moon.svg";

// tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";

export default function ThemeButton({
  languageCurrent,
  themeCurrent,
  handleFunction,
}: InterfaceButton) {
  function languageSwitchText(): string {
    return themeCurrent === Theme.dark
      ? languageCurrent === Language.es
        ? "Cambiar a tema claro"
        : "Change the theme light"
      : languageCurrent === Language.es
      ? "Cambiar a tema oscuro"
      : "Change the theme dark";
  }

  const [textToolTip, setTextToolTip] = useState(languageSwitchText);

  useEffect(() => {
    setTextToolTip(languageSwitchText);
  }, [languageCurrent, themeCurrent]);

  return (
    <>
      <ListTheme
        onClick={() => handleFunction()}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={textToolTip}
        data-tooltip-place="top"
        data-tooltip-variant={themeCurrent === Theme.dark ? "light" : "dark"}
      >
        {themeCurrent === Theme.light ? (
          <ImageButton src={sun} />
        ) : (
          <ImageButton src={moon} />
        )}
      </ListTheme>
      <Tooltip id="theme-tooltip" />
    </>
  );
}
