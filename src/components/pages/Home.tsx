// components
import { useEffect, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

// enum and interface
import { Sections } from "../../enum/LanguageEnum";
import { InterfaceApp } from "../../interface/interface";

// components
import Footer from "../Footer";
import Global from "../Global";
import Main from "../Main";
import Navegator from "../Navegator";

export default function Home({ section }: InterfaceApp) {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const activeSection: number =
    useScrollSpy({
      sectionElementRefs: sectionRefs,
      offsetPx: -150,
    }) ?? 5;

  const scrollToSection = (index: number) => {
    sectionRefs[index].current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (section === Sections.home) {
      scrollToSection(0);
    } else if (section === Sections.about) {
      scrollToSection(1);
    } else if (section === Sections.projects) {
      scrollToSection(2);
    } else if (section === Sections.contact) {
      scrollToSection(3);
    }
  }, [section]);

  return (
    <>
      <Navegator activeSection={activeSection} />
      <Main sectionRefs={sectionRefs} />
      <Footer />
      <Global />
    </>
  );
}
