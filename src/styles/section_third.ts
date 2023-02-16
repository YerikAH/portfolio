import styled from "styled-components";

export const SectionThirdStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  padding: 5rem 0;
`;

export const TitleBox = styled.div`
  display: grid;
  place-items: center;
`;
export const IconImage = styled.img``;
export const SubtitleOne = styled.h2`
  font: normal normal 700 1.5rem/1.5rem var(--font-lato);
  color: var(--black);
  margin-top: 1.25rem;
`;

export const BoxGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 0 2rem;
  margin-top: 3.625rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 45%);
    gap: 5%;
  }
`;

export const ProjectStyle = styled.div`
  display: grid;
  place-items: center;
  position: relative;
`;

// no variables css and no rem

export const HoverBox = styled.div`
  position: absolute;
  background: rgba(243, 243, 243, 0.1);
  border: 0.5px solid #dddddd;
  backdrop-filter: blur(12.5px);
  border-radius: 15px;
  width: 425px;
  height: 275px;
  top: 0;
`;
export const DecorationBox = styled.div`
  position: relative;
  // max-width: 425px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const AssetImage = styled.img`
  //max-width: 400px;
  // max-height: 250px;
  border-radius: 15px;
  // bottom: -15px;
  // right: -15px;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 4px 10px rgba(33, 33, 33, 0.08));
`;

export const BoxInfo = styled.div`
  margin: 2rem 1rem 0 1rem;
  position: relative;
`;

export const TitleProject = styled.h4`
  font: normal normal 500 1rem/1.5rem var(--font-lato);
  text-align: justify;
  letter-spacing: 0.02em;
  color: var(--black);
`;

export const TextProject = styled.p`
  font: normal normal 400 14px/1.25rem var(--font-lato);
  text-align: justify;
  letter-spacing: 0.02em;
  color: var(--black);
  opacity: 0.6;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 1rem 0 1rem;
  position: relative;
`;

export const TextButton = styled.a`
  border-radius: 5px;
  color: var(--black);
  font: normal normal 500 14px/10px var(--font-lato);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageIcon = styled.img``;
