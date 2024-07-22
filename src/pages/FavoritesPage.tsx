import PaintingCard from "@/components/cards/painting/PaintingCard";
import { Painting } from "@/types/PaintingTypes";
import { useRef } from "react";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";

const FavoritesPage = () => {
  const [storageItem] = useLocalStorage("Favorites", JSON.stringify([]));
  const storagedArray = useRef(JSON.parse(storageItem));
  console.log(storagedArray.current);
  return (
    <>
      {storagedArray &&
        storagedArray.current.map((painting: Painting, index: number) => {
          return <PaintingCard key={index} painting={painting} />;
        })}
    </>
  );
};

export default FavoritesPage;
