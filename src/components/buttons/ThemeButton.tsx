import { useEffect, useState } from "react";

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

// const
import { EN_DARK, EN_LIGHT, ES_DARK, ES_LIGHT } from "../../constant/TextInit";

export default function ThemeButton({
  languageCurrent,
  themeCurrent,
  handleFunction,
}: InterfaceButton) {
  function languageSwitchText(): string {
    return themeCurrent === Theme.dark
      ? languageCurrent === Language.es
        ? ES_LIGHT
        : EN_LIGHT
      : languageCurrent === Language.es
      ? ES_DARK
      : EN_DARK;
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
