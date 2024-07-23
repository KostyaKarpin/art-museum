// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { TEXT_ORANGE, WHITE } from "@/constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 5%;
`;

export const Button = styled.button<{ onClick: () => void }>`
  padding: 2%;
  background: ${TEXT_ORANGE};
  border: none;
  border-radius: 10px;
  color: ${WHITE};
  font-size: 18px;
  font-weight: 700;
`;

export const PageDecorate = styled.span`
  text-align: center;
  padding: 0 10%;
  color: ${TEXT_ORANGE};
  font-size: 18px;
  font-weight: 700;
`;
