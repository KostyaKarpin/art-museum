// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

interface TextProps {
  $color?: string;
  $weight?: number;
  $size?: string;
  $margin?: string;
}
export const Text = styled.p<TextProps>`
  color: ${(prop) => prop.$color || prop.theme.colors.black};
  font-size: ${(prop) => prop.$size || "16px"};
  font-weight: ${(prop) => prop.$weight || 500};
  margin: ${(prop) => prop.$margin || 0};
`;
