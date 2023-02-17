// react
import { useContext, useEffect, useState } from "react";

// styles
import {
  ButtonIcon,
  ButtonSubmit,
  ErrorStyles,
  FormStyles,
  InputStyles,
  LabelStyles,
  TextAreaStyles,
} from "../../../styles/section_fourth";

// context
import FetchContext from "../../../context/dataContext";

// images
import Send from "../../../assets/icon/icon-send.svg";
import {
  FORM_INITIAL_STATE,
  FORM_VERIFY,
} from "../../../constant/appInitialState";

// enum
import { Language, OptionsForm } from "../../../enum/LanguageEnum";

// helpers
import {
  verifyEmail,
  verifyMessage,
  verifyName,
} from "../../../helpers/verifyForm";

// const
import {
  ERROR_EMAIL_EN,
  ERROR_EMAIL_ES,
  ERROR_MESSAGE_EN,
  ERROR_MESSAGE_ES,
  ERROR_NAME_EN,
  ERROR_NAME_ES,
} from "../../../constant/TextInit";


export default function FormComponent() {
  const dataContext = useContext(FetchContext);
  const [form, setForm] = useState(FORM_INITIAL_STATE);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorForm, setErrorForm] = useState(FORM_VERIFY);
  

  function languageErrorSwitch(messageEn: string, messageEs: string) {
    if (dataContext.language_current === Language.es) {
      setErrorMessage(messageEs);
    } else {
      setErrorMessage(messageEn);
    }
  }

  function verifyText(name: string, value: string) {
    if (name === OptionsForm.name) {
      setErrorForm({
        ...errorForm,
        name: verifyName(value),
      });
      languageErrorSwitch(ERROR_NAME_EN, ERROR_NAME_ES);
    } else if (name === OptionsForm.email) {
      setErrorForm({
        ...errorForm,
        email: verifyEmail(value),
      });
      languageErrorSwitch(ERROR_EMAIL_EN, ERROR_EMAIL_ES);
    } else if (name === OptionsForm.message) {
      setErrorForm({
        ...errorForm,
        message: verifyMessage(value),
      });
      languageErrorSwitch(ERROR_MESSAGE_EN, ERROR_MESSAGE_ES);
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


  return (
    <FetchContext.Provider value={dataContext}>
      <FormStyles>
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
        {!errorForm.name || !errorForm.email || !errorForm.message ? (
          <ErrorStyles>{errorMessage}</ErrorStyles>
        ) : (
          <></>
        )}
        <ButtonSubmit type="submit" aria-label="send message" disabled={!errorForm.name || !errorForm.email || !errorForm.message}>
          <ButtonIcon src={Send} />
          {dataContext.language_static.section_four.button}
        </ButtonSubmit>
      </FormStyles>
    </FetchContext.Provider>
  );
}
