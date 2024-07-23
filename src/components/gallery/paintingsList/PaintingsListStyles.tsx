// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const PaintingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

export const PaginationWrapper = styled.div`
  align-self: flex-end;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
