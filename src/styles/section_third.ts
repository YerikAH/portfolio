import styled from "styled-components";

export const SectionThirdStyles = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
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
  display: grid;
  padding: 0 2rem;
  place-items: center;
  margin-top: 5rem;
  gap: 3rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 45%);
    width: 100%;
    margin: 5rem auto 0 auto;
  }
`;

export const ProjectStyle = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  height: 100%;


  &:hover {
    .hoverBox {
      width: 110%;
      height: 100%;
    }
    @media (min-width: 500px) {
      .hoverBox {
        width: 105%;
        height: 100%;
      }
    }
    @media (min-width: 720px) {
      .hoverBox {
        width: 110%;
        height: 100%;
        max-width: none;
      }
      .linkImage {
        justify-content: center;
        align-items: center;
        bottom: 0;
        right: 0;
      }
    }
    @media (min-width: 1000px) {
      .hoverBox {
        top: 0;
      }
    }
  }
  
`;


export const HoverBox = styled.div`
  position: absolute;
  background: rgba(243, 243, 243, 0.1);
  border: 0.5px solid var(--gray);
  backdrop-filter: blur(12.5px);
  border-radius: 15px;
  transition: 0.3s;
  width: 0;
  height: 0;
  top: 0;
  @media (min-width: 1000px) {
    top: 1.5rem;
    width: 100%;
    max-width: 25rem;
    height: 15.625rem;
  }
`;

export const LinkImage = styled.a`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1.5rem;
  transition: 0.3s;
  @media (min-width: 1000px) {
    bottom: -15px;
    right: -15px;
    margin-top: 2.5rem;
  }
`;
export const AssetImage = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 4px 10px rgba(33, 33, 33, 0.08));
  @media (min-width: 1000px) {
    max-width: 25rem;
    max-height: 15.625rem;
  }
`;

export const BoxInfo = styled.div`
  margin-top: 1.5rem;
  position: relative;
  @media (min-width: 1000px) {
    margin-top: 2.5rem;
  }
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
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  position: relative;
  margin-bottom: 1.5rem;
  @media (min-width: 1000px) {
    margin-bottom: 2.5rem;
  }
`;

export const TextButton = styled.a`
  border-radius: 10px;
  color: var(--black);
  font: normal normal 500 14px/10px var(--font-lato);
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: var(--black-10);
  }
`;
export const ImageIcon = styled.img``;

export const TextButtonStroke = styled.button`
  margin-top: 4rem;
  color:var(--blue);
  font: normal normal 700 0.8rem/0.7rem var(--font-lato);
  background-color: transparent;
  border: 1px solid var(--blue);
  padding: 0.8rem;
  border-radius: 0.8rem;
  transition: .3s;
  @media (min-width:720px){
    font: normal normal 600 1rem/0.9rem var(--font-lato);
    padding: 0.8rem 2rem;
  }
  &:hover{
    background-color: var(--blue);
    color: var(--white);
  }
`;