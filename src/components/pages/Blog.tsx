// components
import Footer from "../Footer";
import Global from "../Global";
import Navegator from "../Navegator";

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
