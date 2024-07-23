// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK, WHITE } from "@/constants/colors";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${WHITE};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 20%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3 ease-in-out;
`;
export const NavLink = styled(Link)`
  font-size: 18px;
  text-transform: capitalize;
  padding: 5% 0;
  font-weight: 700;
  color: ${BLACK};
`;
