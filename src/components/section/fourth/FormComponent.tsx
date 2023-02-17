// react
import { useContext } from "react";

// styles
import {
  ButtonIcon,
  ButtonSubmit,
  FormStyles,
  InputStyles,
  LabelStyles,
  TextAreaStyles,
} from "../../../styles/section_fourth";

// context
import FetchContext from "../../../context/dataContext";

// images
import Send from "../../../assets/icon/icon-send.svg";

export default function FormComponent() {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <FormStyles>
        <LabelStyles htmlFor="name">
          {dataContext.language_static.section_four.label_one}
        </LabelStyles>
        <InputStyles id="name" name="name" />
        <LabelStyles htmlFor="email">
          {dataContext.language_static.section_four.label_two}
        </LabelStyles>
        <InputStyles id="email" name="email" />
        <LabelStyles>
          {dataContext.language_static.section_four.label_three}
        </LabelStyles>
        <TextAreaStyles />
        <ButtonSubmit type="submit">
          <ButtonIcon src={Send} />
          {dataContext.language_static.section_four.button}
        </ButtonSubmit>
      </FormStyles>
    </FetchContext.Provider>
  );
}
