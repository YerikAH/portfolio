import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
`;
export const NavStyle = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const ListDesorder = styled.ul`
  gap: 1.5rem;
`;

export const ListPoint = styled.li`
  @media(min-width:720px){
    display:none
  }

`;

export const ListLink = styled.a`
  font: normal normal 400 1rem/1.9rem var(--black);
`;	

export const ListImageBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ListLogo = styled.img`
  width: 100%;
  height: auto;
`;

