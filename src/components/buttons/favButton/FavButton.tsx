import { Painting } from "@/types/PaintingTypes";
import { useRef } from "react";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";
import { Icon, Wrapper } from "./FavButtonStyles";
import bookmark from "@/assets/images/bookmark-icon.svg";

type Props = {
  painting: Painting;
};

const FavButton = (props: Props) => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "Favorites",
    JSON.stringify([])
  );
  const storageArray = useRef(JSON.parse(storageItem));
  const isFavorite = storageArray.current.find(
    (obj: Painting) => obj.id === props.painting.id
  );

  const handleToggleFavorite = (): void => {
    if (!isFavorite) {
      storageArray.current.push(props.painting);
      setStorageItem(JSON.stringify(storageArray.current));
    } else {
      const indexFavoriteID = storageArray.current.findIndex(
        (obj: Painting) => obj.id === props.painting.id
      );
      console.log("indexFav: " + indexFavoriteID);
      storageArray.current.splice(indexFavoriteID, 1);
      setStorageItem(JSON.stringify(storageArray.current));
    }
  };

  return (
    <Wrapper onClick={handleToggleFavorite} isFavorite={Boolean(isFavorite)}>
      <Icon src={bookmark} />
    </Wrapper>
  );
};

export default FavButton;
