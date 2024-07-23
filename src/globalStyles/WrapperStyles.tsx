// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

interface WrapperProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
}

export const ComponentWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(prop) => prop.$direction || "row"};
  flex-direction: ${(prop) => prop.$direction || "center"};
  flex-direction: ${(prop) => prop.$direction || "center"};
  width: 100%;
`;
