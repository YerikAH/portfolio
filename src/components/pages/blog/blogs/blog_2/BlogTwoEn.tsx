import {
  ImageBlog,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
} from '../../../../../styles/blog/blog_read'
export default function BlogTwoEn() {
  return (
    <>
      <SpanText>{'//'} Experiencia</SpanText>
      <HeadlinePrincipal>Mi experiencia aprendiendo programación durante 8 meses</HeadlinePrincipal>
      <SpanTextTwo>Publicado el 6 de marzo, 2023</SpanTextTwo>
      <WhoPublished />
      <ImageBlog src={blogI} />
    </>
  )
}
