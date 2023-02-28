import { useContext } from 'react'
import {
  BlogMain,
  BlogSectionTheme,
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
  CodeSyntax,
} from '../../../../../styles/blog/blog_read'
import CardLast from '../../ui/CardLast'
import WhoPublished from '../../ui/WhoPublished'
import blogI from '../../../../../assets/blog/blogI.png'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ThemeContext from '../../../../../context/themeContext'
export default function BlogOneStr() {
  const themeContext = useContext(ThemeContext)
  const codeaa =
    'function createChildren(style, useInlineStyles) {\n  letchildrenCount = 0;\n return children => {\n    childrenCount += 1;\n   return children.map((child, i) =>createElement({\nnode: child,\nstyle,\nuseInlineStyles,\nkey:`code-segment-${childrenCount}-${i}`\n}));\n}\n}\n'
  return (
    <ThemeContext.Provider value={themeContext}>
      <BlogMain>
        <BlogSectionTheme className={themeContext.theme}>
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
                de larga duración y seguir respondiendo a otros eventos mientras esa tarea se
                ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez
                que dicha tarea ha finalizado, tu programa presenta el resultado. Muchas de las
                funciones proporcionadas por los navegadores, especialmente las más interesantes,
                pueden tardar mucho tiempo en ejecutarse. Es precisamente por eso por lo que esas
                funciones son asíncronas. Por ejemplo:
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
                menudo, necesitará utilizarlas correctamente. En este artículo, comenzaremos viendo
                el problema de las funciones síncronas de larga duración, que hacen que la
                programación asíncrona sea una necesidad.
              </TextBodyOne>
              <HeadlineThree>Programación síncrona</HeadlineThree>
              <TextBodyOne>Considere el siguiente código:</TextBodyOne>
              <CodeSyntax language='javascript' style={atomOneDark} children={codeaa}></CodeSyntax>
              <TextBodyOne>
                Debemos notar aquí que el navegador recorre el programa línea a línea, en el mismo
                orden en que nosotros lo escribimos. En cada punto, el navegador espera a que la
                línea termine su trabajo antes de pasar a la siguiente línea. Tiene que hacer esto
                porque cada línea depende del trabajo realizado en las líneas precedentes.
              </TextBodyOne>
            </BoxGridOne>
            <BoxGridTwo>
              <CardLast />
            </BoxGridTwo>
          </BoxGrid>
        </BlogSectionTheme>
      </BlogMain>
    </ThemeContext.Provider>
  )
}
