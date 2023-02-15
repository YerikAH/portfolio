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

export const ProjectStyle = styled.div``;

// no variables css and no rem
export const DecorationBox = styled.div`
  background: rgba(243, 243, 243, 0.1);
  border: 0.5px solid #dddddd;
  backdrop-filter: blur(12.5px);
  border-radius: 15px;
  position: relative;
`;

export const AssetImage = styled.img`
  position: absolute;
  max-width: 400px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const BoxInfo = styled.div`
  margin-top: 18px;
`;

export const TitleProject = styled.h4`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  text-align: justify;
  letter-spacing: 0.02em;
  color: var(--black);
`;

export const TextProject = styled.p`
  font: normal normal 400 12px/1.25rem var(--font-lato);
  text-align: justify;
  letter-spacing: 0.02em;
  color: var(--black);
  opacity: 0.6;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TextButton = styled.button`
  border-radius: 5px;
  color: var(--black);
  font: normal normal 400 10px/10px var(--font-lato);
  border: none;
  background: transparent;
`;
