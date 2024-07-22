// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK_GRADIENT } from "@/constants/colors";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(${BLACK_GRADIENT});
  padding: 2% 10%;
`;
