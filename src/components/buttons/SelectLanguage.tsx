import {
  ButtonLanguage,
  ImageLanguage,
  SelectLanguageBox,
  Separator,
} from "../../styles/select_language";

// images
import flagEs from "../../assets/static/es.png";
import flagEn from "../../assets/static/en.png";

export default function SelectLanguage() {
  return (
    <SelectLanguageBox>
      <ButtonLanguage>
        <ImageLanguage src={flagEn} />
        Descargar en idioma ingles
      </ButtonLanguage>
      <Separator />
      <ButtonLanguage>
        <ImageLanguage src={flagEs} />
        Descargar en idioma español
      </ButtonLanguage>
    </SelectLanguageBox>
  );
}
