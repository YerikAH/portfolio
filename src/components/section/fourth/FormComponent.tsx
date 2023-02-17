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
import { FORM_INITIAL_STATE, FORM_VERIFY } from "../../../constant/appInitialState";

import { OptionsForm } from "../../../enum/LanguageEnum";
import {
  verifyEmail,
  verifyMessage,
  verifyName,
} from "../../../helpers/verifyForm";
export default function FormComponent() {
  const dataContext = useContext(FetchContext);
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [errorMessage, setErrorMessage] = useState("")
  const [errorForm, setErrorForm] = useState(FORM_VERIFY);

  function verifyText(name: string, value: string) {
    if (name === OptionsForm.name) {
      setErrorForm({
        ...errorForm,
        name: verifyName(value),
      });
    } else if (name === OptionsForm.email) {
      setErrorForm({
        ...errorForm,
        email: verifyEmail(value),
      });
    } else if (name === OptionsForm.message) {
      setErrorForm({
        ...errorForm,
        message: verifyMessage(value),
      });
    }
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
    verifyText(e.target.name, e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (errorForm.email && errorForm.name && errorForm.message) {
      console.log(form);
    }
  }
  return (
    <FetchContext.Provider value={dataContext}>
      <FormStyles onSubmit={(e) => handleSubmit(e)}>
        <LabelStyles htmlFor={OptionsForm.name}>
          {dataContext.language_static.section_four.label_one}
        </LabelStyles>
        <InputStyles
          id={OptionsForm.name}
          name={OptionsForm.name}
          onChange={(e) => handleForm(e)}
        />
        <LabelStyles htmlFor={OptionsForm.email}>
          {dataContext.language_static.section_four.label_two}
        </LabelStyles>
        <InputStyles
          id={OptionsForm.email}
          name={OptionsForm.email}
          onChange={(e) => handleForm(e)}
        />
        <LabelStyles htmlFor={OptionsForm.message}>
          {dataContext.language_static.section_four.label_three}
        </LabelStyles>
        <TextAreaStyles
          id={OptionsForm.message}
          name={OptionsForm.message}
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
