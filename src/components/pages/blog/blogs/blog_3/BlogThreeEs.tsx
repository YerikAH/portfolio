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
  WithLine,
} from '../../../../../styles/blog/blog_read'
import WhoPublished from '../../ui/WhoPublished'

export default function BlogThreeEs({ blogI }: BlogTwo) {
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
      <br />
      <HeadlineThree>1. Deficit calorico</HeadlineThree>
      <TextBodyOne>
        Cada alimento tiene calorías, excepto el agua. El ser humano necesita calorías para
        sobrevivir. Puedes pensar en ello de esta manera: imagina que eres un automóvil y necesitas
        gasolina para funcionar, al igual que un ser humano necesita calorías. Sin embargo, a
        diferencia de los neumáticos de un automóvil, los seres humanos tienen un límite de
        calorías. Si consumimos más calorías de las que necesitamos, las almacenaremos como grasa.
        Por otro lado, si comemos menos calorías de las que necesitamos, quemaremos grasa.
        <br />
        <br />
        Es importante entender que si comemos la cantidad adecuada de calorías, no subiremos ni
        bajaremos de peso. Entonces, sí, es posible bajar de peso incluso si consumes hamburguesas y
        chocolates, siempre y cuando conozcas las calorías que contienen y las incluyas dentro de tu
        ingesta diaria. Para calcular la cantidad de calorías que necesitas, puedes utilizar algunas
        calculadoras disponibles en línea. Es importante destacar que necesitarás una balanza de
        alimentos para medir las porciones con precisión. Creo que si hubiera tenido una antes y
        hubiera contado todas las calorías, mi proceso habría sido más rápido.
      </TextBodyOne>
      <br />
      <br />
      <HeadlineThree>2. Hacerlo fácil</HeadlineThree>
      <TextBodyOne>
        Sin duda, recuerdo que antes me resultaba difícil bajar de peso y fallaba en muchas
        ocasiones. Comía más calorías de las que necesitaba y constantemente sentía hambre, al menos
        eso pensaba. Cada vez que salía de mi habitación, terminaba picando algo en la cocina.
        Además, si tenía chocolates en casa, era demasiado fácil caer en la tentación y comerlos.
        Curiosamente, después de darme cuenta de que había "fallado", parecía que mi apetito
        aumentaba aún más. <br />
        <br /> Un día, tras una falla increíble, me dije a mí mismo: "Dios, ¿qué demonios estoy
        haciendo?". Fue en ese momento que decidí desechar la comida, aunque ahora reconozco que esa
        no era la forma adecuada de abordarlo. Al día siguiente, después de perder la motivación,
        salí de mi habitación y, para mi sorpresa, no me distraje con la comida. Me enfoqué en hacer
        lo que tenía que hacer fuera de mi cuarto y luego volví a mi espacio. No me puse a pensar en
        comida simplemente porque no veía ningún alimento a mi alcance. Si deseaba comer, requería
        esfuerzo, y el ser humano generalmente evita el esfuerzo debido a que implica gastar
        energía. Nuestro instinto nos dice: "necesitamos ahorrar energía". El punto no es desechar
        la comida, sino hacerla menos accesible. Permíteme darte un pequeño ejemplo: si te gustan
        las nueces, colócalas en un lugar alto que no esté en la cocina, en un lugar distante. De
        esta manera, pensarás dos veces antes de ir a buscar esas nueces que tanto deseas. <br />{' '}
        <br /> Además, quiero resaltar otro punto importante, si quieres comer mas saludable: hacer
        menos accesible la comida poco saludable, y hacer accesible la comida saludable. En lugar de
        comprar comida basura, opta por alimentos de buena calidad y tenlos disponibles en casa.
        Esto significa cambiar tus hábitos de compra y llenar tu despensa con opciones más
        nutritivas. Al tener alimentos saludables fácilmente accesibles, te resultará más sencillo
        hacer elecciones inteligentes y evitar caer en la tentación de la comida poco saludable.
        Aunque pueda parecer algo insignificante, créeme que este cambio puede marcar una gran
        diferencia en tu estilo de vida y en tus metas de pérdida de peso.
      </TextBodyOne>
      <br />
      <br />
      <HeadlineThree>3. Tomar agua</HeadlineThree>
      <TextBodyOne>
        Recuerdo que solía beber mucha agua y creía que eso me ayudaba a perder peso. En realidad,
        creo que bajaba de peso no por beber agua directamente, sino porque me sentía lleno. Al
        estar bien hidratado, mi sensación de hambre disminuía. Por lo tanto, la próxima vez que
        comía, me resultaba mucho más fácil comer menos, ya que me sentía satisfecho con porciones
        más pequeñas. <br /> <br /> Por cierto, investigué un poco y descubrí que esta estrategia es
        similar a la que algunos anoréxicos utilizan. Quiero aclarar que no estoy diciendo que sea
        correcto ser anoréxico, simplemente encontré curioso ese dato. Es importante tener en cuenta
        que no se trata de beber agua en exceso, sino de consumir la cantidad necesaria.
        <br />
        <br />
        Me gustó esta frase:
      </TextBodyOne>
      <br />
      <br />
      <WithLine>
        "La dosis hace al veneno" (Sola dosis facit venenum) - Paracelso. En pocas palabras, el
        límite entre el antídoto y el veneno radica en la cantidad que se consume.
      </WithLine>
    </>
  )
}
