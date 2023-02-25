import { useContext } from 'react'
// styles
import * as style from '../../../../styles/home/section_fourth'
// images
import Contact from '../../../../assets/icon/icon-phone.svg'
import FetchContext from '../../../../context/dataContext'
import ListTile from './fourth/ListTile'
import FormComponent from './fourth/FormComponent'
import { InterfaceSectionScroll } from '../../../../interface/scrollspy'

export default function SectionFourth({ sectionRef }: InterfaceSectionScroll) {
  const dataContext = useContext(FetchContext)

  return (
    <FetchContext.Provider value={dataContext}>
      <style.SectionFourthStyles ref={sectionRef} id='contact'>
        <style.BoxGridFather>
          <style.TitleBox>
            <style.IconImage src={Contact} />
            <style.SubtitleOne>
              {dataContext.language_static.section_four.headline}
            </style.SubtitleOne>
            <style.TextBodyOne>{dataContext.language_static.section_four.text}</style.TextBodyOne>
          </style.TitleBox>
          <style.BoxGrid>
            <style.BoxGridOne>
              <FormComponent />
            </style.BoxGridOne>
            <style.BoxGridTwo>
              {dataContext.social_media.map((item, i) => (
                <ListTile key={i} data={item} />
              ))}
            </style.BoxGridTwo>
          </style.BoxGrid>
        </style.BoxGridFather>
      </style.SectionFourthStyles>
    </FetchContext.Provider>
  )
}
