import styled from "styled-components";

export const MenuMobileStyles = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 500;
  background-color: var(--white);
`;
export const ListHam = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem 2rem 0 2rem;
  width: 100%;
`;

export const MenuMobileUlist = styled.ul`
  margin-top: 2rem;
  display: grid;
  place-items: start;
  width: 100%;
`;
export const MenuMobileList = styled.li``;
export const MenuMobileLink = styled.a`
  display: block;
  font: normal normal 400 1rem/1.2rem var(--font-lato);
  color: var(--black);
  width: 100%;
  padding: 1rem 2rem;
`;
