import { SocialMediaProps } from "../../../interface/props";
import {
  ListTileBox,
  ListTileImage,
  ListTileLink,
  ListTileStyles,
  ListTileTitle,
} from "../../../styles/section_fourth";

export default function ListTile({ data }: SocialMediaProps) {
  return (
    <ListTileStyles>
      <ListTileImage src={data.icon} />
      <ListTileBox>
        <ListTileTitle>{data.name}</ListTileTitle>
        <ListTileLink href={data.link}>{data.user}</ListTileLink>
      </ListTileBox>
    </ListTileStyles>
  );
}
