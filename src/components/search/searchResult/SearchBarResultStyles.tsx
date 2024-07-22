// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK, BORDER_GRAY } from "@/constants/colors";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 0;

  &:hover {
    background: ${BORDER_GRAY};
  }

  @media (max-width: 868px) {
    padding: 5% 0;
  }
  @media (max-width: 470px) {
    padding: 10% 0;
  }
`;

export const Text = styled.p<{ $isAuthor: boolean }>`
  font-size: ${(prop) => (prop.$isAuthor ? "14px" : "18px")};
  color: ${BLACK};
  text-align: ${(prop) => (prop.$isAuthor ? "end" : "start")};

  @media (max-width: 868px) {
    font-size: ${(prop) => (prop.$isAuthor ? "12px" : "16px")};
  }
  /* @media (max-width: 470px) {
    width: 80%;
  } */
`;
