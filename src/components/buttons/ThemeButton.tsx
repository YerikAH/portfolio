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

// helpers
import { getTooltipText } from "../../helpers/getTooltipText";

export default function ThemeButton({
  languageCurrent,
  themeCurrent,
  handleFunction,
}: InterfaceButton) {
  const [textToolTip, setTextToolTip] = useState("Cambiar de tema");

  useEffect(() => {
    const textTooltip: string = getTooltipText(
      languageCurrent,
      "Cambiar de tema",
      "Change the theme"
    );
    setTextToolTip(textTooltip);
  }, [languageCurrent]);

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
