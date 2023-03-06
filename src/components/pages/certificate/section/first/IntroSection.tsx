import {
  BoxCircle,
  BoxInfo,
  CircleFour,
  CircleOne,
  CircleThree,
  CircleTwo,
  HeadlinePrincipal,
  TextBody,
} from '../../../../../styles/cert/section_first'
export default function IntroSection() {
  return (
    <BoxCircle>
      <CircleOne></CircleOne>
      <CircleTwo></CircleTwo>
      <CircleThree></CircleThree>
      <CircleFour></CircleFour>
      <BoxInfo>
        <HeadlinePrincipal>{dataContext.certificate.title}</HeadlinePrincipal>
        <TextBody>{dataContext.certificate.description}</TextBody>
      </BoxInfo>
    </BoxCircle>
  )
}
