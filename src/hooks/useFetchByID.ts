// eslint-disable-next-line import/namespace, import/no-named-as-default, import/default, import/no-named-as-default-member
import axios from "axios";
import { Painting } from "@/types/PaintingTypes";
import { useEffect, useState } from "react";
import { paintingFields } from "@/constants/fields";

const useFetchByID = (id: string) => {
  const url = "https://api.artic.edu/api/v1/artworks";
  const paintingID = Number(id.slice(1));
  const [data, setData] = useState<Painting>();
  useEffect(() => {
    axios
      .get(`${url}/${paintingID}`, {
        params: { fields: paintingFields },
      })
      .then((res) => res.data.data)
      .then((data: Painting) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return data;
};

export default useFetchByID;
