// import { useState } from "react";

const useGetImageURL = (imageID: number | null) => {
  // const [imageURL, setImageURL] = useState("");
  if (imageID) {
    // setImageURL(
    //   `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`
    // );
    return `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`;
  }
  return "";
};

export default useGetImageURL;
