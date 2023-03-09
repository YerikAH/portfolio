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

export default function BlogTwoEs({ blogI }: BlogTwo) {
  return (
    <>
      {' '}
      <SpanText>{'//'} Resumen de libros</SpanText>
      <HeadlinePrincipal>
        Resumen del libro "Hábitos Atómicos": Cómo crear hábitos que te lleven al éxito.
      </HeadlinePrincipal>
      <SpanTextTwo>Publicado el 8 de marzo, 2023</SpanTextTwo>
      <WhoPublished />
      <ImageBlog src={blogI} />
      <TextBodyOne>
        Una vez que terminé de leerlo, se convirtió en uno de mis libros favoritos debido a su
        excelente contenido. Lo que más me gustó de él es que, como el propio libro lo describe, es
        un manual para desarrollar buenos hábitos y eliminar los malos. Para realmente beneficiarse
        del libro, es importante actuar en consecuencia.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        Además, la lectura resultó muy amena ya que no encontré muchas palabras desconocidas y cada
        capítulo parecía enseñarme algo que nunca antes había considerado. En resumen, puedo decir
        que este libro es increíble, pero no puedo enfatizar lo suficiente que leerlo es una
        experiencia incomparable a cualquier resumen que se pueda hacer.
      </TextBodyOne>
      <br />
      <HeadlineTwo>Resumen</HeadlineTwo>
      <TextBodyOne>
        Los hábitos son herramientas poderosas que pueden tener un gran impacto en nuestro futuro.
        Si realizamos acciones positivas de forma consistente, veremos resultados positivos a largo
        plazo. De manera similar, si seguimos acciones negativas durante mucho tiempo, tendremos
        resultados negativos en el futuro. Aunque suena obvio, es importante recordar que incluso un
        pequeño cambio positivo en nuestros hábitos diarios puede tener un gran impacto en nuestro
        éxito a largo plazo.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        Al enfocarnos en la construcción de buenos hábitos, podemos mejorar nuestra identidad y
        nuestro futuro. Por ejemplo, si queremos bajar de peso, en lugar de enfocarnos en esa meta
        en sí misma, es mejor centrarnos en convertirnos en alguien que hace ejercicio regularmente.
        Al hacerlo, podemos crear hábitos saludables y sostenibles que nos lleven a nuestro objetivo
        a largo plazo.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        En resumen, los hábitos moldean nuestra identidad y son fundamentales para lograr un futuro
        exitoso y saludable. Es importante recordar que podemos construir tanto buenos hábitos como
        malos hábitos, y que un enfoque en la construcción de buenos hábitos puede tener un gran
        impacto en nuestra vida diaria.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        El libro propone una estrategia de cuatro pasos para construir buenos hábitos: señal,
        anhelo, respuesta y recompensa.
      </TextBodyOne>
      <HeadlineThree>1. Hacerlo obvio</HeadlineThree>
      <br />
      <TextBodyOne>
        Los hábitos moldean nuestra identidad y se vuelven automáticos con el tiempo. Ver nuestro
        celular cuando estamos aburridos o disculparnos cada vez que hacemos una pregunta son
        ejemplos de hábitos que se vuelven instintivos. Nuestro cerebro aprende señales y actúa de
        forma no consciente. Si queremos comenzar un nuevo hábito, es importante establecer una
        señal o una rutina que nos haga más conscientes. Por ejemplo, si nos sentamos en la mesa
        donde siempre comemos, es más probable que sintamos hambre. Si hacemos nuestros hábitos de
        forma inconsciente, las cosas se vuelven más fáciles. También es útil registrar nuestros
        hábitos para ser más conscientes de nuestros malos hábitos y poder trabajar en ellos. Es
        importante especificar la hora y el lugar para comenzar un hábito, ya que estamos creando un
        ambiente y una señal que nos ayuda a recordar nuestra intención. Podemos crear un "stack" de
        hábitos, por ejemplo, después de hacer ejercicio, meditar, y después de meditar, tomar una
        ducha fría.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        El ambiente también juega un papel importante en la creación de hábitos, ya que muchas veces
        hacemos cosas simplemente porque son accesibles o fáciles de adquirir. Por ejemplo, si no
        tenemos un libro en la mano, es menos probable que comencemos a leer. Es importante ser un
        diseñador de nuestro mundo y no solo un consumidor dentro de él.
      </TextBodyOne>
      <HeadlineThree>2. Hacerlo atractivo</HeadlineThree>
      <br />
      <TextBodyOne>
        Este tema es bastante complejo, pero trataré de resumirlo de la manera más simple posible.
        La dopamina es el neurotransmisor que nos motiva a hacer las cosas que deseamos y está
        asociado con la sensación de placer. Cuando pensamos en algo que queremos, como una galleta,
        liberamos dopamina, lo que nos hace sentir bien y nos motiva a ir por ella. Si la galleta es
        deliciosa, liberamos aún más dopamina, lo que refuerza la conducta de buscarla de nuevo.
        Esto se aplica a muchas cosas, como ver videos, jugar videojuegos, comer comida chatarra.
        Todas estas actividades tienen en común que no requieren mucho esfuerzo. Por otro lado,
        desarrollar nuevas habilidades o hacer ejercicio puede ser todo lo contrario. Una forma de
        abordar esto es utilizando la fórmula "DESPUÉS DE [HABITO ACTUAL], yo hare [HABITO QUE
        NECESITO]", lo que nos ayudará a motivarnos y crear nuevos hábitos. En general, nuestras
        motivaciones suelen ser por estas razones:
      </TextBodyOne>
      <TextListBoxDesorder>
        <TextList>Conservar la energía.</TextList>
        <TextList>Obtener comida y agua.</TextList>
        <TextList>Encontrar el amor y reproducirse.</TextList>
        <TextList>Conectarse y crear vínculos emocionales con otras personas. </TextList>
        <TextList>Ganar aceptación social y aprobación.</TextList>
        <TextList>Reducir la incertidumbre.</TextList>
        <TextList>Alcanzar un estatus alto y prestigio.</TextList>
      </TextListBoxDesorder>
      <TextBodyOne>
        Este es un ejemplo de cómo se pueden hackear las motivaciones básicas del ser humano:
      </TextBodyOne>
      <TextListBoxDesorder>
        <TextList>Obtener comida y agua. = Comida chatarra</TextList>
        <TextList>Encontrar el amor y reproducirse. = Ver videos +18</TextList>
        <TextList>
          Conectarse y crear vínculos emocionales con otras personas. = Navegar por Facebook
        </TextList>
        <TextList>
          Ganar aceptación social y aprobación = Publicar una foto en una red social
        </TextList>
        <TextList>Reducir la incertidumbre = Buscar información en Google</TextList>
        <TextList>Alcanzar un estatus alto y prestigio = Jugar videojuegos</TextList>
      </TextListBoxDesorder>
      <TextBodyOne>
        Todas estas actividades pueden liberar grandes cantidades de dopamina, lo que las convierte
        en estímulos supernormales que nos impulsan a repetirlas. Sin embargo, estos hábitos son
        fáciles de adquirir, mientras que los buenos hábitos parecen ser más difíciles de mantener.
        Una posible solución es enfatizar los beneficios a largo plazo de los buenos hábitos y
        asociarlos con sentimientos positivos. De esta manera, los buenos hábitos pueden volverse
        más atractivos y motivarnos a mantenerlos.
      </TextBodyOne>
      <br />
      <TextBodyOne>Investigando un poco más fondo encontré este video:</TextBodyOne>
      <br />
      <Frame>
        <VideoiFrame
          width='560'
          height='315'
          src='https://www.youtube.com/embed/CyA1yKN2534'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></VideoiFrame>
      </Frame>
      <br />
      <br />
      <HeadlineThree>3. Hacerlo sencillo</HeadlineThree>
      <br />
      <TextBodyOne>
        Bueno, en mi opinión, el título del texto sugiere de qué se tratará el tema. A los humanos
        nos gusta conservar energía, por lo que, si queremos desarrollar un hábito, debemos hacer
        que dure poco tiempo al principio. Una vez que se vuelva automático, podemos aumentar
        gradualmente la duración. Si un hábito es fácil de desarrollar, es más probable que lo
        repitamos. Para evitar que un mal hábito se repita, es importante hacer que sea
        completamente imposible de realizar. Además, tomar acción es mejor que solo planear. Al
        tomar acción, existe el riesgo de fracasar, pero al fracasar aprendemos, y cuanto más
        aprendemos, mejor nos volvemos en nuestras acciones.
      </TextBodyOne>
      <HeadlineThree>4. Hacerlo satisfactorio</HeadlineThree>
      <br />
      <TextBodyOne>
        Nos gusta la gratificación instantánea y tener placer sin esfuerzo. Por lo tanto, cuando
        termines un hábito, asegúrate de que sea satisfactorio y que te sientas exitoso. También es
        útil llevar un registro de tus hábitos, ya que esto te da una sensación de progreso y el
        progreso nos hace felices. Es normal si no puedes cumplir tu hábito en ocasiones, puede que
        estés enfermo o que suceda alguna circunstancia inesperada. Sin embargo, no permitas que
        esto se repita más de dos veces.
      </TextBodyOne>
      <HeadlineThree>Opinión</HeadlineThree>
      <br />
      <TextBodyOne>
        He tratado de resumirlo lo mejor posible, aunque no he resumido todos los capítulos. Este es
        uno de mis libros favoritos y realmente deberían considerar leerlo. Eso es todo por ahora,
        ¡nos vemos en el próximo blog!
      </TextBodyOne>
    </>
  )
}
