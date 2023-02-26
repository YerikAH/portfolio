import { useLocation } from 'react-router-dom'
import { LinksNavsProps } from '../../../interface/props'
import {
  ListImageBox,
  ListLink,
  ListLinkRouter,
  ListPoint,
} from '../../../styles/global/navegator_styles'
import LogoComponent from '../../images/LogoComponent'
import LinksBlog from './LinksBlog'
import LinksHome from './LinksHome'

export default function LinksNavActive({ navText, activeSection, changeSection }: LinksNavsProps) {
    const location = useLocation()
  return (
    <>
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
    </>
  )
}
