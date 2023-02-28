import {
  AvatarCircle,
  BoxInfo,
  BoxWhoPublish,
  TextBodyTwo,
  TextRich,
  TextLink,
} from '../../../../styles/blog/ui_styles'

export default function WhoPublished() {
  return (
    <BoxWhoPublish>
      <AvatarCircle src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png' />
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
