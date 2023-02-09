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
  LabelSkills,
  ListSkills,
} from "../styles/section_second";
// images
import aboutIcon from "../assets/icon/icon-about.svg";
import photo from "../assets/static/photo-harvey.png";

function SectionSecond() {
  return (
    <SectionScondStyles>
      <TitleBox>
        <IconImage src={aboutIcon} />
        <SubtitleOne>Sobre mí</SubtitleOne>
      </TitleBox>
      <BoxGrid>
        <BoxGridOne>
          <TextBodyOne>
            I am a front-end web developer with 9 years of working experience in
            fields like sales, customer support, social media, and management. I
            combine my management expertise with technical skills and fully
            commit to consistency, meeting deadlines, and utilizing all
            available resources to achieve results, my skills:
          </TextBodyOne>
        </BoxGridOne>
        <BoxGridTwo>
          <CircleAvatar src={photo} />
        </BoxGridTwo>
      </BoxGrid>
      <ListSkills>
        <LabelSkills>JavaScript</LabelSkills>
        <LabelSkills>Python</LabelSkills>
        <LabelSkills>C</LabelSkills>
        <LabelSkills>PHP</LabelSkills>
        <LabelSkills>Java</LabelSkills>
        <LabelSkills>Dart</LabelSkills>
        <LabelSkills>SQL</LabelSkills>
        <LabelSkills>JavaScript</LabelSkills>
        <LabelSkills>Python</LabelSkills>
        <LabelSkills>C</LabelSkills>
        <LabelSkills>PHP</LabelSkills>
        <LabelSkills>Java</LabelSkills>
        <LabelSkills>Dart</LabelSkills>
        <LabelSkills>SQL</LabelSkills>
        <LabelSkills>JavaScript</LabelSkills>
        <LabelSkills>Python</LabelSkills>
        <LabelSkills>C</LabelSkills>
        <LabelSkills>PHP</LabelSkills>
        <LabelSkills>Java</LabelSkills>
        <LabelSkills>Dart</LabelSkills>
        <LabelSkills>SQL</LabelSkills>
      </ListSkills>
    </SectionScondStyles>
  );
}

export default SectionSecond;
