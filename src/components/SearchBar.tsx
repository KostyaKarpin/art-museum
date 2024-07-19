import useSearch from "@/hooks/useSearch";
import { useState } from "react";

const url = "https://api.artic.edu/api/v1/artworks";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result] = useSearch(url, input);

  const handleChange = (value: string) => {
    setInput(value);
  };
  console.log(result);

  return (
    <div>
      <h3>SearchBar</h3>
      <input
        placeholder="Search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
      <div>
        <h4>Search result</h4>
        {result &&
          result.map((element) => {
            return (
              <div key={element["id"]}>
                <h6>{element["title"]}</h6>
                <h6>{element["artist_title"]}</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
