// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import styled from "styled-components";
// eslint-disable-next-line import/namespace
import { Field, Form } from "formik";
import { GRAY } from "@/constants/colors";

export const Wrapper = styled.div`
  width: 100%;
`;

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const SearchField = styled(Field)`
  width: 50%;
  background: ${GRAY};
  border: none;
  border-radius: 20px;
  font-size: 14px;
  padding: 2% 1%;

  &:focus {
    outline: none;
  }
`;
