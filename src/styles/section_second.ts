import styled from "styled-components";

export const SectionScondStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white-pale);
`;

export const BoxGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 0 2rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-areas: "box_two box_one";
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
  @media (min-width: 720px) {
    grid-area: box_two;
  }
`;

export const TitleBox = styled.div``;
export const IconImage = styled.img``;
export const SubtitleOne = styled.h2``;

export const TextBodyOne = styled.p``;
export const CircleAvatar = styled.img``;
