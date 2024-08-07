// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 10%;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  width: 100%;
  margin-top: 3%;

  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
