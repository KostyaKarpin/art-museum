// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { searchFields } from "@/constants/fields";
import { useState, useEffect } from "react";

const useSearch = (url: string, input: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/search?q=${input}`, {
        params: { fields: searchFields },
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
