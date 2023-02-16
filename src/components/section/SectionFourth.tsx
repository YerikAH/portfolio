import { useContext } from "react";
// styles
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  IconImage,
  SectionFourthStyles,
  SubtitleOne,
  TextBodyOne,
  TitleBox,
} from "../../styles/section_fourth";
// images
import Contact from "../../assets/icon/icon-phone.svg";
import FetchContext from "../../context/dataContext";

export default function SectionFourth() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <SectionFourthStyles>
        <TitleBox>
          <IconImage src={Contact} />
          <SubtitleOne>
            {dataContext.language_static.section_four.headline}
          </SubtitleOne>
          <TextBodyOne>
            {dataContext.language_static.section_four.text}
          </TextBodyOne>
        </TitleBox>
        <BoxGrid>
          <BoxGridOne>
            

          </BoxGridOne>
          <BoxGridTwo>
            {dataContext.social_media.map(item)}

          </BoxGridTwo>
        </BoxGrid>
      </SectionFourthStyles>
    </FetchContext.Provider>
  );
}
