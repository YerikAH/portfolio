import {
  AvatarCircle,
  BoxInfo,
  BoxWhoPublish,
  TextBodyTwo,
  TextRich,
} from '../../../../styles/blog/ui_styles'
import { TextLink } from '../../../../styles/global/footer_styles'

export default function WhoPublished() {
  return (
    <BoxWhoPublish>
      <AvatarCircle src='https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/676f0f415bf798996edd126586efaf16~c5_720x720.jpeg?x-expires=1677542400&x-signature=MY5HD77HwVkbGicgg1fQieMntpQ%3D' />
      <BoxInfo>
        <TextRich>
          por
          <TextLink> Harvey Yerik</TextLink>
        </TextRich>
        <TextBodyTwo>Ingeniero de software y desarrollador web</TextBodyTwo>
      </BoxInfo>
    </BoxWhoPublish>
  )
}
