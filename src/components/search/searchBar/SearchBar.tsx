import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import SearchBarResults from "../searchResults/SearchBarResults";
// eslint-disable-next-line import/namespace
import { ErrorMessage, Formik } from "formik";
import { SearchField, SearchForm, Wrapper } from "./SearchBarStyles";
import { useDebounce } from "@/hooks/useDebounce";
import { validationSchema } from "@/constants/validation";

const url = "https://api.artic.edu/api/v1/artworks";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);
  const [result] = useSearch(url, debouncedValue);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <SearchForm>
          <ErrorMessage name="search" component="div" />
          <SearchField
            type="text"
            name="search"
            id="search"
            value={input}
            placeholder="Search Art, Artist, Work..."
            onChange={(event: { target: { value: string } }) =>
              handleChange(event.target.value)
            }
          />
          {input && <SearchBarResults results={result} />}
        </SearchForm>
      </Formik>
    </Wrapper>
  );
};

export default SearchBar;
