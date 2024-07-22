import useFetch from "@/hooks/useFetch";
import PaintingCard from "../cards/paintingCard/PaintingCard";
import { GridWrapper, Section } from "./WorksStyles";

const url = "https://api.artic.edu/api/v1";

const Works = () => {
  const [paintings] = useFetch(url, 1, 9);
  console.log(paintings);
  return (
    <Section>
      <h1>Works Grid</h1>
      {paintings && (
        <GridWrapper>
          {paintings.map((element, index) => {
            return <PaintingCard key={index} painting={element} />;
          })}
        </GridWrapper>
      )}
    </Section>
  );
};

export default Works;
