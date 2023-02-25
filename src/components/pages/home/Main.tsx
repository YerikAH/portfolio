import { InterfaceMainScroll } from '../../../interface/scrollspy'
import { MainStyles } from '../../../styles/home/main_styles'
import SectionFirst from './section/SectionFirst'
import SectionFourth from './section/SectionFourth'
import SectionSecond from './section/SectionSecond'
import SectionThird from './section/SectionThird'

function Main({ sectionRefs }: InterfaceMainScroll) {
  return (
    <MainStyles>
      <SectionFirst sectionRef={sectionRefs[0]} />
      <SectionSecond sectionRef={sectionRefs[1]} />
      <SectionThird sectionRef={sectionRefs[2]} />
      <SectionFourth sectionRef={sectionRefs[3]} />
    </MainStyles>
  )
}

export default Main
