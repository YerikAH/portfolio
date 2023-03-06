import { CertificateProps } from '../../../../../interface/certProps'
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
export default function IntroSection({ cert }: CertificateProps) {
  return (
    <BoxCircle>
      <CircleOne></CircleOne>
      <CircleTwo></CircleTwo>
      <CircleThree></CircleThree>
      <CircleFour></CircleFour>
      <BoxInfo>
        <HeadlinePrincipal>{cert.title}</HeadlinePrincipal>
        <TextBody>{cert.description}</TextBody>
      </BoxInfo>
    </BoxCircle>
  )
}
