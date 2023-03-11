import GithubComponent from '../../../images/GithubComponent'
import LinkComponent from '../../../images/LinkComponent'
import * as style from '../../../../styles/home/project_page_style'
import { Language } from '../../../../enum/LanguageEnum'
import {
  TITLE_LINK_EN,
  TITLE_LINK_ES,
  TITLE_TECH_EN,
  TITLE_TECH_ES,
} from '../../../../constant/TextInit'
import { PROJECT_LOCALSTORAGE } from '../../../../constant/localStorageName'
import { useState, useEffect } from 'react'
import { ProjectProps } from '../../../../interface/props'
export default function ProjectInfo({ data_porfolio, lang, staticprop }: ProjectProps) {
  const [numberIndex, setNumberIndex] = useState(0)

  useEffect(() => {
    const dataSave = localStorage.getItem(PROJECT_LOCALSTORAGE)
    if (typeof dataSave === 'string') {
      const numberSave = JSON.parse(dataSave) - 1
      setNumberIndex(numberSave)
    } else {
      setNumberIndex(0)
    }
  }, [])
  return (
    <style.SectionProject>
      <style.BoxGridOne>
        <style.ImageResponsive>
          <style.ImageProject src={data_porfolio[numberIndex]?.image_path} />
        </style.ImageResponsive>
      </style.BoxGridOne>
      <style.BoxGridTwo>
        <style.HeadlinePrincipal>{data_porfolio[numberIndex]?.name}</style.HeadlinePrincipal>
        <style.TextBodyOne>{data_porfolio[numberIndex]?.description}</style.TextBodyOne>
        <style.HeadLineTwo>
          {' '}
          {lang === Language.es ? TITLE_TECH_ES : TITLE_TECH_EN}
        </style.HeadLineTwo>
        <style.ListLabelSkills>
          {data_porfolio[numberIndex]?.lang.map((item) => (
            <style.ListLabel key={item}>{item}</style.ListLabel>
          ))}
        </style.ListLabelSkills>
        <style.HeadLineTwo>
          {lang === Language.es ? TITLE_LINK_ES : TITLE_LINK_EN}
        </style.HeadLineTwo>
        <style.BoxButtons>
          <style.ButtonClasic href={data_porfolio[numberIndex]?.link_code}>
            <GithubComponent />
            {staticprop.section_third.code}
          </style.ButtonClasic>
          <style.ButtonClasic href={data_porfolio[numberIndex]?.link_preview}>
            <LinkComponent />
            {staticprop.section_third.preview}
          </style.ButtonClasic>
        </style.BoxButtons>
      </style.BoxGridTwo>
    </style.SectionProject>
  )
}
