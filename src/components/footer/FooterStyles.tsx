// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BORDER_GRAY } from "@/constants/colors";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${BORDER_GRAY};
  padding: 2% 10%;
`;
