// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Text = styled.h2<{ $firstLine: boolean }>`
  font-size: ${(prop) =>
    prop.$firstLine
      ? prop.theme.fontSize.desktop.small
      : prop.theme.fontSize.desktop.large};
  font-weight: 400;
  color: ${(prop) =>
    prop.$firstLine ? prop.theme.colors.light_orange : prop.theme.colors.black};

  @media (max-width: 470px) {
    font-size: ${(prop) =>
      prop.$firstLine
        ? prop.theme.fontSize.mobile.small
        : prop.theme.fontSize.mobile.large};
  }
`;
