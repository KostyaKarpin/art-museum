// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
import defaultImage from "@/assets/images/default-image.svg";

export const ImageWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(prop) => prop.width || "100%"};
  height: ${(prop) => prop.height || "auto"};
`;

export const Image = styled.img<{ src: string; width?: string }>`
  width: ${(prop) => prop.width || "100%"};
  height: 100%;
  content: ${(prop) =>
    prop.src ? `url(${prop.src})` : `url(${defaultImage})`};
  object-fit: cover;
`;
