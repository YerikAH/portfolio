// hook
import { useContext } from "react";

//styles
import {
  IconImage,
  SectionThirdStyles,
  SubtitleOne,
  TitleBox,
} from "../../styles/section_third";

// images
import portfolioIcon from "../../assets/icon/icon-job.svg";

// context
import FetchContext from "../../context/dataContext";

export default function SectionThird() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <SectionThirdStyles>
        <TitleBox>
          <IconImage src={portfolioIcon} />
          <SubtitleOne>
            {dataContext.language_static.section_third.headline}
          </SubtitleOne>
        </TitleBox>
      </SectionThirdStyles>
    </FetchContext.Provider>
  );
}
