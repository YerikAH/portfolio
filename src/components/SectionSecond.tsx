import {
  BoxGrid,
  BoxGridOne,
  SectionScondStyles,
  BoxGridTwo,
  TitleBox,
  IconImage,
} from "../styles/section_second";

function SectionSecond() {
  return (
    <SectionScondStyles>
      <TitleBox>
        <IconImage src="" />
      </TitleBox>
      <BoxGrid>
        <BoxGridOne></BoxGridOne>
        <BoxGridTwo></BoxGridTwo>
      </BoxGrid>
    </SectionScondStyles>
  );
}

export default SectionSecond;
