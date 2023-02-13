// styles
import {
  BoxGrid,
  BoxGridOne,
  BoxGridTwo,
  CircleAvatar,
  TextBodyOne,
} from "../../../styles/section_second";
import FetchContext from "../../../context/dataContext";
import { useContext } from "react";
export default function InfoComponent() {
  const dataContext = useContext(FetchContext);

  return (
    <BoxGrid>
      <BoxGridOne>
        <TextBodyOne>{dataContext.language_dynamic.description}</TextBodyOne>
      </BoxGridOne>
      <BoxGridTwo>
        <CircleAvatar src={dataContext.photo} />
      </BoxGridTwo>
    </BoxGrid>
  );
}
