export interface InterfaceNavScroll {
  activeSection: number;
}
export interface InterfaceMainScroll {
  sectionRefs: React.RefObject<HTMLDivElement>[];
}
export interface InterfaceSectionScroll {
  sectionRef: React.RefObject<HTMLDivElement>;
}
