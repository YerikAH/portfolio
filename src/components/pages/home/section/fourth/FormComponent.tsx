// react
import { useContext, useState } from 'react'

// styles
import * as style from '../../../../../styles/home/section_fourth'

// context
import DataContext from '../../../../../context/dataContext'

// images
import Send from '../../../../../assets/icon/icon-send.svg'
import { FORM_INITIAL_STATE, FORM_VERIFY } from '../../../../../constant/appInitialState'

// enum
import { Language, OptionsForm } from '../../../../../enum/LanguageEnum'

// helpers
import { verifyEmail, verifyMessage, verifyName } from '../../../../../helpers/verifyForm'

// const
import {
  ERROR_EMAIL_EN,
  ERROR_EMAIL_ES,
  ERROR_MESSAGE_EN,
  ERROR_MESSAGE_ES,
  ERROR_NAME_EN,
  ERROR_NAME_ES,
} from '../../../../../constant/TextInit'

export default function FormComponent() {
  const dataContext = useContext(DataContext)
  const [form, setForm] = useState(FORM_INITIAL_STATE)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorForm, setErrorForm] = useState(FORM_VERIFY)

  function languageErrorSwitch(messageEn: string, messageEs: string) {
    if (dataContext.language_current === Language.es) {
      setErrorMessage(messageEs)
    } else {
      setErrorMessage(messageEn)
    }
  }

  function verifyText(name: string, value: string) {
    if (name === OptionsForm.name) {
      setErrorForm({
        ...errorForm,
        name: verifyName(value),
      })
      languageErrorSwitch(ERROR_NAME_EN, ERROR_NAME_ES)
    } else if (name === OptionsForm.email) {
      setErrorForm({
        ...errorForm,
        email: verifyEmail(value),
      })
      languageErrorSwitch(ERROR_EMAIL_EN, ERROR_EMAIL_ES)
    } else if (name === OptionsForm.message) {
      setErrorForm({
        ...errorForm,
        message: verifyMessage(value),
      })
      languageErrorSwitch(ERROR_MESSAGE_EN, ERROR_MESSAGE_ES)
    }
  }

  function handleForm(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    verifyText(e.target.name, e.target.value)
  }

  return (
    <DataContext.Provider value={dataContext}>
      <style.FormStyles>
        <style.LabelStyles htmlFor={OptionsForm.name}>
          {dataContext.language_static.section_four.label_one}
        </style.LabelStyles>
        <style.InputStyles
          id={OptionsForm.name}
          name={OptionsForm.name}
          onChange={(e) => handleForm(e)}
        />
        <style.LabelStyles htmlFor={OptionsForm.email}>
          {dataContext.language_static.section_four.label_two}
        </style.LabelStyles>
        <style.InputStyles
          id={OptionsForm.email}
          name={OptionsForm.email}
          onChange={(e) => handleForm(e)}
        />
        <style.LabelStyles htmlFor={OptionsForm.message}>
          {dataContext.language_static.section_four.label_three}
        </style.LabelStyles>
        <style.TextAreaStyles
          id={OptionsForm.message}
          name={OptionsForm.message}
          onChange={(e) => handleForm(e)}
        />
        {!errorForm.name || !errorForm.email || !errorForm.message ? (
          <style.ErrorStyles>{errorMessage}</style.ErrorStyles>
        ) : (
          <></>
        )}
        <style.ButtonSubmit
          type='submit'
          aria-label='send message'
          disabled={!errorForm.name || !errorForm.email || !errorForm.message}
        >
          <style.ButtonIcon src={Send} />
          {dataContext.language_static.section_four.button}
        </style.ButtonSubmit>
      </style.FormStyles>
    </DataContext.Provider>
  )
}
