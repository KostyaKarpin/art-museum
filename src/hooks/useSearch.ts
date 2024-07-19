// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { useState, useEffect } from "react";

const useSearch = (url: string, input: string) => {
  const [data, setData] = useState([]);
  const fields = ["id", "title", "api_link", "artist_title"];

  useEffect(() => {
    axios
      .get(`${url}/search?q=${input}`, {
        params: { fields: fields, limit: 3 },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [url, input]);

  return [data];
};

export default useSearch;
