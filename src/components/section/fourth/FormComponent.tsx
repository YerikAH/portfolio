// react
import { useContext, useState } from "react";

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
import { FORM_INITIAL_STATE } from "../../../constant/appInitialState";

export default function FormComponent() {
  const dataContext = useContext(FetchContext);
  const [form, setForm] = useState(FORM_INITIAL_STATE);

  function VerifyText(name: string, value: string){
    

  }
  function handleForm(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <FetchContext.Provider value={dataContext}>
      <FormStyles onSubmit={(e) => handleSubmit(e)}>
        <LabelStyles htmlFor="name">
          {dataContext.language_static.section_four.label_one}
        </LabelStyles>
        <InputStyles id="name" name="name" onChange={(e) => handleForm(e)} />
        <LabelStyles htmlFor="email">
          {dataContext.language_static.section_four.label_two}
        </LabelStyles>
        <InputStyles id="email" name="email" onChange={(e) => handleForm(e)} />
        <LabelStyles htmlFor="message">
          {dataContext.language_static.section_four.label_three}
        </LabelStyles>
        <TextAreaStyles
          id="message"
          name="message"
          onChange={(e) => handleForm(e)}
        />
        <ButtonSubmit type="submit" aria-label="send message">
          <ButtonIcon src={Send} />
          {dataContext.language_static.section_four.button}
        </ButtonSubmit>
      </FormStyles>
    </FetchContext.Provider>
  );
}
