// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BLACK, LIGHT_ORANGE } from "@/constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h2<{ $firstLine: boolean }>`
  font-size: ${(prop) => (prop.$firstLine ? "16px" : "32px")};
  font-weight: 400;
  color: ${(prop) => (prop.$firstLine ? LIGHT_ORANGE : BLACK)};
`;
