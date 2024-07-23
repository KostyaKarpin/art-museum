// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BORDER_GRAY, WHITE } from "@/constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${BORDER_GRAY};
  background: ${WHITE};
  width: 90%;
  position: relative;
  top: -1.5rem;
  padding: 3%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
