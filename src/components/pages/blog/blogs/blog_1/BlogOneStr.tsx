import {
  BlogMain,
  BlogSection,
  BoxGridOne,
  BoxGridTwo,
  BoxGrid,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
} from '../../../../../styles/blog/blog_read'
import WhoPublished from '../../ui/WhoPublished'

export default function BlogOneStr() {
  return (
    <BlogMain>
      <BlogSection>
        <BoxGrid>
          <BoxGridOne>
            <SpanText>{'//'} Experiencia</SpanText>
            <HeadlinePrincipal>
              Programación asíncrona en JavaScript: Conceptos esenciales y ejemplos prácticos
            </HeadlinePrincipal>
            <SpanTextTwo>Publicado el 23 de febrero, 2023</SpanTextTwo>
            <WhoPublished />
          </BoxGridOne>
          <BoxGridTwo></BoxGridTwo>
        </BoxGrid>
      </BlogSection>
    </BlogMain>
  )
}
