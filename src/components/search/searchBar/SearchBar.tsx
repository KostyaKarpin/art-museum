import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import SearchBarResults from "../searchResults/SearchBarResults";
// eslint-disable-next-line import/namespace
import { Formik } from "formik";
import { SearchField, SearchForm, Wrapper } from "./SearchBarStyles";

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
    <Wrapper>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <SearchForm>
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
