// hook
import { useContext } from "react";

// styles
import {
  SectionScondStyles,
  TitleBox,
  IconImage,
  SubtitleOne,
} from "../../styles/section_second";
// images
import aboutIcon from "../../assets/icon/icon-about.svg";
// components
import ListLabel from "./second/ListLabel";
import InfoComponent from "./second/InfoComponent";

// hook
import FetchContext from "../../context/dataContext";

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
