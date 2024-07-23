// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";
import { TEXT_ORANGE, WHITE } from "@/constants/colors";

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;

  @media (max-width: 868px) {
    width: 40%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;

  @media (max-width: 868px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  color: ${WHITE};
  text-transform: capitalize;
  margin-left: 10%;

  &:hover,
  &:focus {
    color: ${TEXT_ORANGE};
    transition: 0.5s ease-in;
  }
`;

export const BurgerMenu = styled.img<{ src: string }>`
  content: ${(prop) => `url(${prop.src})`};
  display: none;
  @media (max-width: 868px) {
    display: block;
  }
`;
