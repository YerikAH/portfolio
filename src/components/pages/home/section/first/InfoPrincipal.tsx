// hook
import { useContext, useState } from 'react'

// styles
import {
  BoxButtons,
  ButtonBoxFill,
  HeadlinePrincipal,
  TextButtonFill,
  TextButtonStroke,
} from '../../../../../styles/home/section_first'

// context
import DataContext from '../../../../../context/dataContext'
import SelectLanguage from '../../../../buttons/SelectLanguage'

export default function InfoPrincipal() {
  const dataContext = useContext(DataContext)
  const [languageOptions, setLanguageOptions] = useState(false)

  function handleLanguage() {
    setLanguageOptions(languageOptions ? false : true)
  }

  return (
    <DataContext.Provider value={dataContext}>
      <HeadlinePrincipal>{dataContext.language_static.section_first.headline}</HeadlinePrincipal>
      <BoxButtons>
        <TextButtonStroke to='/certificate'>
          {dataContext.language_static.section_first.button_one}
        </TextButtonStroke>
        <ButtonBoxFill>
          <TextButtonFill onClick={handleLanguage}>
            {dataContext.language_static.section_first.button_two}
          </TextButtonFill>
          <SelectLanguage
            languageOptions={languageOptions}
            sectionFirst={dataContext.language_static.section_first}
          />
        </ButtonBoxFill>
      </BoxButtons>
    </DataContext.Provider>
  )
}
