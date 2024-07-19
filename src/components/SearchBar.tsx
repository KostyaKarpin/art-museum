import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import SearchBarResults from "./SearchBarResults";
// eslint-disable-next-line import/namespace
import { Field, Form, Formik } from "formik";

const url = "https://api.artic.edu/api/v1/artworks";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result] = useSearch(url, input);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div>
      <h3>SearchBar</h3>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="search"
            id="search"
            value={input}
            placeholder="Search..."
            onChange={(event: { target: { value: string } }) =>
              handleChange(event.target.value)
            }
          />
          {input && <SearchBarResults results={result} />}
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
