import { useRef } from "react";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";

type Props = {
  paintingID: number;
};

const FavButton = (props: Props) => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "Favorites",
    JSON.stringify([])
  );

  const storagedArray = useRef(JSON.parse(storageItem));
  const isFavorited = storagedArray.current.includes(props.paintingID);

  console.log("StorageItem: " + storageItem);
  console.log("StoragedArray: ");
  console.log(storagedArray);
  console.log("IsFavorited: " + isFavorited);

  const handleToggleFavorite = (): void => {
    if (!isFavorited) {
      storagedArray.current.push(props.paintingID);
      setStorageItem(JSON.stringify(storagedArray.current));
    } else {
      const indexFavoritedID = storagedArray.current.indexOf(props.paintingID);
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