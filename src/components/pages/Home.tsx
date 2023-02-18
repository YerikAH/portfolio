// components
import { useRef } from "react";
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
    }) ?? 0;

  return (
    <>
      <Navegator activeSection={activeSection} />
      <Main sectionRefs={sectionRefs} />
      <Footer />
      <Global />
    </>
  );
}
