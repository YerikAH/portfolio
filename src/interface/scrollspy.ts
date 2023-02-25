import { Sections } from '../enum/LanguageEnum'

export interface InterfaceNavScroll {
  activeSection: number
  handleChange?(section: Sections): void
}
export interface InterfaceMainScroll {
  sectionRefs: React.RefObject<HTMLDivElement>[]
}
export interface InterfaceSectionScroll {
  sectionRef: React.RefObject<HTMLDivElement>
}
