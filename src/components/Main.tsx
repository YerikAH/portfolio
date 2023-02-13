import { MainStyles } from "../styles/main_styles";
import SectionFirst from "./section/SectionFirst";
import SectionSecond from "./section/SectionSecond";
import SectionThird from "./section/SectionThird";

function Main() {
  return (
    <MainStyles>
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
    </MainStyles>
  );
}

export default Main;
