import styled from "styled-components";

export const SectionStylesBlog = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8.5rem;
  @media (min-width: 720px) {
    padding-top: 10.9875rem;
  }
`;
export const BoxGridBlog = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  padding: 0 1rem 8.5rem 1rem;
  border-bottom: 1px solid var(--black-10);
  @media (min-width: 720px) {
    grid-template-columns: 26% 66%;
    gap: 8%;
  }
`;
export const BoxGridOne = styled.div``;
export const BoxGridTwo = styled.div`
  margin-top: 2rem;
  @media (min-width: 720px) {
    margin-top: 0;
  }
`;

export const DecorationBox = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  background: linear-gradient(93.89deg, #2472ce 15.64%, #2449ce 90.51%);
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  height: 15rem;
  @media (min-width: 720px) {
    padding: 2rem 2.5rem 2rem 4rem;
    align-items: start;
    justify-content: center;
  }
`;
export const HeadlinePrincipal = styled.h1`
  color: var(--white);
  margin: 0;
  font: normal normal 700 2rem/2.5rem var(--font-lato);
  @media (min-width: 720px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;
export const SubtitleOne = styled.h4`
  margin-top: 1rem;
  max-width: 330px;
  width: 100%;
  color: var(--white);
  font: normal normal 500 1rem/2rem var(--font-lato);
  opacity: 0.8;
  @media (min-width: 720px) {
    font-size: 1.2rem;
    line-height: auto;
  }
`;

export const DecorationImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  @media (min-width: 720px) {
    position: absolute;
    width: auto;
    bottom: -2rem;
    right: 5rem;
  }
`;

export const DecorationImage = styled.img`
  scale: 0.8;
  rotate: 15deg;
  @media (min-width: 720px) {
    scale: 1.2;
  }
`;

export const SubtitleTwo = styled.h2`
  color: var(--black);
  font: normal normal 700 1.8rem/2.5rem var(--font-lato);
`;
export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;
export const BoxButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--blue);
  opacity: 0.4;
  rotate: ${(props) => props.className && `${props.className}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GroupBox = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fill, 100%);
  place-items: center;
  gap: 2rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(auto-fill, 210px);
  }
`;

export const GroupContent = styled.div`
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 11px rgba(38, 55, 75, 0.25);
  background-color: var(--white);
  padding: 2rem 1rem;
  display: grid;
  border-radius: 0.5rem;
`;
export const GroupContentLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const SpanText = styled.span`
  font: normal normal 700 1rem/1.5rem var(--font-mono);
  color: ${(props) => props.className && `${props.className}`};
  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;
export const TitleBox = styled.h6`
  font: normal normal 700 1.2rem/1.5rem var(--font-lato);
  text-transform: capitalize;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  color: var(--black);
  margin: 1rem 0 0.5rem 0;
  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;
export const TextBox = styled.p`
  font: normal normal 400 0.9rem/1.2rem var(--font-lato);
  color: var(--black);
  opacity: 0.8;
  text-align: justify;
  @media (min-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const NavigationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationGeneral = styled.div`
  height: 0;
  overflow: hidden;
  @media (min-width: 720px) {
    height: auto;
    overflow: auto;
  }
`;
export const NavigationTitleButton = styled.button`
  background-color: var(--black-10);
  border-radius: 8px;
  padding: 1rem;
  color: var(--blue);
  font: normal normal 700 1.1rem/1.2rem var(--font-lato);
  text-align: left;
`;

export const NavigationTitle = styled.h3`
  color: var(--black);
  font: normal normal 600 1.2rem/1.2rem var(--font-lato);
  text-align: left;
  padding: 1rem;
`;
export const NavigationSubtitleButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  padding: 1rem;
  color: var(--black-pale);
  font: normal normal 400 1rem/1.2rem var(--font-lato);
  text-align: left;
  opacity: 0.8;
  &:hover {
    background-color: var(--black-10);
  }
`;

export const Separate = styled.div`
  width: 100%;
  height: 0.5px;
  opacity: 0.5;
  background-color: var(--black);
  margin: 1rem 0;
`;

export const TextDecoration = styled.p``;