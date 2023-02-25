// interface
import { HomeNavProps } from '../../../interface/props'

// styles
import { MenuMobileList, MenuMobileLink } from '../../../styles/global/menu_mobile_styles'

// icon components
import IconAbout from '../../images/IconAbout';
import IconHome from '../../images/IconHome';
import IconPhone from '../../images/IconPhone';
import IconProjects from '../../images/IconProjects';

export default function HomeMenuMobile({ navText, handleSwitch }: HomeNavProps) {
  const menuItems= [
    { section: '#home', text: navText.home, icon: <IconHome/>},
    { section: '#about', text: navText.about , icon: <IconAbout/>},
    { section: '#projects', text: navText.portfolio, icon: <IconProjects/>},
    { section: '#contact', text: navText.contact , icon: <IconPhone/>},
  ];
  return (
    <>
      {menuItems.map((item,idx)=>(
        <MenuMobileList key={idx}>
          <MenuMobileLink href={item.section} onClick={handleSwitch}>
            {item.icon}
            {item.text}
          </MenuMobileLink>
        </MenuMobileList>
      ))}
    </>
  )
}
