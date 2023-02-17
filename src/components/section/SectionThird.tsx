// hook
import { useContext, useEffect, useState } from "react";

//styles
import {
  BoxGrid,
  SectionThirdStylesTheme,
  SubtitleOne,
  TextButtonStroke,
  TitleBox,
} from "../../styles/section_third";

// context
import FetchContext from "../../context/dataContext";
import ProjectsComponent from "./third/ProjectsComponent";
import ThemeContext from "../../context/themeContext";
import IconProjects from "../images/IconProjects";

export default function SectionThird() {
  const dataContext = useContext(FetchContext);
  const themeContext = useContext(ThemeContext);

  const [offset, setOffset] = useState(6);
  const [thereProjects, setThereProjects] = useState(true);

  useEffect(() => {
    const numberProjects = dataContext.language_dynamic.portfolio.length;
    console.log(offset, numberProjects);
    console.log(offset >= numberProjects);
    if (offset >= numberProjects) {
      setOffset(offset);
      setThereProjects(false);
    } else {
      setThereProjects(true);
    }
  }, [offset, dataContext.language_dynamic.portfolio.length]);

  return (
    <FetchContext.Provider value={dataContext}>
      <ThemeContext.Provider value={themeContext}>
        <SectionThirdStylesTheme className={themeContext.theme}>
          <TitleBox>
            <IconProjects />
            <SubtitleOne>
              {dataContext.language_static.section_third.headline}
            </SubtitleOne>
          </TitleBox>
          <BoxGrid>
            {dataContext.language_dynamic.portfolio
              .slice(0, offset)
              .map((item) => (
                <ProjectsComponent data={item} key={item.id} />
              ))}
          </BoxGrid>
          {thereProjects && (
            <TextButtonStroke onClick={() => setOffset(offset + 6)}>
              {dataContext.language_static.section_third.button}
            </TextButtonStroke>
          )}
        </SectionThirdStylesTheme>
      </ThemeContext.Provider>
    </FetchContext.Provider>
  );
}
