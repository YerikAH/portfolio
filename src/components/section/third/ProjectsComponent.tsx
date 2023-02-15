import { PortfolioProps } from "../../../interface/props";
import {
  AssetImage,
  BoxButtons,
  BoxInfo,
  DecorationBox,
  ImageIcon,
  ProjectStyle,
  TextButton,
  TextProject,
  TitleProject,
} from "../../../styles/section_third";
/* images */
import iconLink from "../../../assets/icon/icon-link.svg";
import iconGitHub from "../../../assets/icon/icon-github.svg";
import iconInfo from "../../../assets/icon/icon-info.svg";

export default function ProjectsComponent({ data }: PortfolioProps) {
  return (
    <ProjectStyle>
      <DecorationBox>
        <AssetImage src={data.image_path} />
      </DecorationBox>
      <BoxInfo>
        <TitleProject>{data.name}</TitleProject>
        <TextProject>{data.description}</TextProject>
      </BoxInfo>
      <BoxButtons>
        <TextButton href={data.link_preview}>
          <ImageIcon src={iconLink} />
          Ver aplicación
        </TextButton>
        <TextButton href={data.link_code}>
          <ImageIcon src={iconGitHub} />
          Ver codigo
        </TextButton>
        <TextButton href="">
          <ImageIcon src={iconInfo} />
          Información
        </TextButton>
      </BoxButtons>
    </ProjectStyle>
  );
}
