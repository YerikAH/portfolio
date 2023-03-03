import { Sections } from '../../../enum/LanguageEnum'
import { noUndefined } from '../../../helpers/helpers'
import { LinksNavsProps } from '../../../interface/props'
import { ListLinkRouter, ListPoint } from '../../../styles/global/navegator_styles'

export default function LinksBlog({ navText, changeSection, activeSection }: LinksNavsProps) {
  const menuItems = [
    { section: Sections.home, text: navText.home, number: 0 },
    { section: Sections.about, text: navText.about, number: 1 },
    { section: Sections.projects, text: navText.portfolio, number: 2 },
    { section: Sections.contact, text: navText.contact, number: 3 },
  ]
  return (
    <>
      {menuItems.map((item, idx) => (
        <ListPoint key={idx}>
          <ListLinkRouter
            to='/'
            onClick={() => changeSection?.(item.section)}
            tabIndex={1}
            className={noUndefined(activeSection) === item.number ? 'true' : 'false'}
          >
            {item.text}
          </ListLinkRouter>
        </ListPoint>
      ))}
    </>
  )
}
