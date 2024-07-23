// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { paintingFields } from "@/constants/fields";
import { useEffect, useState } from "react";

const useFetch = (
  url: string,
  page: number,
  limit: number,
  isLoading: (loading: boolean) => void
) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/artworks`, {
        params: { fields: paintingFields, page: page, limit: limit },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setData(data);
        isLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url, page, limit]);

  return [data];
};

export default useFetch;
