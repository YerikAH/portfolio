import styled from "styled-components";

export const SectionFourthStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const BoxGrid = styled.div`
  max-width: 720px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 0 2rem;
  padding-top: 3.625rem;
  background: linear-gradient(90deg, #5B8BD2 0.15%, #2472CE 90%);
  border-radius: 30px;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "box_two box_one";
    gap: 3.5rem;
  }
`;
export const BoxGridOne = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  @media (min-width: 720px) {
    grid-area: box_one;
  }
`;
export const BoxGridTwo = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  @media (min-width: 720px) {
    grid-area: box_two;
  }
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

export const TextBodyOne = styled.p`
  font: normal normal 400 1rem/1.5rem var(--font-lato);
  color: var(--black);
  opacity: 0.6;
  text-align: center;
  @media (min-width: 720px) {
    text-align: left;
  }
`;