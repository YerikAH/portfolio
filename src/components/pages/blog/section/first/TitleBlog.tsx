import { BoxButtons, BoxTitle, IconButton, SubtitleTwo } from "../../../../../styles/blog/section_first_blog";
import ArrowComponent from "../../../../images/ArrowComponent";

export default function TitleBlog() {
  return (
    <BoxTitle>
    <SubtitleTwo>Lo último de mi blog</SubtitleTwo>
    <BoxButtons>
      <IconButton className="-180deg">
        <ArrowComponent />
      </IconButton>
      <IconButton>
        <ArrowComponent />
      </IconButton>
    </BoxButtons>
  </BoxTitle>
  )
}
