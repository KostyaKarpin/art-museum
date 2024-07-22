// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK, TEXT_ORANGE } from "@/constants/colors";

export const Text = styled.h1`
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  color: ${BLACK};
  text-transform: capitalize;
`;

export const Decorate = styled.span`
  color: ${TEXT_ORANGE};
`;
