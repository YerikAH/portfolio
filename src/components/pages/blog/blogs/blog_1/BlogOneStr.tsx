import {
  BlogMain,
  BlogSection,
  BoxGridOne,
  BoxGridTwo,
  BoxGrid,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
  ImageBlog,
  TextBodyOne,
  TextListBoxDesorder,
  TextList,
  HeadlineThree,
} from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import WhoPublished from '../../ui/WhoPublished'
import blogI from '../../../../../assets/blog/blogI.png'
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
            <ImageBlog src={blogI} />
            <TextBodyOne>
              En este artículo, explicaremos qué es la programación asíncrona, por qué la
              necesitamos, y discutiremos brevemente algunas de las formas en que las funciones
              asíncronas se han implementado históricamente en JavaScript.
            </TextBodyOne>
            <TextBodyOne>
              La programación asíncrona es una técnica que permite a tu programa iniciar una tarea
              de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta,
              en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha
              tarea ha finalizado, tu programa presenta el resultado. Muchas de las funciones
              proporcionadas por los navegadores, especialmente las más interesantes, pueden tardar
              mucho tiempo en ejecutarse. Es precisamente por eso por lo que esas funciones son
              asíncronas. Por ejemplo:
            </TextBodyOne>
            <TextListBoxDesorder>
              <TextList>Realizar peticiones HTTP utilizando fetch()</TextList>
              <TextList>
                Acceder a la cámara o micrófono de un usuario mediante getUserMedia()
              </TextList>
              <TextList>
                Pedir a un usuario que seleccione archivos usando showOpenFilePicker() (en-US)
              </TextList>
            </TextListBoxDesorder>
            <TextBodyOne>
              Por lo tanto, aunque no tenga que implementar sus propias funciones asíncronas muy a
              menudo, necesitará utilizarlas correctamente. En este artículo, comenzaremos viendo el
              problema de las funciones síncronas de larga duración, que hacen que la programación
              asíncrona sea una necesidad.
            </TextBodyOne>
            <HeadlineThree>
              Programación síncrona
            </HeadlineThree>
            <TextBodyOne>
              Considere el siguiente código:
            </TextBodyOne>
          </BoxGridOne>
          <BoxGridTwo>
            <CardLast />
          </BoxGridTwo>
        </BoxGrid>
      </BlogSection>
    </BlogMain>
  )
}
