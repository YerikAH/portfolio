// react router
import { useLocation } from 'react-router-dom'

// interface or props or enum
import { LinksNavsProps } from '../../../interface/props'

// styles
import {
  ListDesorder,
  ListImageBox,
  ListLink,
  ListLinkRouter,
  ListPoint,
} from '../../../styles/global/navegator_styles'

// components
import LogoComponent from '../../images/LogoComponent'
import LinksBlog from './LinksBlog'
import LinksHome from './LinksHome'

export default function LinksNav({ navText, activeSection, changeSection }: LinksNavsProps) {
  const location = useLocation()
  return (
    <ListDesorder>
      <ListImageBox>
        <ListLink className='logo'>
          <LogoComponent />
        </ListLink>
      </ListImageBox>

      {location.pathname === '/' ? (
        <LinksHome activeSection={activeSection} navText={navText} />
      ) : (
        <LinksBlog navText={navText} changeSection={changeSection} />
      )}

      <ListPoint>
        <ListLinkRouter to='/blog' className={activeSection === 4 ? 'true' : 'false'}>
          {navText.blog}
        </ListLinkRouter>
      </ListPoint>
    </ListDesorder>
  )
}
