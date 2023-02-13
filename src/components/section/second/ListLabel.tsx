import { LabelSkills, ListSkills } from "../../../styles/section_second";
import FetchContext from "../../../context/dataContext";
import { useContext } from "react";

export default function ListLabel() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <ListSkills>
        {dataContext.skills.map((item) => (
          <LabelSkills>{item}</LabelSkills>
        ))}
      </ListSkills>
    </FetchContext.Provider>
  );
}
