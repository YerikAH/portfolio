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
import { useContext } from "react";
import FetchContext from "../../../context/dataContext";
import LinkComponent from "../../images/LinkComponent";
import GithubComponent from "../../images/GithubComponent";
import InfoComponent from "../../images/InfoComponent";
export default function ProjectsComponent({ data }: PortfolioProps) {
  const dataContext = useContext(FetchContext);
  return (
    <FetchContext.Provider value={dataContext}>
      <ProjectStyle>
        <HoverBox className="hoverBox"></HoverBox>
        <LinkImage
          href={data.link_preview}
          target="_blank"
          className="linkImage"
        >
          <AssetImage src={data.image_path} />
        </LinkImage>
        <BoxInfo>
          <TitleProject>{data.name}</TitleProject>
          <TextProject>{data.description.substring(0, 300)}...</TextProject>
        </BoxInfo>
        <BoxButtons>
          <TextButton href={data.link_preview} target="_blank">
            <LinkComponent />
            {dataContext.language_static.section_third.preview}
          </TextButton>
          <TextButton href={data.link_code} target="_blank">
            <GithubComponent />
            {dataContext.language_static.section_third.code}
          </TextButton>
          <TextButton href="">
            <InfoComponent />
            {dataContext.language_static.section_third.info}
          </TextButton>
        </BoxButtons>
      </ProjectStyle>
    </FetchContext.Provider>
  );
}
