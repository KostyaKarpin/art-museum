import useFetch from "@/hooks/useFetch";
import SmallCard from "./SmallCard";

const url = "https://api.artic.edu/api/v1";

const WorksGrid = () => {
  const [paintings] = useFetch(url, 1, 9);
  console.log(paintings);
  return (
    <div>
      <h1>Works Grid</h1>
      {paintings &&
        paintings.map((element, index) => {
          return <SmallCard key={index} painting={element} />;
        })}
    </div>
  );
};

export default WorksGrid;
