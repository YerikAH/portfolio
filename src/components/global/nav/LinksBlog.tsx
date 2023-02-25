import { Sections } from '../../../enum/LanguageEnum'
import { LinksNavsProps } from '../../../interface/props'
import { ListLinkRouter, ListPoint } from '../../../styles/global/navegator_styles'

export default function LinksBlog({ navText, changeSection }: LinksNavsProps) {
  const menuItems = [
    { section: Sections.home, text: navText.home },
    { section: Sections.about, text: navText.about },
    { section: Sections.projects, text: navText.portfolio },
    { section: Sections.contact, text: navText.contact },
  ]
  return (
    <>
      {menuItems.map((item, idx) => (
        <ListPoint key={idx}>
          <ListLinkRouter to='/' onClick={() => changeSection?.(item.section)}>
            {item.text}
          </ListLinkRouter>
        </ListPoint>
      ))}
    </>
  )
}
