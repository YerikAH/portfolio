import { MainStyles } from "../styles/main_styles";
import SectionFirst from "./section/SectionFirst";
import SectionFourth from "./section/SectionFourth";
import SectionSecond from "./section/SectionSecond";
import SectionThird from "./section/SectionThird";

function Main() {
  return (
    <MainStyles>
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
    </MainStyles>
  );
}

export default Main;
