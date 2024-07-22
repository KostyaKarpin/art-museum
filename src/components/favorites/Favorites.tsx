import { Image } from "@/globalStyles/ImageStlyes";
import { Decorate, Text } from "../headers/main/MainTitleStyles";
import { GridWrapper, Wrapper } from "./FavoritesStyles";
import BookmarkIcon from "@/assets/images/bookmark-icon.svg";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";
import { useRef } from "react";
import PaintingCard from "../cards/painting/PaintingCard";
import { Painting } from "@/types/PaintingTypes";

export const Favorites = () => {
  const [storageItem] = useLocalStorage("Favorites", JSON.stringify([]));
  const storageArray = useRef(JSON.parse(storageItem));
  return (
    <Wrapper>
      <Text>
        Here are your <Image src={BookmarkIcon} width={"64px"} />{" "}
        <Decorate>Favorites</Decorate>
      </Text>
      <GridWrapper>
        {storageArray &&
          storageArray.current.map((painting: Painting, index: number) => {
            return <PaintingCard key={index} painting={painting} />;
          })}
      </GridWrapper>
    </Wrapper>
  );
};
