// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(prop) => prop.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
