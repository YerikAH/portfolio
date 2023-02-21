import {
  BoxGridBlog,
  BoxGridOne,
  BoxGridTwo,
  DecorationBox,
  HeadlinePrincipal,
  NavigationBox,
  NavigationGeneral,
  NavigationSubtitleButton,
  NavigationTitle,
  NavigationTitleButton,
  SectionStylesBlog,
  Separate,
  SubtitleOne,
  SubtitleTwo,
} from "../../../../styles/blog/section_first_blog";

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
          </DecorationBox>
          <SubtitleTwo>Ultimos blogs</SubtitleTwo>
        </BoxGridTwo>
      </BoxGridBlog>
    </SectionStylesBlog>
  );
}
