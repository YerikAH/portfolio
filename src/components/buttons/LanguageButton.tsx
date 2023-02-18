// styles
import { ImageButton, ListTheme } from "../../styles/navegator_styles";

// tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// images
import flagEs from "../../assets/static/es.png";
import flagEn from "../../assets/static/en.png";

// interface and enum
import { Language, Theme } from "../../enum/LanguageEnum";
import { InterfaceButton } from "../../interface/buttons";

// helpers
import { useEffect, useState } from "react";

export default function LanguageButton({
  handleFunction,
  languageCurrent,
  themeCurrent,
}: InterfaceButton) {
  function languageSwitchText(): string {
    return languageCurrent === Language.es
      ? "Cambiar a idioma ingles"
      : "Change to language spanish";
  }

  const [textToolTip, setTextToolTip] = useState(languageSwitchText);

  useEffect(() => {
    setTextToolTip(languageSwitchText);
  }, [languageCurrent]);

  return (
    <>
      <ListTheme
        onClick={() => handleFunction()}
        data-tooltip-id="language-tooltip"
        data-tooltip-content={textToolTip}
        data-tooltip-place="top"
        data-tooltip-variant={themeCurrent === Theme.dark ? "light" : "dark"}
      >
        {languageCurrent === Language.es ? (
          <ImageButton src={flagEn} />
        ) : (
          <ImageButton src={flagEs} />
        )}
      </ListTheme>
      <Tooltip id="language-tooltip" />
    </>
  );
}
