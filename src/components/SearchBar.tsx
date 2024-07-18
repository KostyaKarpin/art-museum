// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.artic.edu/api/v1/artworks/search?q=${input}`, {
        params: { fields: ["artist_title", "title", "date_display"] },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setResult(data);
      });
  }, [input]);

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
      <div>
        <h4>Search result</h4>
        {result &&
          result.map((item, index) => {
            return (
              <div key={index}>
                <h6 onClick={() => console.log(item)} aria-hidden={true}>
                  {item["title"]}
                </h6>
                <h6>----------------------</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
