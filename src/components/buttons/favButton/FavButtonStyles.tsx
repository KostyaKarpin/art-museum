// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import { BACKGROUND_ORANGE, LIGHT_GRAY } from "@/constants/colors";

export const Wrapper = styled.div<{
  onClick: () => void;
  $isFavorite: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(prop) => (prop.$isFavorite ? BACKGROUND_ORANGE : LIGHT_GRAY)};
  padding: 2%;
  border: none;
  border-radius: 100%;
`;

export const Icon = styled.img<{ src: string }>`
  content: ${(prop) => `url(${prop.src})`};
`;
