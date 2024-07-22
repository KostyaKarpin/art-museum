// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK } from "@/constants/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 0;
`;

export const Text = styled.p<{ $isAuthor: boolean }>`
  font-size: ${(prop) => (prop.$isAuthor ? "14px" : "18px")};
  color: ${BLACK};
`;
