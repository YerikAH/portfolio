// react router
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BACK_EN, BACK_ES } from '../../../constant/TextInit'
import DataContext from '../../../context/dataContext'
import { Language } from '../../../enum/LanguageEnum'
import { checkPathname } from '../../../helpers/helpers'

// interface or props or enum
import { LinksNavsProps } from '../../../interface/props'

// styles
import { BackButton, ListDesorder } from '../../../styles/global/navegator_styles'
import ArrowMiniComponent from '../../images/ArrowMiniComponent'

import LinksNavActive from './LinksNavActive'

export default function LinksNav({ navText, activeSection, changeSection }: LinksNavsProps) {
  const [toLink, setToLink] = useState('/')
  const location = useLocation()
  const dataContext = useContext(DataContext)
  useEffect(() => {
    if (checkPathname(location.pathname)) {
      setToLink('/blog')
    } else {
      setToLink('/')
    }
  }, [location.pathname])

  return (
    <DataContext.Provider value={dataContext}>
      <ListDesorder>
        {checkPathname(location.pathname) ? (
          <BackButton to={toLink}>
            <ArrowMiniComponent />
            {dataContext.language_current === Language.es ? BACK_ES : BACK_EN}
          </BackButton>
        ) : (
          <LinksNavActive
            navText={navText}
            activeSection={activeSection}
            changeSection={changeSection}
          />
        )}
      </ListDesorder>
    </DataContext.Provider>
  )
}
