// components
import Footer from "../Footer";
import Global from "../Global";
import Navegator from "../Navegator";

// interface
import { InterfaceApp } from "../../interface/interface";

export default function Blog({ handleChange }: InterfaceApp) {
  return (
    <>
      <Navegator activeSection={4} handleChange={handleChange} />
      {/* <Footer /> */}
      <Global />
    </>
  );
}
