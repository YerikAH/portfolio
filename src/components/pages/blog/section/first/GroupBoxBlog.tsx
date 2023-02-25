import { TopicsColorEnum, TopicsEnum } from '../../../../../enum/LanguageEnum';
import { Blog } from '../../../../../interface/data';
import { NavigationBlogProps } from '../../../../../interface/props';
import {
  GroupBox,
  GroupContent,
  GroupContentLink,
  SpanText,
  TextBox,
  TitleBox,
} from '../../../../../styles/blog/section_first_blog';

function selectColor(value: TopicsEnum): TopicsColorEnum {
  switch (value) {
    case TopicsEnum.exp:
      return TopicsColorEnum.blue;
    case TopicsEnum.review:
      return TopicsColorEnum.purple;
    case TopicsEnum.code:
      return TopicsColorEnum.pink;
    default:
      return TopicsColorEnum.blue;
  }
}
function returnWord(value: TopicsEnum, nav: Blog){
  const wordTopics = nav.navigation_blog.topics.find(item => item.word === value);
  if(wordTopics === undefined){
      return 'Radio'
  }
  return wordTopics.name;
}
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
