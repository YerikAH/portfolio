// hook
import { useContext, useEffect, useState } from "react";

//styles
import {
  BoxGrid,
  IconImage,
  SectionThirdStyles,
  SubtitleOne,
  TextButtonStroke,
  TitleBox,
} from "../../styles/section_third";

// images
import portfolioIcon from "../../assets/icon/icon-job.svg";

// context
import FetchContext from "../../context/dataContext";
import ProjectsComponent from "./third/ProjectsComponent";

export default function SectionThird() {
  const dataContext = useContext(FetchContext);
  const [offset, setOffset] = useState(6);
  const [thereProjects, setThereProjects] = useState(true);


  useEffect(() => {
    const numberProjects = dataContext.language_dynamic.portfolio.length
    console.log(offset, numberProjects)
    console.log(offset >= numberProjects)
    if (offset >= numberProjects) {
      setOffset(offset);
      setThereProjects(false)
    } else {
      setThereProjects(true)
    }
  }, [offset, dataContext.language_dynamic.portfolio.length])
  
  return (
    <FetchContext.Provider value={dataContext}>
      <SectionThirdStyles>
        <TitleBox>
          <IconImage src={portfolioIcon} />
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
          <TextButtonStroke onClick={()=> setOffset(offset + 6)}>
            {dataContext.language_static.section_third.button}
          </TextButtonStroke>
        )}
      </SectionThirdStyles>
    </FetchContext.Provider>
  );
}
