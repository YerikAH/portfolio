import { useContext } from 'react'
import ThemeContext from '../../../../context/themeContext'
import {
  BoxContentTheme,
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
    image: 'https://blog.davidtorne.com/wp-content/uploads/2020/04/habits-atomics.jpg',
  },
  {
    id: 2,
    name: 'Mi experiencia aprendiendo programación durante 8 meses: lecciones y consejos',
    image: 'https://s1.1zoom.me/big0/212/356623-admin.jpg',
  },
  {
    id: 3,
    name: 'Ejercicios de programación para mejorar tus habilidades y competencias',
    image: 'https://e.rpp-noticias.io/medium/2022/03/04/portada_354235.jpg',
  },
]

export default function CardLast() {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <BoxContentTheme className={themeContext.theme}>
        <TitleBox>Últimos blogs</TitleBox>
        <ListTile>
          {data.map((item) => (
            <ContainerRow key={item.id}>
              <ImageRow src={item.image} />
              <SubtitleRow>{item.name}</SubtitleRow>
            </ContainerRow>
          ))}
        </ListTile>
      </BoxContentTheme>
    </ThemeContext.Provider>
  )
}
