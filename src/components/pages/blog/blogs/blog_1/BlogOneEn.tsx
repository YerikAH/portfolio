import { blogOne } from '../../../../../interface/blogProps'
import {
  ImageBlog,
  TextBodyOne,
  TextListBoxDesorder,
  TextList,
  HeadlineThree,
  SpanText,
  HeadlinePrincipal,
  SpanTextTwo,
} from '../../../../../styles/blog/blog_read'
import WhoPublished from '../../ui/WhoPublished'

export default function BlogOneEn({ blogI }: blogOne) {
  return (
    <>
      <SpanText>{'//'} Experience</SpanText>
      <HeadlinePrincipal>My experience learning programming for 8 months</HeadlinePrincipal>
      <SpanTextTwo>Posted on March 6, 2023</SpanTextTwo>
      <WhoPublished />
      <ImageBlog src={blogI} />
      <TextBodyOne>
        Over the last year I have immersed myself in an intense process of learning programming. It
        has been one of the most challenging and rewarding periods of my life. I made a lot of
        mistakes, but it all started after high school, not knowing which college major to choose. I
        focused on improving my skills and productivity, trying various productivity apps, although
        some were paid and others did not have the interface I was looking for. That{'\''}s when I
        decided to develop my own productivity app for Android, studying and using Android Studio
        for it. When I was ready to start developing my mobile app, I ran into problems: my Android
        emulator was consuming a lot of resources and I had no programming knowledge. I thought
        creating an app was as easy as dragging components, giving them color and functionality. I
        was frustrated and discouraged realizing that I needed to get a better computer and learn
        programming.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        Despite everything, I did not give up my dream of creating a mobile application and started
        to investigate. I discovered web development and started with HTML, CSS and JavaScript,
        learning from videos on YouTube. It was incredibly satisfying to create web pages and by
        December 2021, I already had a good handle on these technologies.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        It was then that I decided to study Software Engineering and realized that I had
        underestimated how complicated programming could be. For four months I was stuck, practicing
        only HTML and CSS and losing sight of my original goal of creating a mobile app.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        One day, I saw a video of a boy who was studying 12 hours a day and it seemed impossible to
        me. However, I began to think about how I was using my 16 hour days and realized that I
        could do more. I changed my focus and started spending more time programming and studying
        Software Engineering.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        I used to have some good habits, but none seemed to last very long. I realized that, most of
        the time, I was losing them. Frustrated, I decided to study programming for long periods,
        although most of my attempts failed. Sometimes I could only study for four hours straight,
        which was my personal record. After many attempts, I finally managed to study for eight
        hours, which surprised me. It was a long time, and of course I felt great satisfaction from
        releasing dopamine. I became addicted to studying during that time.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        Studying for long periods was amazing. Some days it was easy to hit eight hours, but others
        were much more difficult. The problem was, when studying got hard, he ended up tired and
        hating what he was doing. However, I felt that I had to get to eight hours, even if after
        the sixth hour my learning was slower. If I was developing web pages, I was easily
        distracted.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        It was essential for me to implement study techniques. There is no point in studying for
        eight hours if the learning is bad. By the way, during that time I discovered the philosophy
        of Tao and learned about effortless work. At first, I was a bit confused, but in short, it
        {'\''}s getting to a state of flow, where nothing interrupts you and you just think about
        what you{'\''}re doing. Sometimes I manage to get into a flow state and it{'\''}s very
        satisfying. From my experience, it is difficult to get into a flow state if I have an
        unhealthy lifestyle.
      </TextBodyOne>
      <TextListBoxDesorder>
        <TextList>
          To improve my study skills, I have implemented various techniques. I have created a
          pleasant environment to study in and make sure to stay hydrated during my study sessions.
          I have also learned the importance of {'"'}working effortlessly{'"'} and while I still
          find it difficult to get into flow, I focus on each study session to stay focused. Also, I
          {'\''}ve put aside social media and any other distractions that don{'\''}t take me in the
          direction I want.
        </TextList>
      </TextListBoxDesorder>
      <br />
      <TextBodyOne>
        Continuing with my story, after a few months of study, I had already gained knowledge in
        React, Vue.js, Flask, Django, Sass and Styled-components. However, at one point, I realized
        that simply knowing a technology was not enough to be good at it. Deeply understanding the
        technology and focusing on it allowed me to have a more fluid handling when building
        applications. Therefore, I decided to focus entirely on React, since I liked functional
        programming.
      </TextBodyOne>
      <TextBodyOne>
        After some time, I was faced with a programming logic problem that took me two days to
        solve. I had to write and delete code for four hours, I spent my time thinking of an optimal
        solution that would not cause problems in the future. I realized that the hardest part of
        programming was not just writing code, but finding effective and optimal solutions. This is
        where algorithmic complexity comes into play.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        The key to solving real-life problems is to be an expert in something in particular, to know
        it in depth, and to apply that knowledge to find optimal solutions. During my learning
        process in programming, I realized that it is not only about knowing the technologies and
        tools, but also about understanding the logic behind them and how to apply it to specific
        situations.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        After learning various technologies, I felt a bit stuck and bored, until I understood the
        importance of focusing on a particular area. I decided to become a React expert as I liked
        its focus on functional programming. And although I still have a lot to learn, this
        specialization has helped me to give better solutions to the problems I encounter in my
        projects.
      </TextBodyOne>
      <br />
      <TextBodyOne>
        I remember one problem in particular that took me several days to solve, not because of a
        lack of technical knowledge, but because I was focused on the easiest solution rather than
        the most optimal one for the application. From that moment on, I understood that algorithmic
        complexity and attention to detail are essential to create solutions that work in the long
        term without causing additional problems.
      </TextBodyOne>
      <HeadlineThree>In summary</HeadlineThree>
      <br />
      <TextBodyOne>
        My experience has taught me that the path to programming mastery is a continuous process of
        constant learning and improvement. And I{'\''}m excited to move on and face new challenges in
        the future.
      </TextBodyOne>
    </>
  )
}
