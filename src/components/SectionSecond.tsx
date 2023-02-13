// hook
import { useContext } from "react";

// styles
import {
  BoxGrid,
  BoxGridOne,
  SectionScondStyles,
  BoxGridTwo,
  TitleBox,
  IconImage,
  SubtitleOne,
  TextBodyOne,
  CircleAvatar,
} from "../styles/section_second";
// images
import aboutIcon from "../assets/icon/icon-about.svg";
import photo from "../assets/static/photo-harvey.png";

// components
import ListLabel from "./section/second/ListLabel";
import FetchContext from "../context/dataContext";
import InfoComponent from "./section/second/InfoComponent";

function SectionSecond() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <SectionScondStyles>
        <TitleBox>
          <IconImage src={aboutIcon} />
          <SubtitleOne>
            {dataContext.language_static.section_second.headline}
          </SubtitleOne>
        </TitleBox>
        <InfoComponent />
        <ListLabel />
      </SectionScondStyles>
    </FetchContext.Provider>
  );
}

export default SectionSecond;
