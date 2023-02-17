import { SocialMediaProps } from "../../../interface/props";
import {
  ListTileBox,
  ListTileImage,
  ListTileLink,
  ListTileLinkIcon,
  ListTileStyles,
  ListTileTitle,
} from "../../../styles/section_fourth";

export default function ListTile({ data }: SocialMediaProps) {
  return (
    <ListTileStyles>
      <ListTileLinkIcon href={data.link} target="_blank">
        <ListTileImage src={data.icon} />
      </ListTileLinkIcon>
      <ListTileBox>
        <ListTileTitle>{data.name}</ListTileTitle>
        <ListTileLink
          href={data.link}
          className="nameCompleted"
          target="_blank"
        >
          {data.user}
        </ListTileLink>
      </ListTileBox>
    </ListTileStyles>
  );
}
