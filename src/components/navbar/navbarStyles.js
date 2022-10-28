import styled from "styled-components";

export const NavWrapper = styled.div`
    padding-block: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    background-color: #11526c;
    height: 4.5rem;
    position: fixed;
    bottom 0;
    width: 100%;
    @media (min-width: 768px) {
        padding-block: 4em;
        justify-content: center;
        background-color: transparent;
        color: #223435;
        position: static;
        top: 0; 
    }
`;

export const NavList = styled.li`
  list-style-type: none;
  font-size: 1.5rem;
  text-align: center;
  padding-inline: 0.25rem;
  color: #e9f7f5;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 768px) {
    color: #223435;
  }
`;

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #11526c;
    opacity: 0.7;
  }
`;
