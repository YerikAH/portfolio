// components
import { useEffect, useRef } from 'react'
import useScrollSpy from 'react-use-scrollspy'

// enum and interface
import { Sections } from '../../enum/LanguageEnum'
import { HomeBlogProps } from '../../interface/props'

// components
import Footer from '../global/Footer'
import Global from '../global/Global'
import Main from './home/Main'
import Navegator from '../global/Navegator'

export default function Home({ section }: HomeBlogProps) {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  const activeSection: number =
    useScrollSpy({
      sectionElementRefs: sectionRefs,
      offsetPx: -150,
    }) ?? 5

  const scrollToSection = (index: number) => {
    if(sectionRefs[index].current === null){
      sectionRefs[0].current?.scrollIntoView({ behavior: 'smooth' })
    }else{
      sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (section === Sections.home) {
      scrollToSection(0)
    } else if (section === Sections.about) {
      scrollToSection(1)
    } else if (section === Sections.projects) {
      scrollToSection(2)
    } else if (section === Sections.contact) {
      scrollToSection(3)
    }
  }, [section])

  return (
    <>
      <Navegator activeSection={activeSection} />
      <Main sectionRefs={sectionRefs} />
      <Footer />
      <Global />
    </>
  )
}
