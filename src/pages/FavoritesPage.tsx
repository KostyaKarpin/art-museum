// import useLocalStorage from "react-use-localstorage";

import { useState } from "react";

const FavoritesPage = () => {
  // const [storageItem] = useLocalStorage("Favorites");
  const [storageItem] = useState(() => {
    const saved = localStorage.getItem("Favorites") || "";
    const initialValue = JSON.parse(saved);
    return initialValue;
  });
  console.log(storageItem);
  return (
    <div>
      <h1>FavoritesPage</h1>
      {storageItem &&
        storageItem.map((item: number, index: number) => {
          return <p key={index}>ID: {item}</p>;
        })}
    </div>
  );
};

export default FavoritesPage;
