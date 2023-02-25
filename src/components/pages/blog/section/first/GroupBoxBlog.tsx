import { returnWord, selectColor } from '../../../../../helpers/switchBlog';
import { NavigationBlogProps } from '../../../../../interface/props';
import {
  GroupBox,
  GroupContent,
  GroupContentLink,
  SpanText,
  TextBox,
  TitleBox,
} from '../../../../../styles/blog/section_first_blog';



export default function GroupBoxBlog({ nav }: NavigationBlogProps){
  return (
      <GroupBox>
        {nav.blog_preview.map((item, i) => (
          <GroupContent key={i}>
            <GroupContentLink></GroupContentLink>
            <SpanText className={selectColor(item.word)}>{'/* '} {returnWord(item.word, nav)} {' */'}</SpanText>
            <TitleBox>{item.title}</TitleBox>
            <TextBox>
              {item.description}
            </TextBox>
          </GroupContent>
        ))}
      </GroupBox>
    

  );
}
