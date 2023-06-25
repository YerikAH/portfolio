import { BlogTwo } from '../../../../../interface/blogProps'
import {
  ImageBlog,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
  TextBodyOne,
  HeadlineThree,
  TextListBoxDesorder,
  TextList,
  HeadlineTwo,
  VideoiFrame,
  Frame,
} from '../../../../../styles/blog/blog_read'
import WhoPublished from '../../ui/WhoPublished'

export default function BlogThreeEn({ blogI }: BlogTwo) {
  return (
    <>
      <SpanText>{'//'} Experiencia</SpanText>
      <HeadlinePrincipal>Mi experiencia bajando de peso</HeadlinePrincipal>
      <SpanTextTwo>Publicado el 24 de junio, 2023</SpanTextTwo>
      <WhoPublished />
      <ImageBlog src={blogI} />
      <TextBodyOne>
        He estado dedicando tiempo a mi entrenamiento últimamente, lo que me ha llevado a adquirir
        conocimientos básicos sobre nutrición. He investigado temas como la pérdida de peso y el
        desarrollo muscular. Recuerdo que solía creer que solo bebiendo agua y comiendo "comida
        saludable" lograría bajar de peso. Sin embargo, me di cuenta de que estaba consumiendo mucha
        información falsa en Internet y, como resultado, fracasaba en muchas ocasiones.
        Recientemente, he comenzado una nueva fase de definición y parece que he olvidado aspectos
        muy importantes. Por esta razón, he decidido escribir este blog para compartir mi
        experiencia sobre cómo bajar de peso. Es importante tener en cuenta que lo que compartiré es
        simplemente mi experiencia personal y que si no funciona para ti, es completamente válido.
        Además, quiero aclarar que no soy médico ni nutricionista, solo me baso en algunas
        investigaciones científicas.
      </TextBodyOne>
      <br />
    </>
  )
}
