// props
import { SocialMediaProps } from '../../../../../interface/props'

// styles
import {
  ListTileBox,
  ListTileImage,
  ListTileLink,
  ListTileLinkIcon,
  ListTileStyles,
  ListTileTitle,
} from '../../../../../styles/home/section_fourth'

export default function ListTile({ data }: SocialMediaProps) {
  return (
    <ListTileStyles>
      <ListTileLinkIcon href={data.link} target='_blank'>
        <ListTileImage src={data.icon} />
      </ListTileLinkIcon>
      <ListTileBox>
        <ListTileTitle>{data.name}</ListTileTitle>
        <ListTileLink href={data.link} className='nameCompleted' target='_blank'>
          {data.user}
        </ListTileLink>
      </ListTileBox>
    </ListTileStyles>
  )
}
