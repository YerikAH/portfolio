// components
import Footer from "../global/Footer";
import Global from "../global/Global";
import Navegator from "../global/Navegator";

// interface
import { HomeBlogProps } from "../../interface/props";

export default function Blog({ handleChange }: HomeBlogProps) {
  return (
    <>
      <Navegator activeSection={4} handleChange={handleChange} />
      {/* <Footer /> */}
      <Global />
    </>
  );
}
