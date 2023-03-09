import { useContext } from 'react'
import DataContext from '../../../../context/dataContext'
import ThemeContext from '../../../../context/themeContext'
import { Language } from '../../../../enum/LanguageEnum'
import {
  BoxContentTheme,
  TitleBox,
  ListTile,
  ContainerRow,
  ImageRow,
  SubtitleRow,
} from '../../../../styles/blog/card_last'
import { BLOG_TITLE_UI, BLOG_TITLE_UI_EN } from '../../../../constant/TextInit'
const data = [
  {
    id: '/blog/2',
    name_es: 'Hábitos Atómicos: Un libro para transformar tu vida y ser más productivo',
    name_en: 'Atomic Habits: A book to transform your life and be more productive',
    image: 'https://blog.davidtorne.com/wp-content/uploads/2020/04/habits-atomics.jpg',
  },
  {
    id: '/blog/1',
    name_es: 'Mi experiencia aprendiendo programación durante 8 meses: lecciones y consejos',
    name_en: 'My experience learning programming for 8 months: lessons and tips',
    image: 'https://s1.1zoom.me/big0/212/356623-admin.jpg',
  },
]

export default function CardLast() {
  const themeContext = useContext(ThemeContext)
  const dataContext = useContext(DataContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <DataContext.Provider value={dataContext}>
        <BoxContentTheme className={themeContext.theme}>
          {dataContext.language_current === Language.es ? (
            <TitleBox>{BLOG_TITLE_UI}</TitleBox>
          ) : (
            <TitleBox>{BLOG_TITLE_UI_EN}</TitleBox>
          )}
          <ListTile>
            {data.map((item) => (
              <ContainerRow key={item.id} to={item.id}>
                <ImageRow src={item.image} alt='image blog' />
                {dataContext.language_current === Language.es ? (
                  <SubtitleRow>{item.name_es}</SubtitleRow>
                ) : (
                  <SubtitleRow>{item.name_en}</SubtitleRow>
                )}
              </ContainerRow>
            ))}
          </ListTile>
        </BoxContentTheme>
      </DataContext.Provider>
    </ThemeContext.Provider>
  )
}
