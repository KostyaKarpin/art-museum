// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const ImageWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(prop) => prop.width || "100%"};
  height: ${(prop) => prop.height || "auto"};
`;

export const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  content: ${(prop) => `url(${prop.src})`};
  object-fit: cover;
`;
