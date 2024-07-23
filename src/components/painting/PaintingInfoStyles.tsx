// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 5% 10%;
  height: 100%;

  @media (max-width: 868px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  margin-left: 5%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
