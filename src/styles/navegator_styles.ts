import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
`;
export const NavStyle = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;

export const ListDesorder = styled.ul`
  gap: 1.5rem;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const ListPoint = styled.li`
  display: none;
  @media(min-width:720px){
    display: block;
  }

`;

export const ListLink = styled.a`
  font: normal normal 400 1rem/1.9rem var(--black);
`;	

export const ListImageBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width:720px){
    margin-right:2rem;
  }
`;


export const ListLogo = styled.img`
  width: 100%;
  height: auto;
`;


export const ListHam = styled.button`
  
  background-color:transparent;
    @media (min-width:720px){
    display:none
  }
`
export const ListTheme = styled.button`
  border-radius:15rem;
  padding:0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  display:flex;
  justify-content: center;
  align-items:center;
`

export const HamImage = styled.img``
export const ThemeImage = styled.img`
  width: 1rem;
  @media (min-width:720px){
    width:auto;
  }
`
