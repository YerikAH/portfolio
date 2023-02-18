// styles
import { ImageButton, ListTheme } from "../../styles/navegator_styles";

// tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// images
import flagEs from "../../assets/static/es.png";
import flagEn from "../../assets/static/en.png";

// interface and enum
import { Language } from "../../enum/LanguageEnum";
import { InterfaceLangButton } from "../../interface/buttons";

export default function LanguageButton({
  handleLanguageProps,
  languageCurrent,
}: InterfaceLangButton) {
  return (
    <>
      <ListTheme
        onClick={() => handleLanguageProps()}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello world!"
        data-tooltip-place="top"
        data-tooltip-variant="dark"
      >
        {languageCurrent === Language.es ? (
          <ImageButton src={flagEn} />
        ) : (
          <ImageButton src={flagEs} />
        )}
      </ListTheme>
      <Tooltip id="my-tooltip" />
    </>
  );
}
