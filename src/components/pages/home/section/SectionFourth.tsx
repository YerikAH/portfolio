import { useContext } from "react";
// styles
import {
  BoxGrid,
  BoxGridFather,
  BoxGridOne,
  BoxGridTwo,
  IconImage,
  SectionFourthStyles,
  SubtitleOne,
  TextBodyOne,
  TitleBox,
} from "../../../../styles/home/section_fourth";
// images
import Contact from "../../../../assets/icon/icon-phone.svg";
import FetchContext from "../../../../context/dataContext";
import ListTile from "./fourth/ListTile";
import FormComponent from "./fourth/FormComponent";
import { InterfaceSectionScroll } from "../../../../interface/scrollspy";

export default function SectionFourth({ sectionRef }: InterfaceSectionScroll) {
  const dataContext = useContext(FetchContext);

  return (
    <FetchContext.Provider value={dataContext}>
      <SectionFourthStyles ref={sectionRef} id="contact">
        <BoxGridFather>
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
              <FormComponent />
            </BoxGridOne>
            <BoxGridTwo>
              {dataContext.social_media.map((item, i) => (
                <ListTile key={i} data={item} />
              ))}
            </BoxGridTwo>
          </BoxGrid>
        </BoxGridFather>
      </SectionFourthStyles>
    </FetchContext.Provider>
  );
}
