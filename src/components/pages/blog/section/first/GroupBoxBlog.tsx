import React from "react";
import { NavigationBlogProps } from "../../../../../interface/props";
import {
  GroupBox,
  GroupContent,
  GroupContentLink,
  SpanText,
  TextBox,
  TitleBox,
} from "../../../../../styles/blog/section_first_blog";

export default function GroupBoxBlog({ nav }: NavigationBlogProps) {
  return (
    <GroupBox>
      
        {nav.blog_preview.map((item, i) => (
          <GroupContent>
            <GroupContentLink></GroupContentLink>
            <SpanText className="var(--blue-brig)">/* Experiencias */</SpanText>
            <TitleBox>{item.title}</TitleBox>
            <TextBox>
              Durante los últimos 8 meses he estado inmerso en un intenso
              proceso de aprendizaje de programación. Este periodo ha sido uno
              de los más desafiantes y gratificantes de mi vida...
            </TextBox>
          </GroupContent>
        ))}
      
    </GroupBox>
  );
}
