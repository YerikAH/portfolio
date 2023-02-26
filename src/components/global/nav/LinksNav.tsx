// react router
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { checkPathname } from '../../../helpers/helpers'

// interface or props or enum
import { LinksNavsProps } from '../../../interface/props'

// styles
import {
  BackButton,
  ListDesorder, ListLinkRouter,
} from '../../../styles/global/navegator_styles'
import ArrowMiniComponent from '../../images/ArrowMiniComponent'

import LinksNavActive from './LinksNavActive'

export default function LinksNav({ navText, activeSection, changeSection }: LinksNavsProps) {
  const [toLink, setToLink] = useState('/')
  const location = useLocation()

  useEffect(() => {
    if(checkPathname(location.pathname)){
      setToLink('/blog')
    }else{
      setToLink('/')
    }
  }, [location.pathname])
  
  return (
    <ListDesorder>
      {checkPathname(location.pathname) ? (
        <BackButton to={toLink}>
          <ArrowMiniComponent />
          Volver
        </BackButton>
      ) : (
        <LinksNavActive
          navText={navText}
          activeSection={activeSection}
          changeSection={changeSection}
        />
      )}
    </ListDesorder>
  )
}
