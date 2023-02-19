// components
import { useEffect, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";
import Footer from "../Footer";
import Global from "../Global";
import Main from "../Main";
import Navegator from "../Navegator";

export default function Home() {
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
  return (
    <>
      <Navegator activeSection={activeSection} scrollToSection={scrollToSection}/>
      <Main sectionRefs={sectionRefs} />
      <Footer />
      <Global />
    </>
  );
}
