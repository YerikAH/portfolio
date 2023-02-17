import styled from "styled-components";

export const SectionFourthStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const BoxGridFather = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin: 0 auto;
  place-items: center;
  padding: 3.625rem 2rem;
  background: linear-gradient(90deg, var(--blue) 0.15%, var(--blue-strong) 90%);
  border-radius: 30px;
`;
export const BoxGrid = styled.div`
  max-width: 720px;
  width: 100%;
  display: grid;
  margin: 2rem auto 0;
  place-items: center;

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
  display: flex;
  height: 100%;
  width: 100%;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 4rem;
  @media (min-width: 720px) {
    grid-area: box_two;
    flex-direction: column;
    padding-top: 0;
  }
`;

export const TitleBox = styled.div`
  display: grid;
  place-items: center;
`;
export const IconImage = styled.img``;
export const SubtitleOne = styled.h2`
  font: normal normal 600 1.5rem/1.5rem var(--font-lato);
  color: var(--white);
  margin-top: 1.25rem;
`;

export const TextBodyOne = styled.p`
  max-width: 720px;
  margin: 1rem auto 0 auto;
  font: normal normal 400 0.9rem/1.5rem var(--font-lato);
  color: var(--white);
  text-align: center;
  opacity: 0.8;
`;

export const FormStyles = styled.form`
  display: grid;
`;
export const LabelStyles = styled.label`
  font: normal normal 600 0.9rem/1.2rem var(--font-lato);
  color: var(--white);
  margin: 1rem 0 0.5rem 0;
`;
export const InputStyles = styled.input`
  padding: 0.5rem 1rem;
  background-color: transparent;
  font: normal normal 400 0.9rem/1.2rem var(--font-lato);
  color: var(--white-40);
  border-radius: 10px;
  border: 1px solid var(--white);
  width: 100%;
  outline: none;
`;
export const TextAreaStyles = styled.textarea`
  padding: 0.5rem 1rem;
  background-color: transparent;
  font: normal normal 400 0.9rem/1.2rem var(--font-lato);
  color: var(--white-40);
  border-radius: 10px;
  resize: none;
  border: 1px solid var(--white);
  height: 150px;
  width: 100%;
  outline: none;
`;
export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--white);
  padding: 0.5rem;
  outline: none;
  font: normal normal 500 0.9rem/1.2rem var(--font-lato);
  border-radius: 10px;
  margin-top: 1rem;
  color: var(--blue-strong);
`;

export const ButtonIcon = styled.img``;

export const ListTileStyles = styled.div`
  display: flex;
  place-items: center;
  width: 100%;
  flex-direction: column;
  max-width: 7rem;
  @media (min-width: 720px) {
    flex-direction: row;
    max-width: none;
    gap: 1rem;
  }
  &:hover {
    .nameCompleted {
      width: auto;
    }
  }
`;
export const ListTileBox = styled.div`
  display: grid;
  place-items: center;
  @media (min-width: 720px) {
    place-items: start;
  }
`;
export const ListTileLinkIcon = styled.a`
display: block;
`
export const ListTileImage = styled.img``;
export const ListTileTitle = styled.h4`
  margin-top: 1rem;
  font: normal normal 600 1rem/1.2rem var(--font-lato);
  color: var(--white);
  text-transform: capitalize;
  text-align: center;
  @media (min-width: 720px) {
    margin-top: 0;
  }
`;
export const ListTileLink = styled.a`
  margin-top: 0.3rem;
  font: normal normal 400 0.8rem/1.2rem var(--font-lato);
  color: var(--white);
  opacity: 0.8;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  width: 100%;
  transition: 0.3s;
`;
export const ErrorStyles = styled.p`
  margin-top: 1rem;
text-align: left;
font: normal normal 500 0.9rem/1.2rem var(--font-lato);
letter-spacing: 0.05rem;
color: var(--black-pale);

`