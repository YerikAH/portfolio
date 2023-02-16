import { useContext } from "react";
// styles
import {
  BoxGrid,
  BoxGridFather,
  BoxGridOne,
  BoxGridTwo,
  ButtonSubmit,
  FormStyles,
  IconImage,
  InputStyles,
  LabelStyles,
  SectionFourthStyles,
  SubtitleOne,
  TextAreaStyles,
  TextBodyOne,
  TitleBox,
} from "../../styles/section_fourth";
// images
import Contact from "../../assets/icon/icon-phone.svg";
import FetchContext from "../../context/dataContext";
import ListTile from "./fourth/ListTile";

export default function SectionFourth() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <SectionFourthStyles>
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
              <FormStyles>
                <LabelStyles htmlFor="name">
                  {dataContext.language_static.section_four.label_one}
                </LabelStyles>
                <InputStyles id="name" name="name" />
                <LabelStyles htmlFor="email">
                  {dataContext.language_static.section_four.label_two}
                </LabelStyles>
                <InputStyles id="email" name="email" />
                <LabelStyles>
                  {dataContext.language_static.section_four.label_three}
                </LabelStyles>
                <TextAreaStyles />
                <ButtonSubmit type="submit">
                  {dataContext.language_static.section_four.button}
                </ButtonSubmit>
              </FormStyles>
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
