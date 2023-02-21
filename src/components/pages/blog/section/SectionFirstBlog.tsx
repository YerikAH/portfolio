import {
  BoxButtons,
  BoxGridBlog,
  BoxGridOne,
  BoxGridTwo,
  BoxTitle,
  DecorationBox,
  DecorationImage,
  DecorationImageBox,
  GroupBox,
  GroupContent,
  GroupContentLink,
  HeadlinePrincipal,
  IconButton,
  NavigationBox,
  NavigationGeneral,
  NavigationSubtitleButton,
  NavigationTitle,
  NavigationTitleButton,
  SectionStylesBlog,
  Separate,
  SpanText,
  SubtitleOne,
  SubtitleTwo,
  TextBox,
  TitleBox,
} from "../../../../styles/blog/section_first_blog";

import logoGradient from "../../../../assets/static/logo-gradient.svg";
import ArrowComponent from "../../../images/ArrowComponent";

export default function SectionFirstBlog() {
  return (
    <SectionStylesBlog>
      <BoxGridBlog>
        <BoxGridOne>
          <NavigationBox>
            <NavigationTitleButton>Blog</NavigationTitleButton>
          </NavigationBox>
          <NavigationGeneral>
            <Separate />
            <NavigationBox>
              <NavigationTitle>Topics</NavigationTitle>
              <NavigationSubtitleButton>Experiencias</NavigationSubtitleButton>
              <NavigationSubtitleButton>
                Reseñas de libros
              </NavigationSubtitleButton>
              <NavigationSubtitleButton>Programación</NavigationSubtitleButton>
            </NavigationBox>
            <Separate />
          </NavigationGeneral>
        </BoxGridOne>
        <BoxGridTwo>
          <DecorationBox>
            <HeadlinePrincipal>Blog</HeadlinePrincipal>
            <SubtitleOne>
              Historias de un desarrollador web: reflexiones y experiencias
            </SubtitleOne>
            <DecorationImageBox>
              <DecorationImage src={logoGradient} />
            </DecorationImageBox>
          </DecorationBox>
          <BoxTitle>
          <SubtitleTwo>Ultimos blogs</SubtitleTwo>

          <BoxButtons>
            <IconButton className="-180deg">
              <ArrowComponent/>
            </IconButton>
            <IconButton>
            <ArrowComponent/>
            </IconButton>
          </BoxButtons>
          </BoxTitle>
          <GroupBox>
            <GroupContent>
              <GroupContentLink></GroupContentLink>
              <SpanText className="var(--blue-brig)">// Experiencias</SpanText>
              <TitleBox>Mi Experiencia Aprendiendo Programación</TitleBox>
              <TextBox>
                Durante los últimos 8 meses he estado inmerso en un intenso
                proceso de aprendizaje de programación. Este periodo ha sido uno
                de los más desafiantes y gratificantes de mi vida...
              </TextBox>
            </GroupContent>
            <GroupContent>
              <GroupContentLink></GroupContentLink>
              <SpanText className="var(--purple-brig)">// Reseñas de libros</SpanText>
              <TitleBox>Mi Experiencia Aprendiendo Programación</TitleBox>
              <TextBox>
                Durante los últimos 8 meses he estado inmerso en un intenso
                proceso de aprendizaje de programación. Este periodo ha sido uno
                de los más desafiantes y gratificantes de mi vida...
              </TextBox>
            </GroupContent>
            <GroupContent>
              <GroupContentLink></GroupContentLink>
              <SpanText className="var(--pink-brig)">// Programación</SpanText>
              <TitleBox>Mi Experiencia Aprendiendo Programación</TitleBox>
              <TextBox>
                Durante los últimos 8 meses he estado inmerso en un intenso
                proceso de aprendizaje de programación. Este periodo ha sido uno
                de los más desafiantes y gratificantes de mi vida...
              </TextBox>
            </GroupContent>
          </GroupBox>
        </BoxGridTwo>
      </BoxGridBlog>
    </SectionStylesBlog>
  );
}
