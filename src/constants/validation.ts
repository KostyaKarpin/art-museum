// eslint-disable-next-line import/namespace
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  search: Yup.string().matches(
    /^[a-z]+$/,
    "Only alphabetic characters allowed"
  ),
});
