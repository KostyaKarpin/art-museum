// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { GRAY } from "@/constants/colors";

export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY};
  border-radius: 0 0 10px 10px;
  padding: 2% 1%;
`;
