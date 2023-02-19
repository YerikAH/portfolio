export interface InterfaceNavScroll {
  activeSection: number;
  scrollToSection?: (index: number) => void
}
export interface InterfaceMainScroll {
  sectionRefs: React.RefObject<HTMLDivElement>[];
}
export interface InterfaceSectionScroll {
  sectionRef: React.RefObject<HTMLDivElement>;
}
