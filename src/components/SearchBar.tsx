import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import SearchBarResults from "./SearchBarResults";

const url = "https://api.artic.edu/api/v1/artworks";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result] = useSearch(url, input);

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div>
      <h3>SearchBar</h3>
      <input
        placeholder="Search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
      {input && <SearchBarResults results={result} />}
    </div>
  );
};

export default SearchBar;
