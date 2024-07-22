import { BORDER_GRAY } from "@/constants/colors";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${BORDER_GRAY};
  padding: 4% 3%;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

export const PaintingLink = styled(Link)`
  width: 100%;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 868px) {
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5%;

  @media (max-width: 868px) {
    align-items: flex-end;
  }
`;
