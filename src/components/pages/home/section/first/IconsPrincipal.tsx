// styles
import { BoxImages, IconImage } from "../../../../../styles/home/section_first";
// images
import typescriptIcon from "../../../../../assets/icon/icon-typescript.svg";
import reactIcon from "../../../../../assets/icon/icon-react.svg";
import flutterIcon from "../../../../../assets/icon/icon-flutter.svg";

export default function IconsPrincipal() {
  return (
    <BoxImages>
      <IconImage src={reactIcon} className="icon_side" />
      <IconImage src={flutterIcon} />
      <IconImage src={typescriptIcon} className="icon_side" />
    </BoxImages>
  );
}
