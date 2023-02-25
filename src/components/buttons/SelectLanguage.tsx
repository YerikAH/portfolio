import {
  ButtonLanguage,
  ImageLanguage,
  SelectLanguageBox,
  Separator,
} from '../../styles/home/select_language'

// images
import flagEs from '../../assets/static/es.png'
import flagEn from '../../assets/static/en.png'
import { LanguageOptionsProps } from '../../interface/props'
import { useEffect, useState } from 'react'
import { LanguageOptionsStyles } from '../../interface/styles'
import { MODAL_RESUME_INIT } from '../../constant/stylesInitialState'

export default function SelectLanguage({ languageOptions, sectionFirst }: LanguageOptionsProps) {
  const [stylesBitModal, setStylesBitModal] = useState<LanguageOptionsStyles>(MODAL_RESUME_INIT)

  useEffect(() => {
    const stylesModal: LanguageOptionsStyles = {
      opacity: '0',
      visibility: 'hidden',
    }
    if (languageOptions) {
      stylesModal.opacity = '1'
      stylesModal.visibility = 'visible'
    }
    setStylesBitModal(stylesModal)
  }, [languageOptions])

  return (
    <SelectLanguageBox style={stylesBitModal}>
      <ButtonLanguage>
        <ImageLanguage src={flagEn} />
        {sectionFirst.button_en_cv}
      </ButtonLanguage>
      <Separator />
      <ButtonLanguage>
        <ImageLanguage src={flagEs} />
        {sectionFirst.button_es_cv}
      </ButtonLanguage>
    </SelectLanguageBox>
  )
}
