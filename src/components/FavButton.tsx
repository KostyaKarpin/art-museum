import { Painting } from "@/types/PaintingTypes";
import { useRef } from "react";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";

type Props = {
  painting: Painting;
};

const FavButton = (props: Props) => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "Favorites",
    JSON.stringify([])
  );
  const storagedArray = useRef(JSON.parse(storageItem));
  const isFavorited = storagedArray.current.find(
    (obj: Painting) => obj.id === props.painting.id
  );

  const handleToggleFavorite = (): void => {
    if (!isFavorited) {
      storagedArray.current.push(props.painting);
      setStorageItem(JSON.stringify(storagedArray.current));
    } else {
      const indexFavoritedID = storagedArray.current.findIndex(
        (obj: Painting) => obj.id === props.painting.id
      );
      console.log("indexFav: " + indexFavoritedID);
      storagedArray.current.splice(indexFavoritedID, 1);
      setStorageItem(JSON.stringify(storagedArray.current));
    }
  };

  return (
    <>
      <button onClick={handleToggleFavorite}>
        {isFavorited ? "Remove from favorites" : "Add to favorites"}
      </button>
    </>
  );
};

export default FavButton;
