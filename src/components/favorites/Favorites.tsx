import { Image } from "@/globalStyles/ImageStlyes";
import { Decorate, Text } from "../headers/main/MainTitleStyles";
import { GridWrapper, Wrapper } from "./FavoritesStyles";
import BookmarkIcon from "@/assets/images/bookmark-icon.svg";
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import useLocalStorage from "react-use-localstorage";
import { useRef } from "react";
import PaintingCard from "../cards/painting/PaintingCard";
import { Painting } from "@/types/PaintingTypes";
// eslint-disable-next-line import/namespace
import { Field, Form, Formik } from "formik";

export const Favorites = () => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "Favorites",
    JSON.stringify([])
  );
  const storageArray = useRef(JSON.parse(storageItem));

  const handleChange = (value: string) => {
    switch (value) {
      case "Title": {
        storageArray.current.sort((a: Painting, b: Painting) => {
          return a.title && b.title ? a.title.localeCompare(b.title) : -1;
        });
        setStorageItem(JSON.stringify(storageArray.current));
        break;
      }
      case "Artist": {
        storageArray.current.sort((a: Painting, b: Painting) => {
          return a.artist_title && b.artist_title
            ? a.artist_title.localeCompare(b.artist_title)
            : -1;
        });
        setStorageItem(JSON.stringify(storageArray.current));
        break;
      }
      case "Public": {
        storageArray.current.sort((a: Painting, b: Painting) => {
          return +b.is_public_domain - +a.is_public_domain;
        });
        setStorageItem(JSON.stringify(storageArray.current));
        break;
      }
    }
    console.log(storageArray.current);
  };

  return (
    <Wrapper>
      <Text>
        Here are your <Image src={BookmarkIcon} width={"32px"} />{" "}
        <Decorate>Favorites</Decorate>
      </Text>
      <Formik
        initialValues={{ filter: "Select option to filter" }}
        onSubmit={() => console.log("Submitted")}
      >
        <Form>
          <Field
            as="select"
            name="filter"
            onChange={(event: { target: { value: string } }) =>
              handleChange(event.target.value)
            }
          >
            {["Select option to filter", "Title", "Artist", "Public"].map(
              (item: string, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </Field>
        </Form>
      </Formik>

      <GridWrapper>
        {storageArray &&
          storageArray.current.map((painting: Painting, index: number) => {
            return <PaintingCard key={index} painting={painting} />;
          })}
      </GridWrapper>
    </Wrapper>
  );
};
