import { PortfolioProps } from "../../../interface/props";
import {
  AssetImage,
  BoxButtons,
  BoxInfo,
  HoverBox,
  ImageIcon,
  LinkImage,
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
      <HoverBox className="hoverBox"></HoverBox>
      <LinkImage href={data.link_preview} target="_blank" className="linkImage">
        <AssetImage src={data.image_path} />
      </LinkImage>
      <BoxInfo>
        <TitleProject>{data.name}</TitleProject>
        <TextProject>{data.description.substring(0, 300)}...</TextProject>
      </BoxInfo>
      <BoxButtons>
        <TextButton href={data.link_preview} target="_blank">
          <ImageIcon src={iconLink} />
          Ver aplicación
        </TextButton>
        <TextButton href={data.link_code} target="_blank">
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
