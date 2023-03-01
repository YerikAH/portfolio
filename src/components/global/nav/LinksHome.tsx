import { LinksNavsProps } from '../../../interface/props'
import { ListLink, ListPoint } from '../../../styles/global/navegator_styles'

export default function LinksHome({ activeSection, navText }: LinksNavsProps) {
  const menuItems = [
    { section: '#home', text: navText.home, number: 0 },
    { section: '#about', text: navText.about, number: 1 },
    { section: '#projects', text: navText.portfolio, number: 2 },
    { section: '#contact', text: navText.contact, number: 3 },
  ]
  function noUndefined(value: number | undefined): number {
    return value === undefined ? 1 : value
  }
  return (
    <>
      {menuItems.map((item, idx) => (
        <ListPoint key={idx}>
          <ListLink
            className={noUndefined(activeSection) === item.number ? 'true' : 'false'}
            href={item.section}
            tabIndex={1}
          >
            {item.text}
          </ListLink>
        </ListPoint>
      ))}
    </>
  )
}
