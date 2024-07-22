import { BLACK, BORDER_GRAY } from "@/constants/colors";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${BORDER_GRAY};
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

interface TextProps {
  color?: string;
  $weight?: number;
  size?: string;
  $margin?: string;
}
export const Text = styled.p<TextProps>`
  color: ${(prop) => prop.color || BLACK};
  font-size: ${(prop) => prop.size || "15px"};
  font-weight: ${(prop) => prop.$weight || 500};
  margin: ${(prop) => prop.$margin || 0};
`;
