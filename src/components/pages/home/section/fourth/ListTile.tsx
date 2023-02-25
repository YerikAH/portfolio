// props
import { SocialMediaProps } from '../../../../../interface/props'

// styles
import * as style from '../../../../../styles/home/section_fourth'

export default function ListTile({ data }: SocialMediaProps) {
  return (
    <style.ListTileStyles>
      <style.ListTileLinkIcon href={data.link} target='_blank'>
        <style.ListTileImage src={data.icon} />
      </style.ListTileLinkIcon>
      <style.ListTileBox>
        <style.ListTileTitle>{data.name}</style.ListTileTitle>
        <style.ListTileLink href={data.link} className='nameCompleted' target='_blank'>
          {data.user}
        </style.ListTileLink>
      </style.ListTileBox>
    </style.ListTileStyles>
  )
}
