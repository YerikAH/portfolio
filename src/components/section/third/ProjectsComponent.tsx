import { PortfolioProps } from "../../../interface/props";
import {
  AssetImage,
  BoxButtons,
  BoxInfo,
  DecorationBox,
  ProjectStyle,
  TextButton,
  TextProject,
  TitleProject,
} from "../../../styles/section_third";

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
        <TextButton>Ver aplicación</TextButton>
        <TextButton>Ver codigo</TextButton>
        <TextButton>Información</TextButton>
      </BoxButtons>
    </ProjectStyle>
  );
}
