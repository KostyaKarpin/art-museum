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
  padding: 5%;
  border: none;
  border-radius: 100%;

  @media (max-width: 868px) {
    margin-top: 5%;
    border-radius: 2%;
    width: 100%;
  }
`;

export const Icon = styled.img<{ src: string }>`
  content: ${(prop) => `url(${prop.src})`};
`;
