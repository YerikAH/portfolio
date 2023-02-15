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
        <TextButton>
          <ImageIcon src={iconLink} />
          Ver aplicación
        </TextButton>
        <TextButton>
          <ImageIcon src={iconGitHub} />
          Ver codigo
        </TextButton>
        <TextButton>
          <ImageIcon src={iconInfo} />
          Información
        </TextButton>
      </BoxButtons>
    </ProjectStyle>
  );
}
