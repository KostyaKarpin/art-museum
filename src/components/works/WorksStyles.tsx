// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 30%);
  gap: 10px;
  width: 100%;
  border: 1px solid red;
  /* justify-content: center; */
`;
