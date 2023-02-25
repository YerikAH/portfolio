import { Sections } from '../../../enum/LanguageEnum'
import { BlogNavProps } from '../../../interface/props'
import { MenuMobileList, MenuMobileLinkRouter } from '../../../styles/global/menu_mobile_styles'
import IconAbout from '../../images/IconAbout';
import IconHome from '../../images/IconHome';
import IconPhone from '../../images/IconPhone';
import IconProjects from '../../images/IconProjects';

export default function BlogMenuMobile({ changeSection, navText }: BlogNavProps) {
  const menuItems= [
    { section: Sections.home, text: navText.home, icon: <IconHome/>},
    { section: Sections.about, text: navText.about , icon: <IconAbout/>},
    { section: Sections.projects, text: navText.portfolio, icon: <IconProjects/>},
    { section: Sections.contact, text: navText.contact , icon: <IconPhone/>},
  ];
  function handleClick(section: Sections){
    changeSection(section)
  }
  return (
    <>
      {menuItems.map((item,idx)=>(
        <MenuMobileList key={idx}>
          <MenuMobileLinkRouter to='/' onClick={() => handleClick(item.section)}>
            {item.icon}
            {item.text}
          </MenuMobileLinkRouter>
        </MenuMobileList>
      ))}
    </>
  )
}
