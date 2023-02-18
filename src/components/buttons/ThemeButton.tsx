import React from "react";
import { Theme } from "../../enum/LanguageEnum";
import { InterfaceTheButton } from "../../interface/buttons";
import { ImageButton, ListTheme } from "../../styles/navegator_styles";
// images
import sun from "../../assets/icon/sun.svg";
import moon from "../../assets/icon/moon.svg";

export default function ThemeButton({
  languageCurrent,
  themeCurrent,
  handleThemeProps,
}: InterfaceTheButton) {
  return (
    <ListTheme onClick={() => handleThemeProps()}>
      {themeCurrent === Theme.light ? (
        <ImageButton src={sun} />
      ) : (
        <ImageButton src={moon} />
      )}
    </ListTheme>
  );
}
