import {
  BoxContent,
  TitleBox,
  ListTile,
  ContainerRow,
  ImageRow,
  SubtitleRow,
} from '../../../../styles/blog/card_last'

const data = [
  {
    id: 1,
    name: 'Hábitos Atómicos: Un libro para transformar tu vida y ser más productivo',
    image: '',
  },
  {
    id: 2,
    name: 'Mi experiencia aprendiendo programación durante 8 meses: lecciones y consejos',
    image: '',
  },
  {
    id: 3,
    name: 'Ejercicios de programación para mejorar tus habilidades y competencias',
    image: '',
  },
]

export default function CardLast() {
  return (
    <BoxContent>
      <TitleBox>Últimos blogs</TitleBox>
      <ListTile>
        {data.map((item) => (
          <ContainerRow key={item.id}>
            <ImageRow />
            <SubtitleRow>{item.name}</SubtitleRow>
          </ContainerRow>
        ))}
      </ListTile>
    </BoxContent>
  )
}
