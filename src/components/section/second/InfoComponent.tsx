// hook
import { useContext } from "react";

// styles
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  CircleAvatar,
  TextBodyOne,
} from "../../../styles/section_second";

// context
import FetchContext from "../../../context/dataContext";

export default function InfoComponent() {
  const dataContext = useContext(FetchContext);
  return (
    <BoxGrid>
      <BoxGridOne>
        <TextBodyOne>{dataContext.language_dynamic.description}</TextBodyOne>
      </BoxGridOne>
      <BoxGridTwo>
        <CircleAvatar src={dataContext.photo} alt="harvey photo" />
      </BoxGridTwo>
    </BoxGrid>
  );
}
