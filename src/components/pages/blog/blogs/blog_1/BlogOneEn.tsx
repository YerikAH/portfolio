import { blogOne } from '../../../../../interface/blogProps'
import {
  ImageBlog,
  TextBodyOne,
  TextListBoxDesorder,
  TextList,
  HeadlineThree,
  CodeSyntax,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
} from '../../../../../styles/blog/blog_read'
import WhoPublished from '../../ui/WhoPublished'

export default function BlogOneEn({ atomOneDark, blogI, code }: blogOne) {
  return (
    <>
      <SpanText>{'//'} Experience</SpanText>
      <HeadlinePrincipal>
        Asynchronous Programming in JavaScript: Essential Concepts and Practical Examples
      </HeadlinePrincipal>
      <SpanTextTwo>Posted on February 23, 2023</SpanTextTwo>
      <WhoPublished />
      <ImageBlog src={blogI} />
      <TextBodyOne>
        In this article, we'll explain what asynchronous programming is, why we need it, and We'll
        perhaps discuss some of the ways that asynchronous functions have been historically
        implementing in JavaScript.
      </TextBodyOne>
      <TextBodyOne>
        Asynchronous programming is a technique that allows your program to start a task from long
        duration and keep responding to other events while that task is running, instead of having
        to wait until that task is finished. Once that task has finished, your program presents the
        result. Many of the functions provided by browsers, especially the most interesting ones,
        can take a long time to run. That is precisely why these functions are asynchronous. For
        example:
      </TextBodyOne>
      <TextListBoxDesorder>
        <TextList>Make HTTP requests using fetch()</TextList>
        <TextList>Access a user's camera or microphone using getUserMedia()</TextList>
        <TextList>Ask a user to select files using showOpenFilePicker() (en-US)</TextList>
      </TextListBoxDesorder>
      <TextBodyOne>
        So even if you don't have to implement your own asynchronous functions very often, you will
        need to use them correctly. In this article, we'll start by looking at the problem of
        long-running synchronous functions, which make asynchronous programming a need.
      </TextBodyOne>
      <HeadlineThree>Synchronous programming</HeadlineThree>
      <TextBodyOne>Consider the following code:</TextBodyOne>
      <CodeSyntax language='javascript' style={atomOneDark} children={code}></CodeSyntax>
      <TextBodyOne>
        We should note here that the browser steps through the program line by line, in the same
        order as that we write it. At each point, the browser waits for the line to finish its job
        before moving to the next line. You have to do this because each line depends of the work
        carried out in the preceding lines.
      </TextBodyOne>
    </>
  )
}
