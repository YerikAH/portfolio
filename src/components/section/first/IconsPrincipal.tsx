// styles
import { BoxImages, IconImage } from "../../../styles/section_first";
// images
import typescriptIcon from "../../../assets/icon/icon-typescript.svg";
import reactIcon from "../../../assets/icon-react.svg";
import flutterIcon from "../../../assets/icon-flutter.svg";

export default function IconsPrincipal() {
  return (
    <BoxImages>
      <IconImage src={reactIcon} className="icon_side" />
      <IconImage src={flutterIcon} />
      <IconImage src={typescriptIcon} className="icon_side" />
    </BoxImages>
  );
}
