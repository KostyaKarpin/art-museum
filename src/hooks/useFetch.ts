// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string, page: number, limit: number) => {
  const [data, setData] = useState([]);
  const fields = [
    "id",
    "image_id",
    "title",
    "artist_title",
    "artist_display",
    "date_display",
    "dimensions",
    "credit_line",
    "is_public_domain",
  ];
  useEffect(() => {
    axios
      .get(`${url}/artworks`, {
        params: { fields: fields, page: page, limit: limit },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [url, page, limit]);

  return [data];
};

export default useFetch;
